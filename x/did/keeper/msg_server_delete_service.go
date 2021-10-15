package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stan14100/NGI/x/did/types"
)

func (k msgServer) DeleteService(goCtx context.Context, msg *types.MsgDeleteService) (*types.MsgDeleteServiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	k.Logger(ctx).Info("Request to remove the service with id:%s from did document with id:%s ", msg.ServiceId, msg.Id)
	// retrieve the did document
	didDoc, found := k.Keeper.GetDidDocument(ctx, []byte(msg.Id))
	if !found {
		err := sdkerrors.Wrapf(types.ErrDidDocumentNotFound, "did document with id:%s not found", msg.Id)
		k.Logger(ctx).Error(err.Error())
		return nil, err
	}

	if len(didDoc.Service) == 0 {
		err := sdkerrors.Wrapf(types.ErrInvalidState, "the did document doesn't have services associated")
		k.Logger(ctx).Error(err.Error())
		return nil, err
	}
	// delete the service
	didDoc.DeleteService(msg.ServiceId)

	// persist the new did document
	k.Keeper.AddDidDocument(ctx, []byte(msg.Id), didDoc)
	k.Logger(ctx).Info("removed service from did document with id:%s and controller:%s", msg.Id, msg.Creator)

	return &types.MsgDeleteServiceResponse{}, nil
}
