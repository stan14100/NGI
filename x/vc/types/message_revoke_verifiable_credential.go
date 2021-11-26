package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRevokeVerifiableCredential{}

func NewMsgRevokeVerifiableCredential(creator string, credentialId string) *MsgRevokeVerifiableCredential {
	return &MsgRevokeVerifiableCredential{
		Creator:      creator,
		CredentialId: credentialId,
	}
}

func (msg *MsgRevokeVerifiableCredential) Route() string {
	return RouterKey
}

func (msg *MsgRevokeVerifiableCredential) Type() string {
	return "RevokeVerifiableCredential"
}

func (msg *MsgRevokeVerifiableCredential) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRevokeVerifiableCredential) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRevokeVerifiableCredential) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
