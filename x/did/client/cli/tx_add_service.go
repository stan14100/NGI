package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/stan14100/NGI/x/did/types"
)

var _ = strconv.Itoa(0)

func CmdAddService() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-service [service_id] [type] [endpoint]",
		Short: "Broadcast message addService which adds a service to the did of the tx's creator",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			account := clientCtx.GetFromAddress()

			did := types.GenerateDid(account.String())

			// service parameters
			serviceID, serviceType, endpoint := args[0], args[1], args[2]

			service := types.NewService(
				serviceID,
				serviceType,
				endpoint,
			)

			msg := types.NewMsgAddService(
				clientCtx.GetFromAddress().String(),
				did.String(),
				service,
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
