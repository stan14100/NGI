package types

import (
	"encoding/base64"
	"time"

	"github.com/cosmos/cosmos-sdk/crypto/keyring"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	didtypes "github.com/stan14100/NGI/x/did/types"
)

//Here we define the accepted and related to our use case Credential Types, we should add more as time goes on
const (
	Covid19AntibodiesCredential         = "Covid19AntibodiesCredential"
	Covid19PCRCredential                = "Covid19PCRCredential"
	Covid19VaccinationCredential        = "Covid19VaccinationCredential"
	HealthCenterAuthorizationCredential = "HealthCenterAuthorizationCredential"
)

//checks if the credential has one of the accepted types
func IsValidCredentialType(credential string) bool {
	switch credential {
	case Covid19AntibodiesCredential,
		Covid19PCRCredential,
		Covid19VaccinationCredential,
		HealthCenterAuthorizationCredential:
		return true
	default:
		return false
	}
}

func NewVerifiableCredential(
	id string,
	issuer string,
	credtype string,
	issuanceDate time.Time,
	credentialSubject VerifiableCredential_UserCredSubject,
) VerifiableCredential {
	return VerifiableCredential{
		Context:           []string{"https://www.w3.org/TR/vc-data-model/"},
		Id:                id,
		Type:              []string{"VerifiableCredential", credtype},
		Issuer:            issuer,
		IssuanceDate:      &issuanceDate,
		CredentialSubject: &credentialSubject,
		Proof:             nil,
	}
}

func NewUserSubject(
	id string,
	testId string,
	result bool,
) VerifiableCredential_UserCredSubject {
	return VerifiableCredential_UserCredSubject{
		&UserHealthSubject{
			Id:     id,
			TestId: testId,
			Result: result,
		},
	}
}

func NewHealthCenterSubject(
	id string,
	name string,
	address string,
	city string,
	country string,
	postcode string,
	vat string,
) VerifiableCredential_HealthCredSubject {
	return VerifiableCredential_HealthCredSubject{
		&HealthCenterSubject{
			Id:   id,
			Name: name,
			Info: &Info{
				Adress:   address,
				City:     city,
				Country:  country,
				Postcode: postcode,
				Vat:      vat,
			},
		},
	}
}

func NewProof(
	proofType string,
	created string,
	proofPurpose string,
	verificationMethod string,
	signature string,
) Proof {
	return Proof{
		Type:               proofType,
		Created:            created,
		ProofPurpose:       proofPurpose,
		VerificationMethod: verificationMethod,
		Signature:          signature,
	}
}

func (vc VerifiableCredential) Sign(
	keyring keyring.Keyring,
	address sdk.Address,
	verificationMethodId string,
) (VerifiableCredential, error) {
	tm := time.Now()
	// reset the proof
	vc.Proof = nil

	signature, pubKey, err := keyring.SignByAddress(address, vc.GetBytes())
	if err != nil {
		return vc, err
	}

	p := NewProof(
		pubKey.Type(),
		tm.Format(time.RFC3339),
		// TODO: define proof purposes
		"assertionMethod",
		verificationMethodId,
		base64.StdEncoding.EncodeToString(signature),
	)
	vc.Proof = &p
	return vc, nil
}

// Validate validates a verifiable credential against a provided public key
func (vc VerifiableCredential) Validate(
	pk cryptotypes.PubKey,
) bool {
	s, err := base64.StdEncoding.DecodeString(vc.Proof.Signature)
	if err != nil {
		panic(err)
	}

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
	switch subj := vc.CredentialSubject.(type) {
	case *VerifiableCredential_HealthCredSubject:
		return didtypes.Did(subj.HealthCredSubject.Id)
	case *VerifiableCredential_UserCredSubject:
		return didtypes.Did(subj.UserCredSubject.Id)
	default:
		return didtypes.Did("")
	}
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
