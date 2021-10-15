package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateVerifiableCredential{}

func NewMsgCreateVerifiableCredential(creator string, verifiableCredential *VerifiableCredential) *MsgCreateVerifiableCredential {
	return &MsgCreateVerifiableCredential{
		Creator:              creator,
		VerifiableCredential: verifiableCredential,
	}
}

func (msg *MsgCreateVerifiableCredential) Route() string {
	return RouterKey
}

func (msg *MsgCreateVerifiableCredential) Type() string {
	return "CreateVerifiableCredential"
}

func (msg *MsgCreateVerifiableCredential) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateVerifiableCredential) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateVerifiableCredential) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
