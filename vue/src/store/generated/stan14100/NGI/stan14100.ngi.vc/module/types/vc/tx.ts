/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { VerifiableCredential } from '../vc/vc'

export const protobufPackage = 'stan14100.ngi.vc'

export interface MsgIssueVerifiableCredential {
  creator: string
  verifiableCredential: VerifiableCredential | undefined
}

export interface MsgIssueVerifiableCredentialResponse {}

export interface MsgRevokeVerifiableCredential {
  creator: string
  credentialId: string
}

export interface MsgRevokeVerifiableCredentialResponse {}

const baseMsgIssueVerifiableCredential: object = { creator: '' }

export const MsgIssueVerifiableCredential = {
  encode(message: MsgIssueVerifiableCredential, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.verifiableCredential !== undefined) {
      VerifiableCredential.encode(message.verifiableCredential, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIssueVerifiableCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgIssueVerifiableCredential } as MsgIssueVerifiableCredential
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.verifiableCredential = VerifiableCredential.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgIssueVerifiableCredential {
    const message = { ...baseMsgIssueVerifiableCredential } as MsgIssueVerifiableCredential
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.verifiableCredential !== undefined && object.verifiableCredential !== null) {
      message.verifiableCredential = VerifiableCredential.fromJSON(object.verifiableCredential)
    } else {
      message.verifiableCredential = undefined
    }
    return message
  },

  toJSON(message: MsgIssueVerifiableCredential): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.verifiableCredential !== undefined &&
      (obj.verifiableCredential = message.verifiableCredential ? VerifiableCredential.toJSON(message.verifiableCredential) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgIssueVerifiableCredential>): MsgIssueVerifiableCredential {
    const message = { ...baseMsgIssueVerifiableCredential } as MsgIssueVerifiableCredential
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.verifiableCredential !== undefined && object.verifiableCredential !== null) {
      message.verifiableCredential = VerifiableCredential.fromPartial(object.verifiableCredential)
    } else {
      message.verifiableCredential = undefined
    }
    return message
  }
}

const baseMsgIssueVerifiableCredentialResponse: object = {}

export const MsgIssueVerifiableCredentialResponse = {
  encode(_: MsgIssueVerifiableCredentialResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgIssueVerifiableCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgIssueVerifiableCredentialResponse } as MsgIssueVerifiableCredentialResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgIssueVerifiableCredentialResponse {
    const message = { ...baseMsgIssueVerifiableCredentialResponse } as MsgIssueVerifiableCredentialResponse
    return message
  },

  toJSON(_: MsgIssueVerifiableCredentialResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgIssueVerifiableCredentialResponse>): MsgIssueVerifiableCredentialResponse {
    const message = { ...baseMsgIssueVerifiableCredentialResponse } as MsgIssueVerifiableCredentialResponse
    return message
  }
}

const baseMsgRevokeVerifiableCredential: object = { creator: '', credentialId: '' }

export const MsgRevokeVerifiableCredential = {
  encode(message: MsgRevokeVerifiableCredential, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.credentialId !== '') {
      writer.uint32(18).string(message.credentialId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevokeVerifiableCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRevokeVerifiableCredential } as MsgRevokeVerifiableCredential
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.credentialId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRevokeVerifiableCredential {
    const message = { ...baseMsgRevokeVerifiableCredential } as MsgRevokeVerifiableCredential
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = String(object.credentialId)
    } else {
      message.credentialId = ''
    }
    return message
  },

  toJSON(message: MsgRevokeVerifiableCredential): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.credentialId !== undefined && (obj.credentialId = message.credentialId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRevokeVerifiableCredential>): MsgRevokeVerifiableCredential {
    const message = { ...baseMsgRevokeVerifiableCredential } as MsgRevokeVerifiableCredential
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.credentialId !== undefined && object.credentialId !== null) {
      message.credentialId = object.credentialId
    } else {
      message.credentialId = ''
    }
    return message
  }
}

const baseMsgRevokeVerifiableCredentialResponse: object = {}

export const MsgRevokeVerifiableCredentialResponse = {
  encode(_: MsgRevokeVerifiableCredentialResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevokeVerifiableCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRevokeVerifiableCredentialResponse } as MsgRevokeVerifiableCredentialResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgRevokeVerifiableCredentialResponse {
    const message = { ...baseMsgRevokeVerifiableCredentialResponse } as MsgRevokeVerifiableCredentialResponse
    return message
  },

  toJSON(_: MsgRevokeVerifiableCredentialResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgRevokeVerifiableCredentialResponse>): MsgRevokeVerifiableCredentialResponse {
    const message = { ...baseMsgRevokeVerifiableCredentialResponse } as MsgRevokeVerifiableCredentialResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  IssueVerifiableCredential(request: MsgIssueVerifiableCredential): Promise<MsgIssueVerifiableCredentialResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RevokeVerifiableCredential(request: MsgRevokeVerifiableCredential): Promise<MsgRevokeVerifiableCredentialResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  IssueVerifiableCredential(request: MsgIssueVerifiableCredential): Promise<MsgIssueVerifiableCredentialResponse> {
    const data = MsgIssueVerifiableCredential.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.vc.Msg', 'IssueVerifiableCredential', data)
    return promise.then((data) => MsgIssueVerifiableCredentialResponse.decode(new Reader(data)))
  }

  RevokeVerifiableCredential(request: MsgRevokeVerifiableCredential): Promise<MsgRevokeVerifiableCredentialResponse> {
    const data = MsgRevokeVerifiableCredential.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.vc.Msg', 'RevokeVerifiableCredential', data)
    return promise.then((data) => MsgRevokeVerifiableCredentialResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
