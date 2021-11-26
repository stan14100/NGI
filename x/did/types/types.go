package types

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"regexp"
	"sort"
	"strings"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

type Did string

// Services are a list of services
type Services []*Service

//VerificationMethods are a list of VerificationMethods
type Verifications []*Verification

func GenerateDid(account string) Did {
	return Did(fmt.Sprint(DidKeyPrefix, account))
}

// String return the string representation of the did
func (did Did) String() string {
	return string(did)
}

// NewVerificationMethodId compose a verification method id from an account address
func (did Did) NewVerificationMethodId(vmId string) string {
	return fmt.Sprint(did, "#", vmId)
}

type VerificationRelationship int

const (
	Authentication       = "authentication"       // https://www.w3.org/TR/did-core/#authentication
	AssertionMethod      = "assertionMethod"      // https://www.w3.org/TR/did-core/#assertion
	KeyAgreement         = "keyAgreement"         // https://www.w3.org/TR/did-core/#key-agreement
	CapabilityInvocation = "capabilityInvocation" // https://www.w3.org/TR/did-core/#capability-invocation
	CapabilityDelegation = "capabilityDelegation" // https://www.w3.org/TR/did-core/#capability-delegation
)

const (
	authentication VerificationRelationship = iota
	assertionMethod
	keyAgreement
	capabilityInvocation
	capabilityDelegation
)

// VerificationRelationships are the supported list of verification relationships
var VerificationRelationships = map[string]VerificationRelationship{
	Authentication:       authentication,
	AssertionMethod:      assertionMethod,
	KeyAgreement:         keyAgreement,
	CapabilityInvocation: capabilityInvocation,
	CapabilityDelegation: capabilityDelegation,
}

// verificationRelationships retrieve the pointer to the verification relationship
func (didDoc *DidDocument) getRelationships(rel VerificationRelationship) *[]string {
	switch rel {
	case authentication:
		return &didDoc.Authentication
	case assertionMethod:
		return &didDoc.AssertionMethod
	case keyAgreement:
		return &didDoc.KeyAgreement
	case capabilityInvocation:
		return &didDoc.CapabilityInvocation
	case capabilityDelegation:
		return &didDoc.CapabilityDelegation
	default:
		return nil
	}
}

func parseRelationshipLabels(relNames ...string) (vrs []VerificationRelationship, err error) {
	names := distinct(relNames)
	vrs = make([]VerificationRelationship, len(names))
	for i, vrn := range distinct(relNames) {
		vr, validName := VerificationRelationships[vrn]
		if !validName {
			err = sdkerrors.Wrapf(ErrInvalidInput, "unsupported verification relationship %s", vrn)
			return
		}
		vrs[i] = vr
	}
	return
}

// VerificationMaterialType encode the verification material type
type VerificationMaterialType string

// Verification method material types, the ed25519 and secp256k1 are the types that are supported by cosmos sdk (https://docs.cosmos.network/master/basics/accounts.html)
const (
	DIDVMethodTypeEcdsaSecp256k1VerificationKey2019 VerificationMaterialType = "EcdsaSecp256k1VerificationKey2019"
	DIDVMethodTypeEd25519VerificationKey2018        VerificationMaterialType = "Ed25519VerificationKey2018"
	//DIDVMethodTypeCosmosAccountAddress              VerificationMaterialType = "CosmosAccountAddress"
	//DIDVMethodTypeX25519KeyAgreementKey2019         VerificationMaterialType = "X25519KeyAgreementKey2019"
)

// String return string name for the Verification Method type
func (p VerificationMaterialType) String() string {
	return string(p)
}

type VerificationMaterial interface {
	EncodeToString() string
	Type() VerificationMaterialType
}

type PublicKeyMultibase struct {
	data   []byte
	vmType VerificationMaterialType
}

// EncodeToString returns the string representation of the key in hex format. F is the hex format prefix
func (pkh PublicKeyMultibase) EncodeToString() string {
	return string(fmt.Sprint("F", hex.EncodeToString(pkh.data)))
}

func (pkh PublicKeyMultibase) Type() VerificationMaterialType {
	return pkh.vmType
}

// NewPublicKeyMultibase build a new blockchain account ID struct
func NewPublicKeyMultibase(pubKey []byte, vmType VerificationMaterialType) PublicKeyMultibase {
	return PublicKeyMultibase{
		data:   pubKey,
		vmType: vmType,
	}
}

