/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { VerifiableCredential } from '../vc/vc';
export const protobufPackage = 'stan14100.ngi.vc';
const baseQueryVcsRequest = {};
export const QueryVcsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryVcsRequest };
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
        const message = { ...baseQueryVcsRequest };
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
        const message = { ...baseQueryVcsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryVcsResponse = {};
export const QueryVcsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.vcs) {
            VerifiableCredential.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryVcsResponse };
        message.vcs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vcs.push(VerifiableCredential.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryVcsResponse };
        message.vcs = [];
        if (object.vcs !== undefined && object.vcs !== null) {
            for (const e of object.vcs) {
                message.vcs.push(VerifiableCredential.fromJSON(e));
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
        if (message.vcs) {
            obj.vcs = message.vcs.map((e) => (e ? VerifiableCredential.toJSON(e) : undefined));
        }
        else {
            obj.vcs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryVcsResponse };
        message.vcs = [];
        if (object.vcs !== undefined && object.vcs !== null) {
            for (const e of object.vcs) {
                message.vcs.push(VerifiableCredential.fromPartial(e));
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
const baseQueryVcRequest = { vcId: '' };
export const QueryVcRequest = {
    encode(message, writer = Writer.create()) {
        if (message.vcId !== '') {
            writer.uint32(10).string(message.vcId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryVcRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vcId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryVcRequest };
        if (object.vcId !== undefined && object.vcId !== null) {
            message.vcId = String(object.vcId);
        }
        else {
            message.vcId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.vcId !== undefined && (obj.vcId = message.vcId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryVcRequest };
        if (object.vcId !== undefined && object.vcId !== null) {
            message.vcId = object.vcId;
        }
        else {
            message.vcId = '';
        }
        return message;
    }
};
const baseQueryVcResponse = {};
export const QueryVcResponse = {
    encode(message, writer = Writer.create()) {
        if (message.vc !== undefined) {
            VerifiableCredential.encode(message.vc, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryVcResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vc = VerifiableCredential.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryVcResponse };
        if (object.vc !== undefined && object.vc !== null) {
            message.vc = VerifiableCredential.fromJSON(object.vc);
        }
        else {
            message.vc = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.vc !== undefined && (obj.vc = message.vc ? VerifiableCredential.toJSON(message.vc) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryVcResponse };
        if (object.vc !== undefined && object.vc !== null) {
            message.vc = VerifiableCredential.fromPartial(object.vc);
        }
        else {
            message.vc = undefined;
        }
        return message;
    }
};
const baseQueryValidateVcRequest = { vcId: '', pubKey: '' };
export const QueryValidateVcRequest = {
    encode(message, writer = Writer.create()) {
        if (message.vcId !== '') {
            writer.uint32(10).string(message.vcId);
        }
        if (message.pubKey !== '') {
            writer.uint32(18).string(message.pubKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryValidateVcRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vcId = reader.string();
                    break;
                case 2:
                    message.pubKey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryValidateVcRequest };
        if (object.vcId !== undefined && object.vcId !== null) {
            message.vcId = String(object.vcId);
        }
        else {
            message.vcId = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.vcId !== undefined && (obj.vcId = message.vcId);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryValidateVcRequest };
        if (object.vcId !== undefined && object.vcId !== null) {
            message.vcId = object.vcId;
        }
        else {
            message.vcId = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        return message;
    }
};
const baseQueryValidateVcResponse = { validationRes: false };
export const QueryValidateVcResponse = {
    encode(message, writer = Writer.create()) {
        if (message.validationRes === true) {
            writer.uint32(8).bool(message.validationRes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryValidateVcResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validationRes = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryValidateVcResponse };
        if (object.validationRes !== undefined && object.validationRes !== null) {
            message.validationRes = Boolean(object.validationRes);
        }
        else {
            message.validationRes = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validationRes !== undefined && (obj.validationRes = message.validationRes);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryValidateVcResponse };
        if (object.validationRes !== undefined && object.validationRes !== null) {
            message.validationRes = object.validationRes;
        }
        else {
            message.validationRes = false;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Vcs(request) {
        const data = QueryVcsRequest.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.vc.Query', 'Vcs', data);
        return promise.then((data) => QueryVcsResponse.decode(new Reader(data)));
    }
    Vc(request) {
        const data = QueryVcRequest.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.vc.Query', 'Vc', data);
        return promise.then((data) => QueryVcResponse.decode(new Reader(data)));
    }
    ValidateVc(request) {
        const data = QueryValidateVcRequest.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.vc.Query', 'ValidateVc', data);
        return promise.then((data) => QueryValidateVcResponse.decode(new Reader(data)));
    }
}
