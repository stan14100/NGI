import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { VerifiableCredential } from '../vc/vc';
export declare const protobufPackage = "stan14100.ngi.vc";
export interface QueryVcsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryVcsResponse {
    vcs: VerifiableCredential[];
    pagination: PageResponse | undefined;
}
export interface QueryVcRequest {
    vcId: string;
}
export interface QueryVcResponse {
    vc: VerifiableCredential | undefined;
}
export interface QueryValidateVcRequest {
    vcId: string;
    pubKey: string;
}
export interface QueryValidateVcResponse {
    validationRes: boolean;
}
export declare const QueryVcsRequest: {
    encode(message: QueryVcsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryVcsRequest;
    fromJSON(object: any): QueryVcsRequest;
    toJSON(message: QueryVcsRequest): unknown;
    fromPartial(object: DeepPartial<QueryVcsRequest>): QueryVcsRequest;
};
export declare const QueryVcsResponse: {
    encode(message: QueryVcsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryVcsResponse;
    fromJSON(object: any): QueryVcsResponse;
    toJSON(message: QueryVcsResponse): unknown;
    fromPartial(object: DeepPartial<QueryVcsResponse>): QueryVcsResponse;
};
export declare const QueryVcRequest: {
    encode(message: QueryVcRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryVcRequest;
    fromJSON(object: any): QueryVcRequest;
    toJSON(message: QueryVcRequest): unknown;
    fromPartial(object: DeepPartial<QueryVcRequest>): QueryVcRequest;
};
export declare const QueryVcResponse: {
    encode(message: QueryVcResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryVcResponse;
    fromJSON(object: any): QueryVcResponse;
    toJSON(message: QueryVcResponse): unknown;
    fromPartial(object: DeepPartial<QueryVcResponse>): QueryVcResponse;
};
export declare const QueryValidateVcRequest: {
    encode(message: QueryValidateVcRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValidateVcRequest;
    fromJSON(object: any): QueryValidateVcRequest;
    toJSON(message: QueryValidateVcRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidateVcRequest>): QueryValidateVcRequest;
};
export declare const QueryValidateVcResponse: {
    encode(message: QueryValidateVcResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryValidateVcResponse;
    fromJSON(object: any): QueryValidateVcResponse;
    toJSON(message: QueryValidateVcResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidateVcResponse>): QueryValidateVcResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of vcs items. */
    Vcs(request: QueryVcsRequest): Promise<QueryVcsResponse>;
    /** Queries a list of vc items. */
    Vc(request: QueryVcRequest): Promise<QueryVcResponse>;
    ValidateVc(request: QueryValidateVcRequest): Promise<QueryValidateVcResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Vcs(request: QueryVcsRequest): Promise<QueryVcsResponse>;
    Vc(request: QueryVcRequest): Promise<QueryVcResponse>;
    ValidateVc(request: QueryValidateVcRequest): Promise<QueryValidateVcResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