const (
	contextDidBaseURL      = "https://www.w3.org/ns/did/v1"
	didValidationRegExp    = `^did\:[a-z0-9]+\:(([A-Z.a-z0-9]|\-|_|%[0-9A-Fa-f][0-9A-Fa-f])*\:)*([A-Z.a-z0-9]|\-|_|%[0-9A-Fa-f][0-9A-Fa-f])+$`
	didURLValidationRegExp = `^did\:[a-z0-9]+\:(([A-Z.a-z0-9]|\-|_|%[0-9A-Fa-f][0-9A-Fa-f])*\:)*([A-Z.a-z0-9]|\-|_|%[0-9A-Fa-f][0-9A-Fa-f])+(/(([-A-Z._a-z0-9]|~)|%[0-9A-Fa-f][0-9A-Fa-f]|(\!|\$|&|'|\(|\)|\*|\+|,|;|\=)|\:|@)*)*(\?(((([-A-Z._a-z0-9]|~)|%[0-9A-Fa-f][0-9A-Fa-f]|(\!|\$|&|'|\(|\)|\*|\+|,|;|\=)|\:|@)|/|\?)*))?(#(((([-A-Z._a-z0-9]|~)|%[0-9A-Fa-f][0-9A-Fa-f]|(\!|\$|&|'|\(|\)|\*|\+|,|;|\=)|\:|@)|/|\?)*))?$`
	rfc3986RegExp          = `^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$`
)

var (
	didValidation    = regexp.MustCompile(didValidationRegExp)
	didURLValidation = regexp.MustCompile(didURLValidationRegExp)
	rfc3986          = regexp.MustCompile(rfc3986RegExp)
)

func IsValidDID(input string) bool {
	return didValidation.MatchString(input)
}

// IsValidRFC3986Uri checks if the input is a valid RFC3986 URI
func IsValidRFC3986Uri(input string) bool {
	return rfc3986.MatchString(input)
}

// IsValidDIDURL validate the input string according to the
func IsValidDIDURL(input string) bool {
	return didURLValidation.MatchString(input)
}

// IsEmpty checks if the input is empty
func IsEmpty(input string) bool {
	return strings.TrimSpace(input) == ""
}

// IsValidDidDocument checks if a DID document has a subject and context fields set,
//which are the required field for a DidDocument
func IsValidDidDocument(didDoc *DidDocument) bool {
	if didDoc == nil {
		return false
	}
	if !IsValidDID(didDoc.Id) {
		return false
	}

	for _, c := range didDoc.Context {
		if c == contextDidBaseURL {
			return true
		}
	}
	return false
}

// IsValidDIDKeyFormat verify that a did is compliant with the did:cosmos:key format
// that is the ID must be a bech32 address no longer than 255 bytes
func IsValidDIDKeyFormat(did string) bool {
	if _, err := sdk.AccAddressFromBech32(strings.TrimPrefix(did, DidKeyPrefix)); err != nil {
		return false
	}
	return true
}

// IsValidDIDMetadata checks if a DID metadata has a versionId and createdTimestamp
func IsValidDIDMetadata(didMetadata *DidMetadata) bool {
	if didMetadata == nil {
		return false
	}
	if IsEmpty(didMetadata.VersionId) {
		return false
	}
	if didMetadata.CreatedTimestamp == nil || didMetadata.CreatedTimestamp.IsZero() {
		return false
	}
	return true
}

func ValidateVerification(v *VerificationMethod, allowedControllers ...string) (err error) {
	if v == nil {
		err = sdkerrors.Wrap(ErrInvalidInput, "verification is not defined")
		return
	}
	// verify that the method id is correct
	if !IsValidDIDURL(v.Id) {
		err = sdkerrors.Wrapf(ErrInvalidDIDURLFormat, "verification method id: %v", v.Id)
		return
	}

	// if the controller is not set return error
	if !IsValidDID(v.Controller) {
		err = sdkerrors.Wrapf(ErrInvalidDIDFormat, "verification method controller %v", v.Controller)
		return
	}

	// check for empty method type
	if IsEmpty(v.Type) {
		err = sdkerrors.Wrapf(ErrInvalidInput, "verification method type not set for verification method %s", v.Id)
		return
	}

	// check the verification material
	switch x := v.VerificationMaterial.(type) {

	case *VerificationMethod_PublicKeyMultibase:
		if IsEmpty(x.PublicKeyMultibase) {
			err = sdkerrors.Wrapf(ErrInvalidInput, "Verification material multibase pubkey invalid for verification method %s", v.Id)
			return
		}
	case *VerificationMethod_PublicKeyHex:
		if IsEmpty(x.PublicKeyHex) {
			err = sdkerrors.Wrapf(ErrInvalidInput, "Verification material pubkey invalid for verification method %s", v.Id)
			return
		}
	default:
		err = sdkerrors.Wrapf(ErrInvalidInput, "Verification material not set for verification method %s", v.Id)
		return
	}

	// check for empty publickey
	if v.VerificationMaterial.Size() == 0 {
		err = sdkerrors.Wrapf(ErrInvalidInput, "Verification material not set for verification method %s", v.Id)
		return
	}

	return
}

