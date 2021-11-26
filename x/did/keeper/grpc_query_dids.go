package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stan14100/NGI/x/did/types"
)

func (k Keeper) Dids(goCtx context.Context, req *types.QueryDidsRequest) (*types.QueryDidsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	dids := k.GetAllDidDocuments(ctx)

	return &types.QueryDidsResponse{
		DidDocuments: dids,
	}, nil
}
