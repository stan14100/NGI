package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateDidDocument{}, "did/CreateDidDocument", nil)
	cdc.RegisterConcrete(&MsgUpdateDidDocument{}, "did/UpdateDidDocument", nil)
	cdc.RegisterConcrete(&MsgAddService{}, "did/AddService", nil)
	cdc.RegisterConcrete(&MsgDeleteService{}, "did/DeleteService", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDidDocument{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateDidDocument{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddService{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteService{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
