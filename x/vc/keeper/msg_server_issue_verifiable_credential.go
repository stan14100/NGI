package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stan14100/NGI/x/vc/types"
)

func (k msgServer) IssueVerifiableCredential(goCtx context.Context, msg *types.MsgIssueVerifiableCredential) (*types.MsgIssueVerifiableCredentialResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.Keeper.GetVerifiableCredential(ctx, []byte(msg.VerifiableCredential.Id))
	if found {
		return nil, sdkerrors.Wrapf(
			types.ErrVerifiableCredentialFound,
			"vc already exists",
		)

	}

	k.Keeper.AddVerifiableCredential(
		ctx,
		[]byte(msg.VerifiableCredential.Id),
		*msg.VerifiableCredential,
	)

	return &types.MsgIssueVerifiableCredentialResponse{}, nil
}
