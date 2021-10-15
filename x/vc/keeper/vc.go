package keeper

import (
	"encoding/json"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stan14100/NGI/x/vc/types"
)

func (k Keeper) AddVerifiableCredential(ctx sdk.Context, key []byte, vc types.VerifiableCredential) {
	store := ctx.KVStore(k.storeKey)

	val, err := json.Marshal(vc)

	if err != nil {
		panic(err)
	}

	bytes_prefix := []byte(types.VerifiableCredentialKey)

	store.Set(append(bytes_prefix, key...), val)
}

func (k Keeper) GetVerifiableCredential(ctx sdk.Context, key []byte) (types.VerifiableCredential, bool) {
	store := ctx.KVStore(k.storeKey)

	bytes_prefix := []byte(types.VerifiableCredentialKey)

	res_bytes := store.Get(append(bytes_prefix, key...))

	vc := types.VerifiableCredential{}
	err := json.Unmarshal(res_bytes, &vc)
	if err != nil {
		return types.VerifiableCredential{}, false
	}

	if vc.Id == "" {
		return types.VerifiableCredential{}, false
	}

	return interface{}(vc).(types.VerifiableCredential), true
}
