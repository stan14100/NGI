/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'stan14100.ngi.did';
const baseDidDocument = {
    context: '',
    id: '',
    controller: '',
    authentication: '',
    assertionMethod: '',
    keyAgreement: '',
    capabilityInvocation: '',
    capabilityDelegation: ''
};
export const DidDocument = {
    encode(message, writer = Writer.create()) {
        for (const v of message.context) {
            writer.uint32(10).string(v);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.controller) {
            writer.uint32(26).string(v);
        }
        for (const v of message.verificationMethod) {
            VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.service) {
            Service.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.authentication) {
            writer.uint32(50).string(v);
        }
        for (const v of message.assertionMethod) {
            writer.uint32(58).string(v);
        }
        for (const v of message.keyAgreement) {
            writer.uint32(66).string(v);
        }
        for (const v of message.capabilityInvocation) {
            writer.uint32(74).string(v);
        }
        for (const v of message.capabilityDelegation) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDidDocument };
        message.context = [];
        message.controller = [];
        message.verificationMethod = [];
        message.service = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.keyAgreement = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.controller.push(reader.string());
                    break;
                case 4:
                    message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.service.push(Service.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.authentication.push(reader.string());
                    break;
                case 7:
                    message.assertionMethod.push(reader.string());
                    break;
                case 8:
                    message.keyAgreement.push(reader.string());
                    break;
                case 9:
                    message.capabilityInvocation.push(reader.string());
                    break;
                case 10:
                    message.capabilityDelegation.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDidDocument };
        message.context = [];
        message.controller = [];
        message.verificationMethod = [];
        message.service = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.keyAgreement = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(String(e));
            }
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
        if (object.verificationMethod !== undefined && object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(VerificationMethod.fromJSON(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(Service.fromJSON(e));
            }
        }
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(String(e));
            }
        }
        if (object.assertionMethod !== undefined && object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(String(e));
            }
        }
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(String(e));
            }
        }
        if (object.capabilityInvocation !== undefined && object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(String(e));
            }
        }
        if (object.capabilityDelegation !== undefined && object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.context) {
            obj.context = message.context.map((e) => e);
        }
        else {
            obj.context = [];
        }
        message.id !== undefined && (obj.id = message.id);
        if (message.controller) {
            obj.controller = message.controller.map((e) => e);
        }
        else {
            obj.controller = [];
        }
        if (message.verificationMethod) {
            obj.verificationMethod = message.verificationMethod.map((e) => (e ? VerificationMethod.toJSON(e) : undefined));
        }
        else {
            obj.verificationMethod = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => (e ? Service.toJSON(e) : undefined));
        }
        else {
            obj.service = [];
        }
        if (message.authentication) {
            obj.authentication = message.authentication.map((e) => e);
        }
        else {
            obj.authentication = [];
        }
        if (message.assertionMethod) {
            obj.assertionMethod = message.assertionMethod.map((e) => e);
        }
        else {
            obj.assertionMethod = [];
        }
        if (message.keyAgreement) {
            obj.keyAgreement = message.keyAgreement.map((e) => e);
        }
        else {
            obj.keyAgreement = [];
        }
        if (message.capabilityInvocation) {
            obj.capabilityInvocation = message.capabilityInvocation.map((e) => e);
        }
        else {
            obj.capabilityInvocation = [];
        }
        if (message.capabilityDelegation) {
            obj.capabilityDelegation = message.capabilityDelegation.map((e) => e);
        }
        else {
            obj.capabilityDelegation = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDidDocument };
        message.context = [];
        message.controller = [];
        message.verificationMethod = [];
        message.service = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.keyAgreement = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(e);
            }
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
        if (object.verificationMethod !== undefined && object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(VerificationMethod.fromPartial(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(Service.fromPartial(e));
            }
        }
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(e);
            }
        }
        if (object.assertionMethod !== undefined && object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(e);
            }
        }
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(e);
            }
        }
        if (object.capabilityInvocation !== undefined && object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(e);
            }
        }
        if (object.capabilityDelegation !== undefined && object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(e);
            }
        }
        return message;
    }
};
const baseVerificationMethod = { id: '', type: '', controller: '' };
export const VerificationMethod = {
    encode(message, writer = Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.controller !== '') {
            writer.uint32(26).string(message.controller);
        }
        if (message.publicKeyHex !== undefined) {
            writer.uint32(34).string(message.publicKeyHex);
        }
        if (message.publicKeyMultibase !== undefined) {
            writer.uint32(42).string(message.publicKeyMultibase);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVerificationMethod };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.controller = reader.string();
                    break;
                case 4:
                    message.publicKeyHex = reader.string();
                    break;
                case 5:
                    message.publicKeyMultibase = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVerificationMethod };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = String(object.controller);
        }
        else {
            message.controller = '';
        }
        if (object.publicKeyHex !== undefined && object.publicKeyHex !== null) {
            message.publicKeyHex = String(object.publicKeyHex);
        }
        else {
            message.publicKeyHex = undefined;
        }
        if (object.publicKeyMultibase !== undefined && object.publicKeyMultibase !== null) {
            message.publicKeyMultibase = String(object.publicKeyMultibase);
        }
        else {
            message.publicKeyMultibase = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.controller !== undefined && (obj.controller = message.controller);
        message.publicKeyHex !== undefined && (obj.publicKeyHex = message.publicKeyHex);
        message.publicKeyMultibase !== undefined && (obj.publicKeyMultibase = message.publicKeyMultibase);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVerificationMethod };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.controller !== undefined && object.controller !== null) {
            message.controller = object.controller;
        }
        else {
            message.controller = '';
        }
        if (object.publicKeyHex !== undefined && object.publicKeyHex !== null) {
            message.publicKeyHex = object.publicKeyHex;
        }
        else {
            message.publicKeyHex = undefined;
        }
        if (object.publicKeyMultibase !== undefined && object.publicKeyMultibase !== null) {
            message.publicKeyMultibase = object.publicKeyMultibase;
        }
        else {
            message.publicKeyMultibase = undefined;
        }
        return message;
    }
};
const baseService = { id: '', type: '', serviceEndpoint: '' };
export const Service = {
    encode(message, writer = Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        if (message.serviceEndpoint !== '') {
            writer.uint32(26).string(message.serviceEndpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseService };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.serviceEndpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseService };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.serviceEndpoint !== undefined && object.serviceEndpoint !== null) {
            message.serviceEndpoint = String(object.serviceEndpoint);
        }
        else {
            message.serviceEndpoint = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseService };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.serviceEndpoint !== undefined && object.serviceEndpoint !== null) {
            message.serviceEndpoint = object.serviceEndpoint;
        }
        else {
            message.serviceEndpoint = '';
        }
        return message;
    }
};
const baseDidMetadata = { versionId: '' };
export const DidMetadata = {
    encode(message, writer = Writer.create()) {
        if (message.versionId !== '') {
            writer.uint32(10).string(message.versionId);
        }
        if (message.createdTimestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.createdTimestamp), writer.uint32(18).fork()).ldelim();
        }
        if (message.updatedTimestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.updatedTimestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDidMetadata };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versionId = reader.string();
                    break;
                case 2:
                    message.createdTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.updatedTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDidMetadata };
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = '';
        }
        if (object.createdTimestamp !== undefined && object.createdTimestamp !== null) {
            message.createdTimestamp = fromJsonTimestamp(object.createdTimestamp);
        }
        else {
            message.createdTimestamp = undefined;
        }
        if (object.updatedTimestamp !== undefined && object.updatedTimestamp !== null) {
            message.updatedTimestamp = fromJsonTimestamp(object.updatedTimestamp);
        }
        else {
            message.updatedTimestamp = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.createdTimestamp !== undefined && (obj.createdTimestamp = message.createdTimestamp !== undefined ? message.createdTimestamp.toISOString() : null);
        message.updatedTimestamp !== undefined && (obj.updatedTimestamp = message.updatedTimestamp !== undefined ? message.updatedTimestamp.toISOString() : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDidMetadata };
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = object.versionId;
        }
        else {
            message.versionId = '';
        }
        if (object.createdTimestamp !== undefined && object.createdTimestamp !== null) {
            message.createdTimestamp = object.createdTimestamp;
        }
        else {
            message.createdTimestamp = undefined;
        }
        if (object.updatedTimestamp !== undefined && object.updatedTimestamp !== null) {
            message.updatedTimestamp = object.updatedTimestamp;
        }
        else {
            message.updatedTimestamp = undefined;
        }
        return message;
    }
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
