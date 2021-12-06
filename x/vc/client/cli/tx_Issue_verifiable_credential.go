package cli

import (
	"strconv"
	"time"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/spf13/cobra"
	didtypes "github.com/stan14100/NGI/x/did/types"
	"github.com/stan14100/NGI/x/vc/types"
)

var _ = strconv.Itoa(0)

func CmdIssueVerifiableCredential() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "issue-vc [cred_subject] [cred_id] [cred_type] [test_id] [result]",
		Short: "Broadcast message IssueVerifiableCredential",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			accAddr := clientCtx.GetFromAddress()
			account := accAddr.String()

			credentialSubject := didtypes.Did(args[0])
			credentialID := args[1]
			issuerDid := didtypes.GenerateDid(account)

			result, _ := strconv.ParseBool(args[4])

			subject := types.NewUserSubject(credentialSubject.String(), args[3], result)

			tm := time.Now()

			flag := types.IsValidCredentialType(args[2])
			if !flag {
				err := sdkerrors.Wrapf(types.ErrTypeNotValid, args[2])
				return err
			}

			vc := types.NewVerifiableCredential(
				credentialID,
				issuerDid.String(),
				args[2],
				tm,
				subject,
			)

			vmId := issuerDid.NewVerificationMethodId(account)

			signedVc, err := vc.Sign(clientCtx.Keyring, accAddr, vmId)
			if err != nil {
				return err
			}

			msg := types.NewMsgIssueVerifiableCredential(
				account,
				&signedVc,
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
