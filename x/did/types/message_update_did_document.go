package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgUpdateDidDocument{}

func NewMsgUpdateDidDocument(creator string, id string, controller []string) *MsgUpdateDidDocument {
	return &MsgUpdateDidDocument{
		Creator:    creator,
		Id:         id,
		Controller: controller,
	}
}

func (msg *MsgUpdateDidDocument) Route() string {
	return RouterKey
}

func (msg *MsgUpdateDidDocument) Type() string {
	return "UpdateDidDocument"
}

func (msg *MsgUpdateDidDocument) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateDidDocument) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateDidDocument) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
