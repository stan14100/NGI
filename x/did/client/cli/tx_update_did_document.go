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

func CmdUpdateDid() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-did-document [controller]",
		Short: "Broadcast message updateDidDocument which changes the controller of the did of the tx's creator",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			argController := args[0]

			controller := types.GenerateDid(argController)

			account := clientCtx.GetFromAddress()

			did := types.GenerateDid(account.String())

			msg := types.NewMsgUpdateDidDocument(
				clientCtx.GetFromAddress().String(),
				did.String(),
				[]string{controller.String()},
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
