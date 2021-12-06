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
		Use:   "revoke-vc [credential-id]",
		Short: "Broadcast message RevokeVerifiableCredential which revokes a credential for a user",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			accAddr := clientCtx.GetFromAddress()
			account := accAddr.String()

			credentialId := args[0]

			msg := types.NewMsgRevokeVerifiableCredential(
				account,
				credentialId,
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
