package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/stan14100/NGI/x/vc/types"
)

var _ = strconv.Itoa(0)

func CmdValidateVc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "validate-vc [vc-id] [pub-key]",
		Short: "Validate vc",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)

			// query to get the verifiable credential
			params := &types.QueryVcRequest{VcId: args[0]}
			res, err := queryClient.Vc(cmd.Context(), params)
			if err != nil {
				return err
			}

			// check the returned credential is signed by the provided pubkey
			var pk cryptotypes.PubKey
			err = clientCtx.Codec.UnmarshalInterfaceJSON([]byte(args[1]), &pk)
			if err != nil {
				panic(err)
			}

			validation := res.Vc.Validate(pk)

			result := &types.QueryValidateVcResponse{
				ValidationRes: validation,
			}

			return clientCtx.PrintProto(result)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