// ValidateService performs basic on a service struct
func ValidateService(s *Service) (err error) {
	if s == nil {
		err = sdkerrors.Wrap(ErrInvalidInput, "service is undefined")
		return
	}
	// verify that the id is not empty and is a valid url (according to RFC3986)
	if IsEmpty(s.Id) {
		err = sdkerrors.Wrap(ErrInvalidInput, "id field cannot be empty")
		return
	}

	if !IsValidRFC3986Uri(s.Id) {
		err = sdkerrors.Wrapf(ErrInvalidRFC3986UriFormat, "id: %s is not a valid RFC3986 uri", s.Id)
		return
	}

	// verify that the endpoint is not empty and is a valid url (according to RFC3986)
	if IsEmpty(s.ServiceEndpoint) {
		err = sdkerrors.Wrap(ErrInvalidInput, "serviceEndpoint field cannot be empty")
		return
	}

	if !IsValidRFC3986Uri(s.ServiceEndpoint) {
		err = sdkerrors.Wrapf(ErrInvalidRFC3986UriFormat, "serviceEndpoint: %s is not a valid RFC3986 uri", s.ServiceEndpoint)
		return
	}

	// check that the service type is not empty
	if IsEmpty(s.Type) {
		err = sdkerrors.Wrap(ErrInvalidInput, "type field cannot be empty")
		return
	}

	return
}

// DidDocumentOption implements variadic pattern for optional did document fields
type DidDocumentOption func(*DidDocument) error

func NewDidDocument(id string, options ...DidDocumentOption) (did DidDocument, err error) {

	if !IsValidDID(id) {
		err = sdkerrors.Wrapf(ErrInvalidDIDFormat, "did %s", id)
		return
	}

	did = DidDocument{
		Context: []string{contextDidBaseURL},
		Id:      id,
	}
	// apply all the options
	for _, fn := range options {
		if err = fn(&did); err != nil {
			return
		}
	}
	return
}

//WithServices add optional services
func WithServices(services ...*Service) DidDocumentOption {
	return func(did *DidDocument) error {
		return did.AddServices(services...)
	}
}

// AddServices add services to a did document
func (didDoc *DidDocument) AddServices(services ...*Service) (err error) {
	if didDoc.Service == nil {
		didDoc.Service = []*Service{}
	}

	// used to check duplicates
	index := make(map[string]struct{}, len(didDoc.Service))

	// load existing services
	for _, s := range didDoc.Service {
		index[s.Id] = struct{}{}
	}

	// services must be unique
	for _, s := range services {
		if err = ValidateService(s); err != nil {
			return
		}

		// verify that there are no duplicates in method ids
		if _, found := index[s.Id]; found {
			err = sdkerrors.Wrapf(ErrInvalidInput, "duplicated verification method id %s", s.Id)
			return
		}
		index[s.Id] = struct{}{}

		didDoc.Service = append(didDoc.Service, s)
	}
	return
}

//deletes an existing service from a did document
func (didDoc *DidDocument) RemoveService(serviceId string) {
	del := func(x int) {
		lastIdx := len(didDoc.Service) - 1
		switch lastIdx {
		case 0: // remove the relationships since there is no elements left
			didDoc.Service = nil
		case x: // if it's at the last position, just drop the last position
			didDoc.Service = didDoc.Service[:lastIdx]
		default: // swap and drop last position
			didDoc.Service[x] = didDoc.Service[lastIdx]
			didDoc.Service = didDoc.Service[:lastIdx]
		}
	}

	for i, s := range didDoc.Service {
		if s.Id == serviceId {
			del(i)
			break
		}
	}
}

// WithControllers add optional did controller
func WithControllers(controllers ...string) DidDocumentOption {
	return func(did *DidDocument) (err error) {
		return did.SetControllers(controllers...)
	}
}

//set controllers to a did doc or replace the old ones
func (didDoc *DidDocument) SetControllers(controllers ...string) error {
	if controllers == nil {
		didDoc.Controller = controllers
		return nil
	}
	dc := distinct(controllers)
	for _, c := range dc {
		if !IsValidDID(c) {
			return sdkerrors.Wrapf(ErrInvalidDIDFormat, "did document controller validation error '%s'", c)
		}
	}
	didDoc.Controller = dc
	return nil
}

// WithVerifications add optional verifications
func WithVerifications(verifications ...*Verification) DidDocumentOption {
	return func(did *DidDocument) error {
		return did.AddVerifications(verifications...)
	}
}

