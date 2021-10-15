package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreaRevokeVerifiableCredential{}

func NewMsgCreaRevokeVerifiableCredential(creator string, credentialId string) *MsgCreaRevokeVerifiableCredential {
	return &MsgCreaRevokeVerifiableCredential{
		Creator:      creator,
		CredentialId: credentialId,
	}
}

func (msg *MsgCreaRevokeVerifiableCredential) Route() string {
	return RouterKey
}

func (msg *MsgCreaRevokeVerifiableCredential) Type() string {
	return "CreaRevokeVerifiableCredential"
}

func (msg *MsgCreaRevokeVerifiableCredential) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreaRevokeVerifiableCredential) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreaRevokeVerifiableCredential) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
