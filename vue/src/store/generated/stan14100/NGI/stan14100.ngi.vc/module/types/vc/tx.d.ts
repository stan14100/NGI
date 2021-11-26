import { Reader, Writer } from 'protobufjs/minimal';
import { VerifiableCredential } from '../vc/vc';
export declare const protobufPackage = "stan14100.ngi.vc";
export interface MsgIssueVerifiableCredential {
    creator: string;
    verifiableCredential: VerifiableCredential | undefined;
}
export interface MsgIssueVerifiableCredentialResponse {
}
export interface MsgRevokeVerifiableCredential {
    creator: string;
    credentialId: string;
}
export interface MsgRevokeVerifiableCredentialResponse {
}
export declare const MsgIssueVerifiableCredential: {
    encode(message: MsgIssueVerifiableCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueVerifiableCredential;
    fromJSON(object: any): MsgIssueVerifiableCredential;
    toJSON(message: MsgIssueVerifiableCredential): unknown;
    fromPartial(object: DeepPartial<MsgIssueVerifiableCredential>): MsgIssueVerifiableCredential;
};
export declare const MsgIssueVerifiableCredentialResponse: {
    encode(_: MsgIssueVerifiableCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgIssueVerifiableCredentialResponse;
    fromJSON(_: any): MsgIssueVerifiableCredentialResponse;
    toJSON(_: MsgIssueVerifiableCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgIssueVerifiableCredentialResponse>): MsgIssueVerifiableCredentialResponse;
};
export declare const MsgRevokeVerifiableCredential: {
    encode(message: MsgRevokeVerifiableCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevokeVerifiableCredential;
    fromJSON(object: any): MsgRevokeVerifiableCredential;
    toJSON(message: MsgRevokeVerifiableCredential): unknown;
    fromPartial(object: DeepPartial<MsgRevokeVerifiableCredential>): MsgRevokeVerifiableCredential;
};
export declare const MsgRevokeVerifiableCredentialResponse: {
    encode(_: MsgRevokeVerifiableCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevokeVerifiableCredentialResponse;
    fromJSON(_: any): MsgRevokeVerifiableCredentialResponse;
    toJSON(_: MsgRevokeVerifiableCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevokeVerifiableCredentialResponse>): MsgRevokeVerifiableCredentialResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    IssueVerifiableCredential(request: MsgIssueVerifiableCredential): Promise<MsgIssueVerifiableCredentialResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RevokeVerifiableCredential(request: MsgRevokeVerifiableCredential): Promise<MsgRevokeVerifiableCredentialResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    IssueVerifiableCredential(request: MsgIssueVerifiableCredential): Promise<MsgIssueVerifiableCredentialResponse>;
    RevokeVerifiableCredential(request: MsgRevokeVerifiableCredential): Promise<MsgRevokeVerifiableCredentialResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
