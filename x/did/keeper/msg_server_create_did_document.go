package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stan14100/NGI/x/did/types"
)

func (k msgServer) CreateDidDocument(goCtx context.Context, msg *types.MsgCreateDidDocument) (*types.MsgCreateDidDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	did, err := types.NewDidDocument(msg.Id,
		types.WithServices(msg.Services...),
		// types.WithVerifications(msg.Verifications...),
	)
	if err != nil {
		return nil, err
	}

	_, found := k.Keeper.GetDidDocument(ctx, []byte(msg.Id))
	if found {
		return nil, sdkerrors.Wrapf(types.ErrDidDocumentFound, "a document with did %s already exists", msg.Id)
	}

	k.Keeper.AddDidDocument(ctx, []byte(msg.Id), did)

	k.Logger(ctx).Info("Created a DidDocument for did:%s and controller:%s", msg.Id, msg.Creator)

	return &types.MsgCreateDidDocumentResponse{}, nil
}
