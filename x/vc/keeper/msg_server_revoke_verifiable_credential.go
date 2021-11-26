package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stan14100/NGI/x/vc/types"
)

func (k msgServer) RevokeVerifiableCredential(goCtx context.Context, msg *types.MsgRevokeVerifiableCredential) (*types.MsgRevokeVerifiableCredentialResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//k.Logger(ctx).Info("Request to revoke a credential with id:%s", msg.CredentialId)

	if vcErr := k.DeleteVerifiableCredentialFromStore(ctx, []byte(msg.CredentialId), msg.Creator); vcErr != nil {
		err := sdkerrors.Wrapf(vcErr, "credential proof cannot be verified")
		//k.Logger(ctx).Error(err.Error())
		return nil, err
	}

	//k.Logger(ctx).Info("Revoke VC request completed succesfully for the credential with id:%s",msg.CredentialId)

	return &types.MsgRevokeVerifiableCredentialResponse{}, nil
}
