package keeper

import (
	"encoding/json"
	"github.com/stan14100/NGI/x/did/types"
	//"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) AddDidDocument(ctx sdk.Context, key []byte, document types.DidDocument) {
	// Get the store using storeKey and DidDocumentKey
	store := ctx.KVStore(k.storeKey)

	val, err := json.Marshal(document)

	if err != nil {
		panic(err)
	}

	bytes_prefix := []byte(types.DidDocumentKey)

	store.Set(append(bytes_prefix, key...), val)
}

func (k Keeper) GetDidDocument(ctx sdk.Context, key []byte) (types.DidDocument, bool) {
	// Get the store using storeKey and DidDocumentKey
	store := ctx.KVStore(k.storeKey)

	bytes_prefix := []byte(types.DidDocumentKey)

	res_bytes := store.Get(append(bytes_prefix, key...))

	doc := types.DidDocument{}
	err := json.Unmarshal(res_bytes, &doc)
	if err != nil {
		panic(err)
	}

	return interface{}(doc).(types.DidDocument), types.IsValidDidDocument(&doc)
}
