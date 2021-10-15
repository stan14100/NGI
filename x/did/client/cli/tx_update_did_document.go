package cli

import (
	"strconv"
	// "github.com/spf13/cobra"
	// "github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// "github.com/cosmos/cosmos-sdk/client/tx"
	// "github.com/stan14100/NGI/x/did/types"
)

var _ = strconv.Itoa(0)

func CmdUpdateDidDocument() {
	// cmd := &cobra.Command{
	// 	Use:   "update-did-document [id] [controller]",
	// 	Short: "Broadcast message updateDidDocument",
	// 	Args:  cobra.ExactArgs(2),
	// 	RunE: func(cmd *cobra.Command, args []string) (err error) {
	// 		argId := args[0]
	// 		argController := args[1]

	// 		clientCtx, err := client.GetClientTxContext(cmd)
	// 		if err != nil {
	// 			return err
	// 		}

	// 		msg := types.NewMsgUpdateDidDocument(
	// 			clientCtx.GetFromAddress().String(),
	// 			argId,
	// 			argController,
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
