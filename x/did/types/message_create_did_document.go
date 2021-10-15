package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateDidDocument{}

func NewMsgCreateDidDocument(creator string, id string, controller string, services []*Service) *MsgCreateDidDocument {
	return &MsgCreateDidDocument{
		Creator:    creator,
		Id:         id,
		Controller: controller,
		Services:   services,
	}
}

func (msg *MsgCreateDidDocument) Route() string {
	return RouterKey
}

func (msg *MsgCreateDidDocument) Type() string {
	return "CreateDidDocument"
}

func (msg *MsgCreateDidDocument) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDidDocument) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDidDocument) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
