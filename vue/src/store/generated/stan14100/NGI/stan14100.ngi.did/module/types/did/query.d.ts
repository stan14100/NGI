import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { DidDocument, DidMetadata } from '../did/did';
export declare const protobufPackage = "stan14100.ngi.did";
export interface QueryDidsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryDidsResponse {
    didDocuments: DidDocument[];
    pagination: PageResponse | undefined;
}
export interface QueryDidRequest {
    id: string;
}
export interface QueryDidResponse {
    didDocument: DidDocument | undefined;
    didMetadata: DidMetadata | undefined;
}
export declare const QueryDidsRequest: {
    encode(message: QueryDidsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidsRequest;
    fromJSON(object: any): QueryDidsRequest;
    toJSON(message: QueryDidsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDidsRequest>): QueryDidsRequest;
};
export declare const QueryDidsResponse: {
    encode(message: QueryDidsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidsResponse;
    fromJSON(object: any): QueryDidsResponse;
    toJSON(message: QueryDidsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDidsResponse>): QueryDidsResponse;
};
export declare const QueryDidRequest: {
    encode(message: QueryDidRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidRequest;
    fromJSON(object: any): QueryDidRequest;
    toJSON(message: QueryDidRequest): unknown;
    fromPartial(object: DeepPartial<QueryDidRequest>): QueryDidRequest;
};
export declare const QueryDidResponse: {
    encode(message: QueryDidResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryDidResponse;
    fromJSON(object: any): QueryDidResponse;
    toJSON(message: QueryDidResponse): unknown;
    fromPartial(object: DeepPartial<QueryDidResponse>): QueryDidResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a list of dids items. */
    Dids(request: QueryDidsRequest): Promise<QueryDidsResponse>;
    /** Queries a list of did items. */
    Did(request: QueryDidRequest): Promise<QueryDidResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Dids(request: QueryDidsRequest): Promise<QueryDidsResponse>;
    Did(request: QueryDidRequest): Promise<QueryDidResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
