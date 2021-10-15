import { Reader, Writer } from 'protobufjs/minimal';
import { Service } from '../did/did';
export declare const protobufPackage = "stan14100.ngi.did";
export interface MsgCreateDidDocument {
    creator: string;
    id: string;
    controller: string;
    services: Service[];
}
export interface MsgCreateDidDocumentResponse {
}
export interface MsgUpdateDidDocument {
    creator: string;
    id: string;
    controller: string[];
}
export interface MsgUpdateDidDocumentResponse {
}
export interface MsgAddService {
    creator: string;
    id: string;
    service: Service | undefined;
}
export interface MsgAddServiceResponse {
}
export interface MsgDeleteService {
    creator: string;
    id: string;
    serviceId: string;
}
export interface MsgDeleteServiceResponse {
}
export declare const MsgCreateDidDocument: {
    encode(message: MsgCreateDidDocument, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDidDocument;
    fromJSON(object: any): MsgCreateDidDocument;
    toJSON(message: MsgCreateDidDocument): unknown;
    fromPartial(object: DeepPartial<MsgCreateDidDocument>): MsgCreateDidDocument;
};
export declare const MsgCreateDidDocumentResponse: {
    encode(_: MsgCreateDidDocumentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateDidDocumentResponse;
    fromJSON(_: any): MsgCreateDidDocumentResponse;
    toJSON(_: MsgCreateDidDocumentResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateDidDocumentResponse>): MsgCreateDidDocumentResponse;
};
export declare const MsgUpdateDidDocument: {
    encode(message: MsgUpdateDidDocument, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDidDocument;
    fromJSON(object: any): MsgUpdateDidDocument;
    toJSON(message: MsgUpdateDidDocument): unknown;
    fromPartial(object: DeepPartial<MsgUpdateDidDocument>): MsgUpdateDidDocument;
};
export declare const MsgUpdateDidDocumentResponse: {
    encode(_: MsgUpdateDidDocumentResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateDidDocumentResponse;
    fromJSON(_: any): MsgUpdateDidDocumentResponse;
    toJSON(_: MsgUpdateDidDocumentResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateDidDocumentResponse>): MsgUpdateDidDocumentResponse;
};
export declare const MsgAddService: {
    encode(message: MsgAddService, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddService;
    fromJSON(object: any): MsgAddService;
    toJSON(message: MsgAddService): unknown;
    fromPartial(object: DeepPartial<MsgAddService>): MsgAddService;
};
export declare const MsgAddServiceResponse: {
    encode(_: MsgAddServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddServiceResponse;
    fromJSON(_: any): MsgAddServiceResponse;
    toJSON(_: MsgAddServiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddServiceResponse>): MsgAddServiceResponse;
};
export declare const MsgDeleteService: {
    encode(message: MsgDeleteService, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteService;
    fromJSON(object: any): MsgDeleteService;
    toJSON(message: MsgDeleteService): unknown;
    fromPartial(object: DeepPartial<MsgDeleteService>): MsgDeleteService;
};
export declare const MsgDeleteServiceResponse: {
    encode(_: MsgDeleteServiceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceResponse;
    fromJSON(_: any): MsgDeleteServiceResponse;
    toJSON(_: MsgDeleteServiceResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDidDocument(request: MsgCreateDidDocument): Promise<MsgCreateDidDocumentResponse>;
    UpdateDidDocument(request: MsgUpdateDidDocument): Promise<MsgUpdateDidDocumentResponse>;
    AddService(request: MsgAddService): Promise<MsgAddServiceResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateDidDocument(request: MsgCreateDidDocument): Promise<MsgCreateDidDocumentResponse>;
    UpdateDidDocument(request: MsgUpdateDidDocument): Promise<MsgUpdateDidDocumentResponse>;
    AddService(request: MsgAddService): Promise<MsgAddServiceResponse>;
    DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
