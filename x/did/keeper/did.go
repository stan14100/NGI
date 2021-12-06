package keeper

import (
	"fmt"

	"github.com/cosmos/cosmos-sdk/codec"

	"github.com/stan14100/NGI/x/did/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) Marshal(value interface{}) (bytes []byte) {
	switch value := value.(type) {
	case types.DidDocument:
		bytes = k.cdc.MustMarshal(&value)
	case types.DidMetadata:
		bytes = k.cdc.MustMarshal(&value)
	}
	return
}

// Unmarshal unmarshal a byte slice to a struct, return false in case of errors
func (k Keeper) Unmarshal(data []byte, val codec.ProtoMarshaler) bool {
	if len(data) == 0 {
		return false
	}
	if err := k.cdc.Unmarshal(data, val); err != nil {
		return false
	}
	return true
}

func (k Keeper) AddDidDocument(ctx sdk.Context, key []byte, document types.DidDocument) {
	k.Set(ctx, key, []byte(types.DidDocumentKey), document, k.Marshal)
}

func (k Keeper) GetDidDocument(ctx sdk.Context, key []byte) (types.DidDocument, bool) {
	val, found := k.Get(ctx, key, []byte(types.DidDocumentKey), k.UnmarshalDidDocument)
	return val.(types.DidDocument), found
}

func (k Keeper) UnmarshalDidDocument(value []byte) (interface{}, bool) {
	data := types.DidDocument{}
	k.Unmarshal(value, &data)
	return data, types.IsValidDidDocument(&data)
}

func (k Keeper) UnmarshalDidMetadata(value []byte) (interface{}, bool) {
	data := types.DidMetadata{}
	k.Unmarshal(value, &data)
	return data, types.IsValidDIDMetadata(&data)
}

func (k Keeper) AddDidMetadata(ctx sdk.Context, key []byte, meta types.DidMetadata) {
	k.Set(ctx, key, []byte(types.DidMetadataKey), meta, k.Marshal)
}

func (k Keeper) GetDidMetadata(ctx sdk.Context, key []byte) (types.DidMetadata, bool) {
	val, found := k.Get(ctx, key, []byte(types.DidMetadataKey), k.UnmarshalDidMetadata)
	return val.(types.DidMetadata), found
}

// ResolveDid returning the did document and associated metadata
func (k Keeper) ResolveDid(ctx sdk.Context, did types.Did) (doc types.DidDocument, meta types.DidMetadata, err error) {

	doc, found := k.GetDidDocument(ctx, []byte(did.String()))
	if !found {
		err = types.ErrDidDocumentNotFound
		return
	}
	meta, _ = k.GetDidMetadata(ctx, []byte(did.String()))
	return
}

// helper function to update the did metadata
func updateDidMetadata(keeper *Keeper, ctx sdk.Context, did string) (err error) {
	didMeta, found := keeper.GetDidMetadata(ctx, []byte(did))
	if found {
		types.UpdateDidMetadata(&didMeta, ctx.TxBytes(), ctx.BlockTime())
		keeper.AddDidMetadata(ctx, []byte(did), didMeta)
	} else {
		err = fmt.Errorf("(warning) did metadata not found")
	}
	return
}

func (k Keeper) GetAllDidDocumentsWithCondition(
	ctx sdk.Context,
	key []byte,
	didSelector func(did types.DidDocument) bool,
) (didDocs []*types.DidDocument) {
	iterator := k.GetAll(ctx, key)

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		did, _ := k.UnmarshalDidDocument(iterator.Value())
		didTyped := did.(types.DidDocument)

		if didSelector(didTyped) {
			didDocs = append(didDocs, &didTyped)
		}
	}

	return didDocs
}

func (k Keeper) GetAllDidDocuments(ctx sdk.Context) []*types.DidDocument {
	return k.GetAllDidDocumentsWithCondition(
		ctx,
		[]byte(types.DidDocumentKey),
		func(did types.DidDocument) bool { return true },
	)
}
