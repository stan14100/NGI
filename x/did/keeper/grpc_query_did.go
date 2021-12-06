package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stan14100/NGI/x/did/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Did(goCtx context.Context, req *types.QueryDidRequest) (*types.QueryDidResponse, error) {
	if req.Id == "" {
		return nil, status.Error(codes.InvalidArgument, "id cannot be empty")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	doc, meta, err := k.ResolveDid(ctx, types.Did(req.Id))
	if err != nil {
		return nil, status.Error(codes.NotFound, err.Error())
	}
	return &types.QueryDidResponse{
		DidDocument: &doc,
		DidMetadata: &meta,
	}, nil
}
