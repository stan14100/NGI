import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "stan14100.ngi.did";
/** https://www.w3.org/TR/did-core/#did-document-properties */
export interface DidDocument {
    /** @context is spec for did document. */
    context: string[];
    /** id represents the id for the did document. */
    id: string;
    /**
     * A DID controller is an entity that is authorized to make changes to a DID document.
     * https://www.w3.org/TR/did-core/#did-controller
     */
    controller: string[];
    /**
     * A DID document can express verification methods,
     * such as cryptographic public keys, which can be used
     * to authenticate or authorize interactions with the DID subject or associated parties.
     * https://www.w3.org/TR/did-core/#verification-methods
     */
    verificationMethod: VerificationMethod[];
    /**
     * Services are used in DID documents to express ways of communicating with the DID subject or associated entities.
     * https://www.w3.org/TR/did-core/#services
     */
    service: Service[];
    /**
     * Authentication represents public key associated with the did document.
     * https://www.w3.org/TR/did-core/#authentication
     */
    authentication: string[];
    /**
     * Used to specify how the DID subject is expected to express claims, such as for the purposes of issuing a Verifiable Credential.
     * https://www.w3.org/TR/did-core/#assertion
     */
    assertionMethod: string[];
    /**
     * used to specify how an entity can generate encryption material in order to transmit confidential information intended for the DID subject.
     * https://www.w3.org/TR/did-core/#key-agreement
     */
    keyAgreement: string[];
    /**
     * Used to specify a verification method that might be used by the DID subject to invoke a cryptographic capability,
     * such as the authorization to update the DID Document.
     * https://www.w3.org/TR/did-core/#capability-invocation
     */
    capabilityInvocation: string[];
    /**
     * Used to specify a mechanism that might be used by the DID subject to delegate a cryptographic capability to another party.
     * https://www.w3.org/TR/did-core/#capability-delegation
     */
    capabilityDelegation: string[];
}
/** https://www.w3.org/TR/did-core/#verification-methods */
export interface VerificationMethod {
    id: string;
    type: string;
    controller: string;
    publicKeyHex: string | undefined;
    publicKeyMultibase: string | undefined;
}
/** https://www.w3.org/TR/did-core/#service-properties */
export interface Service {
    id: string;
    type: string;
    serviceEndpoint: string;
}
export interface DidMetadata {
    versionId: string;
    createdTimestamp: Date | undefined;
    updatedTimestamp: Date | undefined;
}
export declare const DidDocument: {
    encode(message: DidDocument, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DidDocument;
    fromJSON(object: any): DidDocument;
    toJSON(message: DidDocument): unknown;
    fromPartial(object: DeepPartial<DidDocument>): DidDocument;
};
export declare const VerificationMethod: {
    encode(message: VerificationMethod, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    fromPartial(object: DeepPartial<VerificationMethod>): VerificationMethod;
};
export declare const Service: {
    encode(message: Service, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial(object: DeepPartial<Service>): Service;
};
export declare const DidMetadata: {
    encode(message: DidMetadata, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): DidMetadata;
    fromJSON(object: any): DidMetadata;
    toJSON(message: DidMetadata): unknown;
    fromPartial(object: DeepPartial<DidMetadata>): DidMetadata;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
