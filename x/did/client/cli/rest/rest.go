package rest

import (
	"net/http"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/gorilla/mux"
	"github.com/stan14100/NGI/x/did/types"
)

// RegisterRoutes registers did-related REST handlers to a router
func RegisterRoutes(cliCtx client.Context, r *mux.Router) {
	r.HandleFunc("stan14100/did/createdid", createDid(cliCtx)).Methods("POST")
}

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

func createDid(cliCtx client.Context) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		account := cliCtx.GetFromAddress()

		did := types.GenerateDid(account.String())

		pubkey_info, err := cliCtx.Keyring.KeyByAddress(account)
		if err != nil {
			return
		}

		pubKey := pubkey_info.GetPubKey()

		vmID := did.NewVerificationMethodId(account.String())

		vmType, err := calcVMType(pubKey)
		if err != nil {
			return
		}
		verification := types.NewVerification(
			types.NewVerificationMethod(
				vmID,
				did,
				types.NewPublicKeyMultibase(pubKey.Bytes(), vmType),
			),
			[]string{types.Authentication, types.AssertionMethod},
		)

		msg := types.NewMsgCreateDidDocument(
			account.String(),
			did.String(),
			did.String(),
			types.Verifications{verification},
			types.Services{},
		)
		if err := msg.ValidateBasic(); err != nil {
			return
		}
	}
}
