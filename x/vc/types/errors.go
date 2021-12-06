package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/vc module sentinel errors
var (
	ErrSample                       = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrVerifiableCredentialNotFound = sdkerrors.Register(ModuleName, 1101, "Vc not found")
	ErrVerifiableCredentialFound    = sdkerrors.Register(ModuleName, 1102, "Vc found")
	ErrMessageSigner                = sdkerrors.Register(ModuleName, 1103, "The signer of the message is not valid")
	ErrTypeNotValid                 = sdkerrors.Register(ModuleName, 1104, "Type is not supported")
)
