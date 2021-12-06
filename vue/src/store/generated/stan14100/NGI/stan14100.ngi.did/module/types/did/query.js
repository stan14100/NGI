/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { DidDocument, DidMetadata } from '../did/did';
export const protobufPackage = 'stan14100.ngi.did';
const baseQueryDidsRequest = {};
export const QueryDidsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryDidsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryDidsResponse = {};
export const QueryDidsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.didDocuments) {
            DidDocument.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidsResponse };
        message.didDocuments = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didDocuments.push(DidDocument.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryDidsResponse };
        message.didDocuments = [];
        if (object.didDocuments !== undefined && object.didDocuments !== null) {
            for (const e of object.didDocuments) {
                message.didDocuments.push(DidDocument.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.didDocuments) {
            obj.didDocuments = message.didDocuments.map((e) => (e ? DidDocument.toJSON(e) : undefined));
        }
        else {
            obj.didDocuments = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidsResponse };
        message.didDocuments = [];
        if (object.didDocuments !== undefined && object.didDocuments !== null) {
            for (const e of object.didDocuments) {
                message.didDocuments.push(DidDocument.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryDidRequest = { id: '' };
export const QueryDidRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryDidRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        return message;
    }
};
const baseQueryDidResponse = {};
export const QueryDidResponse = {
    encode(message, writer = Writer.create()) {
        if (message.didDocument !== undefined) {
            DidDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim();
        }
        if (message.didMetadata !== undefined) {
            DidMetadata.encode(message.didMetadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryDidResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didDocument = DidDocument.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.didMetadata = DidMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryDidResponse };
        if (object.didDocument !== undefined && object.didDocument !== null) {
            message.didDocument = DidDocument.fromJSON(object.didDocument);
        }
        else {
            message.didDocument = undefined;
        }
        if (object.didMetadata !== undefined && object.didMetadata !== null) {
            message.didMetadata = DidMetadata.fromJSON(object.didMetadata);
        }
        else {
            message.didMetadata = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.didDocument !== undefined && (obj.didDocument = message.didDocument ? DidDocument.toJSON(message.didDocument) : undefined);
        message.didMetadata !== undefined && (obj.didMetadata = message.didMetadata ? DidMetadata.toJSON(message.didMetadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryDidResponse };
        if (object.didDocument !== undefined && object.didDocument !== null) {
            message.didDocument = DidDocument.fromPartial(object.didDocument);
        }
        else {
            message.didDocument = undefined;
        }
        if (object.didMetadata !== undefined && object.didMetadata !== null) {
            message.didMetadata = DidMetadata.fromPartial(object.didMetadata);
        }
        else {
            message.didMetadata = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Dids(request) {
        const data = QueryDidsRequest.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.did.Query', 'Dids', data);
        return promise.then((data) => QueryDidsResponse.decode(new Reader(data)));
    }
    Did(request) {
        const data = QueryDidRequest.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.did.Query', 'Did', data);
        return promise.then((data) => QueryDidResponse.decode(new Reader(data)));
    }
}
