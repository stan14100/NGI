package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgDeleteService{}

func NewMsgDeleteService(creator string, id string, serviceId string) *MsgDeleteService {
	return &MsgDeleteService{
		Creator:   creator,
		Id:        id,
		ServiceId: serviceId,
	}
}

func (msg *MsgDeleteService) Route() string {
	return RouterKey
}

func (msg *MsgDeleteService) Type() string {
	return "DeleteService"
}

func (msg *MsgDeleteService) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteService) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteService) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
