/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'stan14100.ngi.vc';
const baseVerifiableCredential = { context: '', id: '', type: '', issuer: '' };
export const VerifiableCredential = {
    encode(message, writer = Writer.create()) {
        for (const v of message.context) {
            writer.uint32(10).string(v);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.type) {
            writer.uint32(26).string(v);
        }
        if (message.credentialSubject !== undefined) {
            HealthCenterSubject.encode(message.credentialSubject, writer.uint32(34).fork()).ldelim();
        }
        if (message.issuer !== '') {
            writer.uint32(42).string(message.issuer);
        }
        if (message.issuanceDate !== undefined) {
            Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(50).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseVerifiableCredential };
        message.context = [];
        message.type = [];
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
                    message.type.push(reader.string());
                    break;
                case 4:
                    message.credentialSubject = HealthCenterSubject.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.issuer = reader.string();
                    break;
                case 6:
                    message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.proof = Proof.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseVerifiableCredential };
        message.context = [];
        message.type = [];
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
        if (object.type !== undefined && object.type !== null) {
            for (const e of object.type) {
                message.type.push(String(e));
            }
        }
        if (object.credentialSubject !== undefined && object.credentialSubject !== null) {
            message.credentialSubject = HealthCenterSubject.fromJSON(object.credentialSubject);
        }
        else {
            message.credentialSubject = undefined;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = String(object.issuer);
        }
        else {
            message.issuer = '';
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = fromJsonTimestamp(object.issuanceDate);
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromJSON(object.proof);
        }
        else {
            message.proof = undefined;
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
        if (message.type) {
            obj.type = message.type.map((e) => e);
        }
        else {
            obj.type = [];
        }
        message.credentialSubject !== undefined &&
            (obj.credentialSubject = message.credentialSubject ? HealthCenterSubject.toJSON(message.credentialSubject) : undefined);
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.issuanceDate !== undefined && (obj.issuanceDate = message.issuanceDate !== undefined ? message.issuanceDate.toISOString() : null);
        message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseVerifiableCredential };
        message.context = [];
        message.type = [];
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
        if (object.type !== undefined && object.type !== null) {
            for (const e of object.type) {
                message.type.push(e);
            }
        }
        if (object.credentialSubject !== undefined && object.credentialSubject !== null) {
            message.credentialSubject = HealthCenterSubject.fromPartial(object.credentialSubject);
        }
        else {
            message.credentialSubject = undefined;
        }
        if (object.issuer !== undefined && object.issuer !== null) {
            message.issuer = object.issuer;
        }
        else {
            message.issuer = '';
        }
        if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
            message.issuanceDate = object.issuanceDate;
        }
        else {
            message.issuanceDate = undefined;
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromPartial(object.proof);
        }
        else {
            message.proof = undefined;
        }
        return message;
    }
};
const baseHealthCenterSubject = { id: '', name: '' };
export const HealthCenterSubject = {
    encode(message, writer = Writer.create()) {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.info !== undefined) {
            Info.encode(message.info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHealthCenterSubject };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.info = Info.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHealthCenterSubject };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = Info.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.info !== undefined && (obj.info = message.info ? Info.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHealthCenterSubject };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = Info.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        return message;
    }
};
const baseInfo = { adress: '', city: '', country: '', postcode: '', vat: '' };
export const Info = {
    encode(message, writer = Writer.create()) {
        if (message.adress !== '') {
            writer.uint32(10).string(message.adress);
        }
        if (message.city !== '') {
            writer.uint32(18).string(message.city);
        }
        if (message.country !== '') {
            writer.uint32(26).string(message.country);
        }
        if (message.postcode !== '') {
            writer.uint32(34).string(message.postcode);
        }
        if (message.vat !== '') {
            writer.uint32(42).string(message.vat);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfo };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.adress = reader.string();
                    break;
                case 2:
                    message.city = reader.string();
                    break;
                case 3:
                    message.country = reader.string();
                    break;
                case 4:
                    message.postcode = reader.string();
                    break;
                case 5:
                    message.vat = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInfo };
        if (object.adress !== undefined && object.adress !== null) {
            message.adress = String(object.adress);
        }
        else {
            message.adress = '';
        }
        if (object.city !== undefined && object.city !== null) {
            message.city = String(object.city);
        }
        else {
            message.city = '';
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = String(object.country);
        }
        else {
            message.country = '';
        }
        if (object.postcode !== undefined && object.postcode !== null) {
            message.postcode = String(object.postcode);
        }
        else {
            message.postcode = '';
        }
        if (object.vat !== undefined && object.vat !== null) {
            message.vat = String(object.vat);
        }
        else {
            message.vat = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.adress !== undefined && (obj.adress = message.adress);
        message.city !== undefined && (obj.city = message.city);
        message.country !== undefined && (obj.country = message.country);
        message.postcode !== undefined && (obj.postcode = message.postcode);
        message.vat !== undefined && (obj.vat = message.vat);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInfo };
        if (object.adress !== undefined && object.adress !== null) {
            message.adress = object.adress;
        }
        else {
            message.adress = '';
        }
        if (object.city !== undefined && object.city !== null) {
            message.city = object.city;
        }
        else {
            message.city = '';
        }
        if (object.country !== undefined && object.country !== null) {
            message.country = object.country;
        }
        else {
            message.country = '';
        }
        if (object.postcode !== undefined && object.postcode !== null) {
            message.postcode = object.postcode;
        }
        else {
            message.postcode = '';
        }
        if (object.vat !== undefined && object.vat !== null) {
            message.vat = object.vat;
        }
        else {
            message.vat = '';
        }
        return message;
    }
};
const baseProof = { type: '', created: '', proofPurpose: '', verificationMethod: '', signature: '' };
export const Proof = {
    encode(message, writer = Writer.create()) {
        if (message.type !== '') {
            writer.uint32(10).string(message.type);
        }
        if (message.created !== '') {
            writer.uint32(18).string(message.created);
        }
        if (message.proofPurpose !== '') {
            writer.uint32(26).string(message.proofPurpose);
        }
        if (message.verificationMethod !== '') {
            writer.uint32(34).string(message.verificationMethod);
        }
        if (message.signature !== '') {
            writer.uint32(42).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseProof };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.created = reader.string();
                    break;
                case 3:
                    message.proofPurpose = reader.string();
                    break;
                case 4:
                    message.verificationMethod = reader.string();
                    break;
                case 5:
                    message.signature = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseProof };
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = '';
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = String(object.created);
        }
        else {
            message.created = '';
        }
        if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
            message.proofPurpose = String(object.proofPurpose);
        }
        else {
            message.proofPurpose = '';
        }
        if (object.verificationMethod !== undefined && object.verificationMethod !== null) {
            message.verificationMethod = String(object.verificationMethod);
        }
        else {
            message.verificationMethod = '';
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.created !== undefined && (obj.created = message.created);
        message.proofPurpose !== undefined && (obj.proofPurpose = message.proofPurpose);
        message.verificationMethod !== undefined && (obj.verificationMethod = message.verificationMethod);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseProof };
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = '';
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = object.created;
        }
        else {
            message.created = '';
        }
        if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
            message.proofPurpose = object.proofPurpose;
        }
        else {
            message.proofPurpose = '';
        }
        if (object.verificationMethod !== undefined && object.verificationMethod !== null) {
            message.verificationMethod = object.verificationMethod;
        }
        else {
            message.verificationMethod = '';
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = object.signature;
        }
        else {
            message.signature = '';
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
