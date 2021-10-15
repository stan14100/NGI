package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stan14100/NGI/x/vc/types"
)

func (k msgServer) CreaRevokeVerifiableCredential(goCtx context.Context, msg *types.MsgCreaRevokeVerifiableCredential) (*types.MsgCreaRevokeVerifiableCredentialResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreaRevokeVerifiableCredentialResponse{}, nil
}
