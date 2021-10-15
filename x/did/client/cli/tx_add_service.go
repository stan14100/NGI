package cli

import (
	"strconv"
	//"github.com/spf13/cobra"
	// "github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// "github.com/cosmos/cosmos-sdk/client/tx"
	// "github.com/stan14100/NGI/x/did/types"
)

var _ = strconv.Itoa(0)

func CmdAddService() {
	// cmd := &cobra.Command{
	// 	Use:   "add-service [id] [services]",
	// 	Short: "Broadcast message AddService",
	// 	Args:  cobra.ExactArgs(2),
	// 	RunE: func(cmd *cobra.Command, args []string) (err error) {
	// 		argId := args[0]
	// 		argServices := args[1]

	// 		clientCtx, err := client.GetClientTxContext(cmd)
	// 		if err != nil {
	// 			return err
	// 		}

	// 		msg := types.NewMsgAddService(
	// 			clientCtx.GetFromAddress().String(),
	// 			argId,
	// 			argServices,
	// 		)
	// 		if err := msg.ValidateBasic(); err != nil {
	// 			return err
	// 		}
	// 		return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
	// 	},
	// }

	// flags.AddTxFlagsToCmd(cmd)

	return //cmd
}
