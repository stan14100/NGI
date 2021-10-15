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

func CmdCreateDidDocument() {
	// cmd := &cobra.Command{
	// 	Use:   "create-did-document [id] [controller] [services]",
	// 	Short: "Broadcast message createDidDocument",
	// 	Args:  cobra.ExactArgs(3),
	// 	RunE: func(cmd *cobra.Command, args []interface{String, String, []*Service}) (err error) {
	// 		argId := args[0]
	// 		argController := args[1]
	// 		argServices := args[2]

	// 		clientCtx, err := client.GetClientTxContext(cmd)
	// 		if err != nil {
	// 			return err
	// 		}

	// 		msg := types.NewMsgCreateDidDocument(
	// 			clientCtx.GetFromAddress().String(),
	// 			argId,
	// 			argController,
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
