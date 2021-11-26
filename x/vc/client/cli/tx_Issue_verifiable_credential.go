package cli

import (
	"strconv"
	// "github.com/spf13/cobra"
	//   "github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// "github.com/cosmos/cosmos-sdk/client/tx"
	// "github.com/stan14100/NGI/x/vc/types"
)

var _ = strconv.Itoa(0)

func CmdIssueVerifiableCredential() {
	// cmd := &cobra.Command{
	// 	Use:   "create-verifiable-credential [verifiable-credential]",
	// 	Short: "Broadcast message IssueVerifiableCredential",
	// 	Args:  cobra.ExactArgs(1),
	// 	RunE: func(cmd *cobra.Command, args []string) (err error) {
	//     		 argVerifiableCredential := args[0]

	// 		clientCtx, err := client.GetClientTxContext(cmd)
	// 		if err != nil {
	// 			return err
	// 		}

	// 		msg := types.NewMsgIssueVerifiableCredential(
	// 			clientCtx.GetFromAddress().String(),
	// 			argVerifiableCredential,

	// 		)
	// 		if err := msg.ValidateBasic(); err != nil {
	// 			return err
	// 		}
	// 		return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
	// 	},
	// }

	//flags.AddTxFlagsToCmd(cmd)

	return //cmd
}
