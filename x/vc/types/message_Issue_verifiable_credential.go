package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgIssueVerifiableCredential{}

func NewMsgIssueVerifiableCredential(creator string, verifiableCredential *VerifiableCredential) *MsgIssueVerifiableCredential {
	return &MsgIssueVerifiableCredential{
		Creator:              creator,
		VerifiableCredential: verifiableCredential,
	}
}

func (msg *MsgIssueVerifiableCredential) Route() string {
	return RouterKey
}

func (msg *MsgIssueVerifiableCredential) Type() string {
	return "IssueVerifiableCredential"
}

func (msg *MsgIssueVerifiableCredential) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgIssueVerifiableCredential) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgIssueVerifiableCredential) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
