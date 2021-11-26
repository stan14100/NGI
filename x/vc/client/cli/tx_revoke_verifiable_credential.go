package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/stan14100/NGI/x/vc/types"
)

var _ = strconv.Itoa(0)

func CmdRevokeVerifiableCredential() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "revoke-verifiable-credential [credential-id]",
		Short: "Broadcast message RevokeVerifiableCredential",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCredentialId := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRevokeVerifiableCredential(
				clientCtx.GetFromAddress().String(),
				argCredentialId,
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
