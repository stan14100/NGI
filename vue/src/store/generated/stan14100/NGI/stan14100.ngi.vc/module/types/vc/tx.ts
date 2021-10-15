/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { VerifiableCredential } from '../vc/vc'

export const protobufPackage = 'stan14100.ngi.vc'

export interface MsgCreateVerifiableCredential {
  creator: string
  verifiableCredential: VerifiableCredential | undefined
}

export interface MsgCreateVerifiableCredentialResponse {}

export interface MsgCreaRevokeVerifiableCredential {
  creator: string
  credentialId: string
}

export interface MsgCreaRevokeVerifiableCredentialResponse {}

const baseMsgCreateVerifiableCredential: object = { creator: '' }

export const MsgCreateVerifiableCredential = {
  encode(message: MsgCreateVerifiableCredential, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.verifiableCredential !== undefined) {
      VerifiableCredential.encode(message.verifiableCredential, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVerifiableCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateVerifiableCredential } as MsgCreateVerifiableCredential
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

  fromJSON(object: any): MsgCreateVerifiableCredential {
    const message = { ...baseMsgCreateVerifiableCredential } as MsgCreateVerifiableCredential
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

  toJSON(message: MsgCreateVerifiableCredential): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.verifiableCredential !== undefined &&
      (obj.verifiableCredential = message.verifiableCredential ? VerifiableCredential.toJSON(message.verifiableCredential) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateVerifiableCredential>): MsgCreateVerifiableCredential {
    const message = { ...baseMsgCreateVerifiableCredential } as MsgCreateVerifiableCredential
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

const baseMsgCreateVerifiableCredentialResponse: object = {}

export const MsgCreateVerifiableCredentialResponse = {
  encode(_: MsgCreateVerifiableCredentialResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateVerifiableCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateVerifiableCredentialResponse } as MsgCreateVerifiableCredentialResponse
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

  fromJSON(_: any): MsgCreateVerifiableCredentialResponse {
    const message = { ...baseMsgCreateVerifiableCredentialResponse } as MsgCreateVerifiableCredentialResponse
    return message
  },

  toJSON(_: MsgCreateVerifiableCredentialResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateVerifiableCredentialResponse>): MsgCreateVerifiableCredentialResponse {
    const message = { ...baseMsgCreateVerifiableCredentialResponse } as MsgCreateVerifiableCredentialResponse
    return message
  }
}

const baseMsgCreaRevokeVerifiableCredential: object = { creator: '', credentialId: '' }

export const MsgCreaRevokeVerifiableCredential = {
  encode(message: MsgCreaRevokeVerifiableCredential, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.credentialId !== '') {
      writer.uint32(18).string(message.credentialId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreaRevokeVerifiableCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreaRevokeVerifiableCredential } as MsgCreaRevokeVerifiableCredential
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

  fromJSON(object: any): MsgCreaRevokeVerifiableCredential {
    const message = { ...baseMsgCreaRevokeVerifiableCredential } as MsgCreaRevokeVerifiableCredential
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

  toJSON(message: MsgCreaRevokeVerifiableCredential): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.credentialId !== undefined && (obj.credentialId = message.credentialId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreaRevokeVerifiableCredential>): MsgCreaRevokeVerifiableCredential {
    const message = { ...baseMsgCreaRevokeVerifiableCredential } as MsgCreaRevokeVerifiableCredential
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

const baseMsgCreaRevokeVerifiableCredentialResponse: object = {}

export const MsgCreaRevokeVerifiableCredentialResponse = {
  encode(_: MsgCreaRevokeVerifiableCredentialResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreaRevokeVerifiableCredentialResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreaRevokeVerifiableCredentialResponse } as MsgCreaRevokeVerifiableCredentialResponse
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

  fromJSON(_: any): MsgCreaRevokeVerifiableCredentialResponse {
    const message = { ...baseMsgCreaRevokeVerifiableCredentialResponse } as MsgCreaRevokeVerifiableCredentialResponse
    return message
  },

  toJSON(_: MsgCreaRevokeVerifiableCredentialResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreaRevokeVerifiableCredentialResponse>): MsgCreaRevokeVerifiableCredentialResponse {
    const message = { ...baseMsgCreaRevokeVerifiableCredentialResponse } as MsgCreaRevokeVerifiableCredentialResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateVerifiableCredential(request: MsgCreateVerifiableCredential): Promise<MsgCreateVerifiableCredentialResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreaRevokeVerifiableCredential(request: MsgCreaRevokeVerifiableCredential): Promise<MsgCreaRevokeVerifiableCredentialResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateVerifiableCredential(request: MsgCreateVerifiableCredential): Promise<MsgCreateVerifiableCredentialResponse> {
    const data = MsgCreateVerifiableCredential.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.vc.Msg', 'CreateVerifiableCredential', data)
    return promise.then((data) => MsgCreateVerifiableCredentialResponse.decode(new Reader(data)))
  }

  CreaRevokeVerifiableCredential(request: MsgCreaRevokeVerifiableCredential): Promise<MsgCreaRevokeVerifiableCredentialResponse> {
    const data = MsgCreaRevokeVerifiableCredential.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.vc.Msg', 'CreaRevokeVerifiableCredential', data)
    return promise.then((data) => MsgCreaRevokeVerifiableCredentialResponse.decode(new Reader(data)))
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
