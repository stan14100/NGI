package types

const (
	// ModuleName defines the module name
	ModuleName = "did"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_did"

	// DidPrefix defines the did prefix for this chain
	DidPrefix = "did:cosmos:"

	// DidKeyPrefix defines the did key
	DidKeyPrefix = "did:cosmos:key:"

	// DidDocumentKey prefix for each key of a DidDocument
	DidDocumentKey = "DidDocument"

	// DidMetadataKey prefix for each key of a DidMetadata
	DidMetadataKey = "DidMetadata"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