// AddVerifications add one or more verification method and relations to a did document
func (didDoc *DidDocument) AddVerifications(verifications ...*Verification) (err error) {
	// verify that there are no duplicates in method ids
	index := make(map[string]struct{}, len(didDoc.VerificationMethod))
	// load existing verifications if any
	for _, v := range didDoc.VerificationMethod {
		index[v.Id] = struct{}{}
	}

	// loop through the verifications and do a basic validation
	for _, v := range verifications {
		if err = ValidateVerification(v.Method); err != nil {
			return
		}

		// verify that there are no duplicates in method ids
		if _, found := index[v.Method.Id]; found {
			err = sdkerrors.Wrapf(ErrInvalidInput, "Duplicated verification method id %s", v.Method.Id)
			return
		}
		index[v.Method.Id] = struct{}{}

		// first add the method to the list of methods
		didDoc.VerificationMethod = append(didDoc.VerificationMethod, v.GetMethod())

		vrs, err := parseRelationshipLabels(v.Relationships...)
		if err != nil {
			return err
		}

		didDoc.setRelationships(v.Method.Id, vrs...)

	}
	return
}

// setRelationships overwrite relationships for a did document
func (didDoc *DidDocument) setRelationships(methodId string, relationships ...VerificationRelationship) {
	// first remove existing relationships
	for _, vr := range VerificationRelationships {
		vrs := didDoc.getRelationships(vr)
		for i, vmID := range *vrs {
			if vmID == methodId {
				lastIdx := len(*vrs) - 1 // get the last index of the current relationship list
				switch lastIdx {
				case 0: // remove the relationships since there is no elements left
					*vrs = nil
				case i: // if it's at the last position, just drop the last position
					*vrs = (*vrs)[:lastIdx]
				default: // swap and drop last position
					(*vrs)[i] = (*vrs)[lastIdx]
					(*vrs) = (*vrs)[:lastIdx]
				}
			}
		}
	}

	// then assign the new ones
	for _, vr := range relationships {
		vrs := didDoc.getRelationships(vr)
		*vrs = append(*vrs, methodId)
	}
}

func NewVerification(
	method VerificationMethod,
	relationships []string,
) *Verification {
	return &Verification{
		Method:        &method,
		Relationships: relationships,
	}
}

func NewVerificationMethod(id string, controller Did, vmr VerificationMaterial) VerificationMethod {
	vm := VerificationMethod{
		Id:         id,
		Controller: controller.String(),
		Type:       string(vmr.Type()),
	}

	vm.VerificationMaterial = &VerificationMethod_PublicKeyMultibase{vmr.EncodeToString()}

	return vm
}

func NewService(id string, serviceType string, serviceEndpoint string) *Service {
	return &Service{
		Id:              id,
		Type:            serviceType,
		ServiceEndpoint: serviceEndpoint,
	}
}

// NewDidMetadata returns a DidMetadata strcut that has equals created and updated date,
// and with deactivated field set to false
func NewDidMetadata(versionData []byte, created time.Time) DidMetadata {
	m := DidMetadata{
		CreatedTimestamp: &created,
	}
	UpdateDidMetadata(&m, versionData, created)
	return m
}

// UpdateDidMetadata updates a DID metadata time and version id
func UpdateDidMetadata(meta *DidMetadata, versionData []byte, updated time.Time) {
	txH := sha256.Sum256(versionData)
	meta.VersionId = hex.EncodeToString(txH[:])
	meta.UpdatedTimestamp = &updated
}

// GenerateAccountDID generates a DID document from an address
// func GenerateAccountDID(did string) (didDoc DidDocument, didMeta DidMetadata, err error) {
// 	if !IsValidDIDKeyFormat(did) {
// 		err = ErrInvalidDidMethodFormat
// 		return
// 	}
// 	account := strings.TrimPrefix(did, DidKeyPrefix)
// 	accountDID := Did(did)
// 	// compose the metadata
// 	didMeta = NewDidMetadata([]byte(account), time.Now())
// 	// compose the did document
// 	didDoc, err = NewDidDocument(did, WithVerifications(
// 		NewVerification(
// 			NewVerificationMethod(
// 				accountDID.NewVerificationMethodID(account),
// 				accountDID, // the controller is the same as the did subject			),
// 			[]string{
// 				Authentication,
// 				KeyAgreement,
// 				AssertionMethod,
// 				CapabilityInvocation,
// 				CapabilityDelegation,
// 			},
// 			nil,
// 		),
// 	))
// 	return
// }

func distinct(a []string) []string {
	m := make(map[string]struct{})
	for _, item := range a {
		m[item] = struct{}{}
	}
	d := make([]string, 0, len(m))
	for k := range m {
		d = append(d, k)
	}
	sort.Strings(d)
	return d
}
