package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/did module sentinel errors
var (
	ErrSample                  = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrDidDocumentFound        = sdkerrors.Register(ModuleName, 1101, "Did document found")
	ErrDidDocumentNotFound     = sdkerrors.Register(ModuleName, 1102, "Did document not found")
	ErrInvalidDIDFormat        = sdkerrors.Register(ModuleName, 1103, "Input is not compliant with the DID specifications (https://www.w3.org/TR/did-core/#did-syntax)")
	ErrInvalidRFC3986UriFormat = sdkerrors.Register(ModuleName, 1104, "Input is not compliant with the RFC3986 URI specifications (https://datatracker.ietf.org/doc/html/rfc3986)")
	ErrInvalidInput            = sdkerrors.Register(ModuleName, 1105, "Input is invalid")
	ErrInvalidState            = sdkerrors.Register(ModuleName, 1106, "The requested action is not applicable on the resource")
	ErrInvalidDidMethodFormat  = sdkerrors.Register(ModuleName, 1107, "Invalid did method format")
	ErrKeyFormat               = sdkerrors.Register(ModuleName, 1108, "Invalid key format it does not suppported by Cosmos Sdk")
	ErrInvalidDIDURLFormat     = sdkerrors.Register(ModuleName, 1109, "Input is not compliant with the DID URL specifications (https://www.w3.org/TR/did-core/#did-url-syntax)")
)
