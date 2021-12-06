package keeper

import (
	"context"

	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stan14100/NGI/x/vc/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ValidateVc(goCtx context.Context, req *types.QueryValidateVcRequest) (*types.QueryValidateVcResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	vc, found := k.GetVerifiableCredential(ctx, []byte(req.VcId))
	if !found {
		return nil, status.Errorf(codes.NotFound, "vc %s not found", req.VcId)
	}

	var pk cryptotypes.PubKey

	validation := vc.Validate(pk)

	return &types.QueryValidateVcResponse{ValidationRes: validation}, nil
}
