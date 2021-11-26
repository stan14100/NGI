package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/stan14100/NGI/x/did/types"
)

var _ = strconv.Itoa(0)

func CmdRemoveService() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "remove-service [service-id]",
		Short: "Broadcast message RemoveService which deletes the requested service of the did of tx's creator",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			account := clientCtx.GetFromAddress()

			did := types.GenerateDid(account.String())

			argServiceId := args[1]

			msg := types.NewMsgRemoveService(
				clientCtx.GetFromAddress().String(),
				did.String(),
				argServiceId,
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
