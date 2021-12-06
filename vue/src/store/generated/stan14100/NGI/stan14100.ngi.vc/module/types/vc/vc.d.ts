import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "stan14100.ngi.vc";
/** VerifiableCredential represents a verifiable credential */
export interface VerifiableCredential {
    /** @context is spec for verifiable credential base context URL is "https://www.w3.org/2018/credentials/v1", */
    context: string[];
    /**
     * The value of the id property MUST be a single URI. It is RECOMMENDED
     * that the URI in the id be one which, if dereferenced, results in a
     * document containing machine-readable information about the id.
     */
    id: string;
    /**
     * The value of the type property MUST be, or map to (through interpretation
     * of the @context property), one or more URIs. If more than one URI is
     * provided, the URIs MUST be interpreted as an unordered set.
     */
    type: string[];
    /** represents a credential subject that identifies an authorized health center */
    healthCredSubject: HealthCenterSubject | undefined;
    /** represents a credential subject that connects health results to a user */
    userCredSubject: UserHealthSubject | undefined;
    /**
     * The value of the issuer property MUST be either a URI or an object
     * containing an id property. It is RECOMMENDED that the URI in the issuer
     * or its id be one which, if dereferenced, results in a document containing
     * machine-readable information about the issuer that can be used to verify
     * the information expressed in the credential.
     */
    issuer: string;
    /**
     * A credential MUST have an issuanceDate property. The value of the issuanceDate
     * property MUST be a string value of an [RFC3339] combined date and time string
     * representing the date and time the credential becomes valid, which could
     * be a date and time in the future. Note that this value represents the earliest
     * point in time at which the information associated with the credentialSubject
     * property becomes valid.
     */
    issuanceDate: Date | undefined;
    /**
     * One or more cryptographic proofs that can be used to detect tampering
     * and verify the authorship of a credential or presentation. The specific
     * method used for an embedded proof MUST be included using the type property.
     */
    proof: Proof | undefined;
}
/** A structure descrubing a Health Center information */
export interface HealthCenterSubject {
    id: string;
    /** legal name of the entity */
    name: string;
    info: Info | undefined;
}
export interface Info {
    adress: string;
    city: string;
    country: string;
    postcode: string;
    vat: string;
}
export interface UserHealthSubject {
    id: string;
    testId: string;
    result: boolean;
}
/**
 * A cryptographic proof that can be used to detect tampering and verify the authorship of a credential or presentation.
 * The specific method used for an embedded proof MUST be included using the type property.
 */
export interface Proof {
    type: string;
    created: string;
    proofPurpose: string;
    verificationMethod: string;
    signature: string;
}
export declare const VerifiableCredential: {
    encode(message: VerifiableCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): VerifiableCredential;
    fromJSON(object: any): VerifiableCredential;
    toJSON(message: VerifiableCredential): unknown;
    fromPartial(object: DeepPartial<VerifiableCredential>): VerifiableCredential;
};
export declare const HealthCenterSubject: {
    encode(message: HealthCenterSubject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): HealthCenterSubject;
    fromJSON(object: any): HealthCenterSubject;
    toJSON(message: HealthCenterSubject): unknown;
    fromPartial(object: DeepPartial<HealthCenterSubject>): HealthCenterSubject;
};
export declare const Info: {
    encode(message: Info, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Info;
    fromJSON(object: any): Info;
    toJSON(message: Info): unknown;
    fromPartial(object: DeepPartial<Info>): Info;
};
export declare const UserHealthSubject: {
    encode(message: UserHealthSubject, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): UserHealthSubject;
    fromJSON(object: any): UserHealthSubject;
    toJSON(message: UserHealthSubject): unknown;
    fromPartial(object: DeepPartial<UserHealthSubject>): UserHealthSubject;
};
export declare const Proof: {
    encode(message: Proof, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
