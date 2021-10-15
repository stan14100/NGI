import { Reader, Writer } from 'protobufjs/minimal';
import { VerifiableCredential } from '../vc/vc';
export declare const protobufPackage = "stan14100.ngi.vc";
export interface MsgCreateVerifiableCredential {
    creator: string;
    verifiableCredential: VerifiableCredential | undefined;
}
export interface MsgCreateVerifiableCredentialResponse {
}
export interface MsgCreaRevokeVerifiableCredential {
    creator: string;
    credentialId: string;
}
export interface MsgCreaRevokeVerifiableCredentialResponse {
}
export declare const MsgCreateVerifiableCredential: {
    encode(message: MsgCreateVerifiableCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateVerifiableCredential;
    fromJSON(object: any): MsgCreateVerifiableCredential;
    toJSON(message: MsgCreateVerifiableCredential): unknown;
    fromPartial(object: DeepPartial<MsgCreateVerifiableCredential>): MsgCreateVerifiableCredential;
};
export declare const MsgCreateVerifiableCredentialResponse: {
    encode(_: MsgCreateVerifiableCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateVerifiableCredentialResponse;
    fromJSON(_: any): MsgCreateVerifiableCredentialResponse;
    toJSON(_: MsgCreateVerifiableCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateVerifiableCredentialResponse>): MsgCreateVerifiableCredentialResponse;
};
export declare const MsgCreaRevokeVerifiableCredential: {
    encode(message: MsgCreaRevokeVerifiableCredential, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreaRevokeVerifiableCredential;
    fromJSON(object: any): MsgCreaRevokeVerifiableCredential;
    toJSON(message: MsgCreaRevokeVerifiableCredential): unknown;
    fromPartial(object: DeepPartial<MsgCreaRevokeVerifiableCredential>): MsgCreaRevokeVerifiableCredential;
};
export declare const MsgCreaRevokeVerifiableCredentialResponse: {
    encode(_: MsgCreaRevokeVerifiableCredentialResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreaRevokeVerifiableCredentialResponse;
    fromJSON(_: any): MsgCreaRevokeVerifiableCredentialResponse;
    toJSON(_: MsgCreaRevokeVerifiableCredentialResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreaRevokeVerifiableCredentialResponse>): MsgCreaRevokeVerifiableCredentialResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateVerifiableCredential(request: MsgCreateVerifiableCredential): Promise<MsgCreateVerifiableCredentialResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreaRevokeVerifiableCredential(request: MsgCreaRevokeVerifiableCredential): Promise<MsgCreaRevokeVerifiableCredentialResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateVerifiableCredential(request: MsgCreateVerifiableCredential): Promise<MsgCreateVerifiableCredentialResponse>;
    CreaRevokeVerifiableCredential(request: MsgCreaRevokeVerifiableCredential): Promise<MsgCreaRevokeVerifiableCredentialResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
