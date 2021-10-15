package did_test

import (
	"testing"

	keepertest "github.com/stan14100/NGI/testutil/keeper"
	"github.com/stan14100/NGI/x/did"
	"github.com/stan14100/NGI/x/did/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DidKeeper(t)
	did.InitGenesis(ctx, *k, genesisState)
	got := did.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	// this line is used by starport scaffolding # genesis/test/assert
}
