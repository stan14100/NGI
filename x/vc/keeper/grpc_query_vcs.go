package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stan14100/NGI/x/vc/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Vcs(goCtx context.Context, req *types.QueryVcsRequest) (*types.QueryVcsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	vcs := k.GetAllVerifiableCredentials(ctx)

	return &types.QueryVcsResponse{Vcs: vcs}, nil
}
