package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRemoveService{}

func NewMsgRemoveService(creator string, id string, serviceId string) *MsgRemoveService {
	return &MsgRemoveService{
		Creator:   creator,
		Id:        id,
		ServiceId: serviceId,
	}
}

func (msg *MsgRemoveService) Route() string {
	return RouterKey
}

func (msg *MsgRemoveService) Type() string {
	return "RemoveService"
}

func (msg *MsgRemoveService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
