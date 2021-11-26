package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stan14100/NGI/x/did/types"
)

func (k msgServer) AddService(goCtx context.Context, msg *types.MsgAddService) (*types.MsgAddServiceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.Logger(ctx).Info("Request to add to the did document with id:%s the service: %s", msg.Id, msg.Service)
	// pchecks if the service info provided are following the spec
	if err := types.ValidateService(msg.Service); err != nil {
		k.Logger(ctx).Error(err.Error())
		return nil, err
	}

	didDoc, found := k.Keeper.GetDidDocument(ctx, []byte(msg.Id))
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrDidDocumentNotFound, "did document with id:%s not found", msg.Id)
	}

	err := didDoc.AddServices(msg.Service)
	if err != nil {
		k.Logger(ctx).Error(err.Error())
		return nil, err
	}

	// store the did Document to store
	k.Keeper.AddDidDocument(ctx, []byte(msg.Id), didDoc)

	if err := updateDidMetadata(&k.Keeper, ctx, didDoc.Id); err != nil {
		k.Logger(ctx).Error(err.Error(), "did", didDoc.Id)
	}

	k.Logger(ctx).Info("Service added to the did document with id:%s and controller:%s", msg.Id, msg.Creator)

	return &types.MsgAddServiceResponse{}, nil
}
