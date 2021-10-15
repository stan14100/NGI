package types

//Here we define the accepted and related to our use case Credential Types, we should add more as time goes on
const (
	Covid19AntibodiesCredential = "Covid19AntibodiesCredential"
	Covid19PCRCredential = "Covid19PCRCredential"
	Covid19VaccinationCredential = "Covid19VaccinationCredential"
)

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