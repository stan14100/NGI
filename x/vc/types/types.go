package types

import (
	"encoding/base64"

	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	didtypes "github.com/stan14100/NGI/x/did/types"
)

//Here we define the accepted and related to our use case Credential Types, we should add more as time goes on
const (
	Covid19AntibodiesCredential  = "Covid19AntibodiesCredential"
	Covid19PCRCredential         = "Covid19PCRCredential"
	Covid19VaccinationCredential = "Covid19VaccinationCredential"
)

//checks if the credential has one of the accepted types
func IsValidCredentialType(credential string) bool {
	switch credential {
	case Covid19AntibodiesCredential,
		Covid19PCRCredential,
		Covid19VaccinationCredential:
		return true
	default:
		return false
	}
}

// Validate validates a verifiable credential against a provided public key
func (vc VerifiableCredential) Validate(
	pk cryptotypes.PubKey,
) bool {
	s, err := base64.StdEncoding.DecodeString(vc.Proof.Signature)
	if err != nil {
		panic(err)
	}

	// reset the proof
	vc.Proof = nil

	// TODO: this is an expensive operation, could lead to DDOS
	// TODO: we can hash this and make this less expensive
	isCorrectPubKey := pk.VerifySignature(
		vc.GetBytes(),
		s,
	)

	return isCorrectPubKey
}

// HasType tells whenever a credential has a specific type
func (vc VerifiableCredential) HasType(vcType string) bool {
	for _, vct := range vc.Type {
		if vct == vcType {
			return true
		}
	}
	return false
}

// GetSubjectDID return the credential DID subject, that is the holder
// of the credentials
func (vc VerifiableCredential) GetSubjectDid() didtypes.Did {
	return didtypes.Did(vc.CredentialSubject.Id)
}

// GetIssuerDID returns the did of the issuer
func (vc VerifiableCredential) GetIssuerDID() didtypes.Did {
	return didtypes.Did(vc.Issuer)
}

// GetBytes is a helper for serializing
func (vc VerifiableCredential) GetBytes() []byte {
	dAtA, _ := vc.Marshal()
	return dAtA
}
