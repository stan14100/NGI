/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { VerifiableCredential } from '../vc/vc';
export const protobufPackage = 'stan14100.ngi.vc';
const baseMsgIssueVerifiableCredential = { creator: '' };
export const MsgIssueVerifiableCredential = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.verifiableCredential !== undefined) {
            VerifiableCredential.encode(message.verifiableCredential, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgIssueVerifiableCredential };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.verifiableCredential = VerifiableCredential.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgIssueVerifiableCredential };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.verifiableCredential !== undefined && object.verifiableCredential !== null) {
            message.verifiableCredential = VerifiableCredential.fromJSON(object.verifiableCredential);
        }
        else {
            message.verifiableCredential = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.verifiableCredential !== undefined &&
            (obj.verifiableCredential = message.verifiableCredential ? VerifiableCredential.toJSON(message.verifiableCredential) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgIssueVerifiableCredential };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.verifiableCredential !== undefined && object.verifiableCredential !== null) {
            message.verifiableCredential = VerifiableCredential.fromPartial(object.verifiableCredential);
        }
        else {
            message.verifiableCredential = undefined;
        }
        return message;
    }
};
const baseMsgIssueVerifiableCredentialResponse = {};
export const MsgIssueVerifiableCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgIssueVerifiableCredentialResponse };
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
        const message = { ...baseMsgIssueVerifiableCredentialResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgIssueVerifiableCredentialResponse };
        return message;
    }
};
const baseMsgRevokeVerifiableCredential = { creator: '', credentialId: '' };
export const MsgRevokeVerifiableCredential = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.credentialId !== '') {
            writer.uint32(18).string(message.credentialId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevokeVerifiableCredential };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.credentialId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRevokeVerifiableCredential };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = String(object.credentialId);
        }
        else {
            message.credentialId = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.credentialId !== undefined && (obj.credentialId = message.credentialId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRevokeVerifiableCredential };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.credentialId !== undefined && object.credentialId !== null) {
            message.credentialId = object.credentialId;
        }
        else {
            message.credentialId = '';
        }
        return message;
    }
};
const baseMsgRevokeVerifiableCredentialResponse = {};
export const MsgRevokeVerifiableCredentialResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevokeVerifiableCredentialResponse };
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
        const message = { ...baseMsgRevokeVerifiableCredentialResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRevokeVerifiableCredentialResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    IssueVerifiableCredential(request) {
        const data = MsgIssueVerifiableCredential.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.vc.Msg', 'IssueVerifiableCredential', data);
        return promise.then((data) => MsgIssueVerifiableCredentialResponse.decode(new Reader(data)));
    }
    RevokeVerifiableCredential(request) {
        const data = MsgRevokeVerifiableCredential.encode(request).finish();
        const promise = this.rpc.request('stan14100.ngi.vc.Msg', 'RevokeVerifiableCredential', data);
        return promise.then((data) => MsgRevokeVerifiableCredentialResponse.decode(new Reader(data)));
    }
}
