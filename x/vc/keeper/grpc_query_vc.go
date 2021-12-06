package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stan14100/NGI/x/vc/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Vc(goCtx context.Context, req *types.QueryVcRequest) (*types.QueryVcResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	if req.VcId == "" {
		return nil, status.Error(codes.InvalidArgument, "verifiable credential id cannot be empty")
	}

	vc, found := k.GetVerifiableCredential(ctx, []byte(req.VcId))
	if !found {
		return nil, status.Errorf(codes.NotFound, "vc %s not found", req.VcId)
	}

	return &types.QueryVcResponse{Vc: vc}, nil
}
