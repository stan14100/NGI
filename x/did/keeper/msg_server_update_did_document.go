package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stan14100/NGI/x/did/types"
)

func (k msgServer) UpdateDidDocument(goCtx context.Context, msg *types.MsgUpdateDidDocument) (*types.MsgUpdateDidDocumentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.Logger(ctx).Info("Request to update a did document with id:", msg.Id)

	didDoc, found := k.Keeper.GetDidDocument(ctx, []byte(msg.Id))
	if !found {
		err := sdkerrors.Wrapf(types.ErrDidDocumentNotFound, "did document with id:%s not found", msg.Id)
		k.Logger(ctx).Error(err.Error())
		return nil, err
	}

	err := didDoc.SetControllers(msg.Controller...)
	if err != nil {
		k.Logger(ctx).Error(err.Error())
		return nil, err
	}

	k.Keeper.AddDidDocument(ctx, []byte(msg.Id), didDoc)
	k.Logger(ctx).Info("updated did document with id:%s and controller:%s", msg.Id, msg.Creator)

	return &types.MsgUpdateDidDocumentResponse{}, nil
}
