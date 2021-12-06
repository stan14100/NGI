package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/stan14100/NGI/x/vc/types"
)

var _ = strconv.Itoa(0)

func CmdVc() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "vc [vc-id]",
		Short: "Query vc",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			reqVcId := args[0]

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryVcRequest{VcId: reqVcId}

			res, err := queryClient.Vc(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
