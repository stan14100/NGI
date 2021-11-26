package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/spf13/cobra"
	"github.com/stan14100/NGI/x/did/types"
)

var _ = strconv.Itoa(0)

func calcVMType(pubKey cryptotypes.PubKey) (vmType types.VerificationMaterialType, err error) {
	switch pubKey.(type) {
	case *secp256k1.PubKey:
		vmType = types.DIDVMethodTypeEcdsaSecp256k1VerificationKey2019
	case *ed25519.PubKey:
		vmType = types.DIDVMethodTypeEd25519VerificationKey2018
	default:
		err = types.ErrKeyFormat
	}
	return
}

func CmdCreateDid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-did",
		Short: "Broadcast message createDidDocument which creates a did document for the creator of the tx",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			account := clientCtx.GetFromAddress()

			did := types.GenerateDid(account.String())

			pubkey_info, err := clientCtx.Keyring.KeyByAddress(account)
			if err != nil {
				return err
			}

			pubKey := pubkey_info.GetPubKey()

			vmID := did.NewVerificationMethodId(account.String())

			vmType, err := calcVMType(pubKey)
			if err != nil {
				return err
			}
			verification := types.NewVerification(
				types.NewVerificationMethod(
					vmID,
					did,
					types.NewPublicKeyMultibase(pubKey.Bytes(), vmType),
				),
				[]string{types.Authentication},
			)

			msg := types.NewMsgCreateDidDocument(
				clientCtx.GetFromAddress().String(),
				did.String(),
				did.String(),
				types.Verifications{verification},
				types.Services{},
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
