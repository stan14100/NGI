/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { VerificationMethod, Service } from '../did/did';
export const protobufPackage = 'stan14100.ngi.did';
const baseVerification = { relationships: '' };
export const Verification = {
    encode(message, writer = Writer.create()) {
        if (message.method !== undefined) {
            VerificationMethod.encode(message.method, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.relationships) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVerification };
        message.relationships = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.method = VerificationMethod.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.relationships.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVerification };
        message.relationships = [];
        if (object.method !== undefined && object.method !== null) {
            message.method = VerificationMethod.fromJSON(object.method);
        }
        else {
            message.method = undefined;
        }
        if (object.relationships !== undefined && object.relationships !== null) {
            for (const e of object.relationships) {
                message.relationships.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.method !== undefined && (obj.method = message.method ? VerificationMethod.toJSON(message.method) : undefined);
        if (message.relationships) {
            obj.relationships = message.relationships.map((e) => e);
        }
        else {
            obj.relationships = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVerification };
        message.relationships = [];
        if (object.method !== undefined && object.method !== null) {
            message.method = VerificationMethod.fromPartial(object.method);
        }
        else {
            message.method = undefined;
        }
        if (object.relationships !== undefined && object.relationships !== null) {
            for (const e of object.relationships) {
                message.relationships.push(e);
            }
        }
        return message;
    }
};
const baseMsgCreateDidDocument = { creator: '', id: '', controller: '' };
export const MsgCreateDidDocument = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.controller !== '') {
            writer.uint32(26).string(message.controller);
        }
        for (const v of message.verifications) {
            Verification.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.services) {
            Service.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDidDocument };
        message.verifications = [];
        message.services = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.controller = reader.string();
                    break;
                case 4:
                    message.verifications.push(Verification.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.services.push(Service.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateDidDocument };
        message.verifications = [];
        message.services = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = String(object.controller);
        }
        else {
            message.controller = '';
        }
        if (object.verifications !== undefined && object.verifications !== null) {
            for (const e of object.verifications) {
                message.verifications.push(Verification.fromJSON(e));
            }
        }
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(Service.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.controller !== undefined && (obj.controller = message.controller);
        if (message.verifications) {
            obj.verifications = message.verifications.map((e) => (e ? Verification.toJSON(e) : undefined));
        }
        else {
            obj.verifications = [];
        }
        if (message.services) {
            obj.services = message.services.map((e) => (e ? Service.toJSON(e) : undefined));
        }
        else {
            obj.services = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDidDocument };
        message.verifications = [];
        message.services = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = object.controller;
        }
        else {
            message.controller = '';
        }
        if (object.verifications !== undefined && object.verifications !== null) {
            for (const e of object.verifications) {
                message.verifications.push(Verification.fromPartial(e));
            }
        }
        if (object.services !== undefined && object.services !== null) {
            for (const e of object.services) {
                message.services.push(Service.fromPartial(e));
            }
        }
        return message;
    }
};
const baseMsgCreateDidDocumentResponse = {};
export const MsgCreateDidDocumentResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDidDocumentResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreateDidDocumentResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateDidDocumentResponse };
        return message;
    }
};
const baseMsgUpdateDidDocument = { creator: '', id: '', controller: '' };
export const MsgUpdateDidDocument = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.controller) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDidDocument };
        message.controller = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.controller.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateDidDocument };
        message.controller = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        if (message.controller) {
            obj.controller = message.controller.map((e) => e);
        }
        else {
            obj.controller = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDidDocument };
        message.controller = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(e);
            }
        }
        return message;
    }
};
const baseMsgUpdateDidDocumentResponse = {};
export const MsgUpdateDidDocumentResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDidDocumentResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateDidDocumentResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateDidDocumentResponse };
        return message;
    }
};
const baseMsgAddService = { creator: '', id: '' };
export const MsgAddService = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.service !== undefined) {
            Service.encode(message.service, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.service = Service.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAddService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.service !== undefined && object.service !== null) {
            message.service = Service.fromJSON(object.service);
        }
        else {
            message.service = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.service !== undefined && (obj.service = message.service ? Service.toJSON(message.service) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.service !== undefined && object.service !== null) {
            message.service = Service.fromPartial(object.service);
        }
        else {
            message.service = undefined;
        }
        return message;
    }
};
const baseMsgAddServiceResponse = {};
export const MsgAddServiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddServiceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgAddServiceResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAddServiceResponse };
        return message;
    }
};
const baseMsgRemoveService = { creator: '', id: '', serviceId: '' };
export const MsgRemoveService = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.serviceId !== '') {
            writer.uint32(26).string(message.serviceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRemoveService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.serviceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRemoveService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = String(object.serviceId);
        }
        else {
            message.serviceId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.serviceId !== undefined && (obj.serviceId = message.serviceId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRemoveService };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.serviceId !== undefined && object.serviceId !== null) {
            message.serviceId = object.serviceId;
        }
        else {
            message.serviceId = '';
        }
        return message;
    }
};
const baseMsgRemoveServiceResponse = {};
export const MsgRemoveServiceResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRemoveServiceResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgRemoveServiceResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRemoveServiceResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateDidDocument(request) {
        const data = MsgCreateDidDocument.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.did.Msg', 'CreateDidDocument', data);
        return promise.then((data) => MsgCreateDidDocumentResponse.decode(new Reader(data)));
    }
    UpdateDidDocument(request) {
        const data = MsgUpdateDidDocument.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.did.Msg', 'UpdateDidDocument', data);
        return promise.then((data) => MsgUpdateDidDocumentResponse.decode(new Reader(data)));
    }
    AddService(request) {
        const data = MsgAddService.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.did.Msg', 'AddService', data);
        return promise.then((data) => MsgAddServiceResponse.decode(new Reader(data)));
    }
    RemoveService(request) {
        const data = MsgRemoveService.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.did.Msg', 'RemoveService', data);
        return promise.then((data) => MsgRemoveServiceResponse.decode(new Reader(data)));
    }
}
