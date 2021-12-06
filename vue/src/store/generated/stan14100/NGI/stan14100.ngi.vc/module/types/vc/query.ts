/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { VerifiableCredential } from '../vc/vc'

export const protobufPackage = 'stan14100.ngi.vc'

export interface QueryVcsRequest {
  pagination: PageRequest | undefined
}

export interface QueryVcsResponse {
  vcs: VerifiableCredential[]
  pagination: PageResponse | undefined
}

export interface QueryVcRequest {
  vcId: string
}

export interface QueryVcResponse {
  vc: VerifiableCredential | undefined
}

export interface QueryValidateVcRequest {
  vcId: string
  pubKey: string
}

export interface QueryValidateVcResponse {
  validationRes: boolean
}

const baseQueryVcsRequest: object = {}

export const QueryVcsRequest = {
  encode(message: QueryVcsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVcsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryVcsRequest } as QueryVcsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryVcsRequest {
    const message = { ...baseQueryVcsRequest } as QueryVcsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryVcsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryVcsRequest>): QueryVcsRequest {
    const message = { ...baseQueryVcsRequest } as QueryVcsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryVcsResponse: object = {}

export const QueryVcsResponse = {
  encode(message: QueryVcsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.vcs) {
      VerifiableCredential.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVcsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryVcsResponse } as QueryVcsResponse
    message.vcs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.vcs.push(VerifiableCredential.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryVcsResponse {
    const message = { ...baseQueryVcsResponse } as QueryVcsResponse
    message.vcs = []
    if (object.vcs !== undefined && object.vcs !== null) {
      for (const e of object.vcs) {
        message.vcs.push(VerifiableCredential.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryVcsResponse): unknown {
    const obj: any = {}
    if (message.vcs) {
      obj.vcs = message.vcs.map((e) => (e ? VerifiableCredential.toJSON(e) : undefined))
    } else {
      obj.vcs = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryVcsResponse>): QueryVcsResponse {
    const message = { ...baseQueryVcsResponse } as QueryVcsResponse
    message.vcs = []
    if (object.vcs !== undefined && object.vcs !== null) {
      for (const e of object.vcs) {
        message.vcs.push(VerifiableCredential.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryVcRequest: object = { vcId: '' }

export const QueryVcRequest = {
  encode(message: QueryVcRequest, writer: Writer = Writer.create()): Writer {
    if (message.vcId !== '') {
      writer.uint32(10).string(message.vcId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVcRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryVcRequest } as QueryVcRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.vcId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryVcRequest {
    const message = { ...baseQueryVcRequest } as QueryVcRequest
    if (object.vcId !== undefined && object.vcId !== null) {
      message.vcId = String(object.vcId)
    } else {
      message.vcId = ''
    }
    return message
  },

  toJSON(message: QueryVcRequest): unknown {
    const obj: any = {}
    message.vcId !== undefined && (obj.vcId = message.vcId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryVcRequest>): QueryVcRequest {
    const message = { ...baseQueryVcRequest } as QueryVcRequest
    if (object.vcId !== undefined && object.vcId !== null) {
      message.vcId = object.vcId
    } else {
      message.vcId = ''
    }
    return message
  }
}

const baseQueryVcResponse: object = {}

export const QueryVcResponse = {
  encode(message: QueryVcResponse, writer: Writer = Writer.create()): Writer {
    if (message.vc !== undefined) {
      VerifiableCredential.encode(message.vc, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVcResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryVcResponse } as QueryVcResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.vc = VerifiableCredential.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryVcResponse {
    const message = { ...baseQueryVcResponse } as QueryVcResponse
    if (object.vc !== undefined && object.vc !== null) {
      message.vc = VerifiableCredential.fromJSON(object.vc)
    } else {
      message.vc = undefined
    }
    return message
  },

  toJSON(message: QueryVcResponse): unknown {
    const obj: any = {}
    message.vc !== undefined && (obj.vc = message.vc ? VerifiableCredential.toJSON(message.vc) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryVcResponse>): QueryVcResponse {
    const message = { ...baseQueryVcResponse } as QueryVcResponse
    if (object.vc !== undefined && object.vc !== null) {
      message.vc = VerifiableCredential.fromPartial(object.vc)
    } else {
      message.vc = undefined
    }
    return message
  }
}

const baseQueryValidateVcRequest: object = { vcId: '', pubKey: '' }

export const QueryValidateVcRequest = {
  encode(message: QueryValidateVcRequest, writer: Writer = Writer.create()): Writer {
    if (message.vcId !== '') {
      writer.uint32(10).string(message.vcId)
    }
    if (message.pubKey !== '') {
      writer.uint32(18).string(message.pubKey)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryValidateVcRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryValidateVcRequest } as QueryValidateVcRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.vcId = reader.string()
          break
        case 2:
          message.pubKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryValidateVcRequest {
    const message = { ...baseQueryValidateVcRequest } as QueryValidateVcRequest
    if (object.vcId !== undefined && object.vcId !== null) {
      message.vcId = String(object.vcId)
    } else {
      message.vcId = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    return message
  },

  toJSON(message: QueryValidateVcRequest): unknown {
    const obj: any = {}
    message.vcId !== undefined && (obj.vcId = message.vcId)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    return obj
  },

  fromPartial(object: DeepPartial<QueryValidateVcRequest>): QueryValidateVcRequest {
    const message = { ...baseQueryValidateVcRequest } as QueryValidateVcRequest
    if (object.vcId !== undefined && object.vcId !== null) {
      message.vcId = object.vcId
    } else {
      message.vcId = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey
    } else {
      message.pubKey = ''
    }
    return message
  }
}

const baseQueryValidateVcResponse: object = { validationRes: false }

export const QueryValidateVcResponse = {
  encode(message: QueryValidateVcResponse, writer: Writer = Writer.create()): Writer {
    if (message.validationRes === true) {
      writer.uint32(8).bool(message.validationRes)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryValidateVcResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryValidateVcResponse } as QueryValidateVcResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.validationRes = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryValidateVcResponse {
    const message = { ...baseQueryValidateVcResponse } as QueryValidateVcResponse
    if (object.validationRes !== undefined && object.validationRes !== null) {
      message.validationRes = Boolean(object.validationRes)
    } else {
      message.validationRes = false
    }
    return message
  },

  toJSON(message: QueryValidateVcResponse): unknown {
    const obj: any = {}
    message.validationRes !== undefined && (obj.validationRes = message.validationRes)
    return obj
  },

  fromPartial(object: DeepPartial<QueryValidateVcResponse>): QueryValidateVcResponse {
    const message = { ...baseQueryValidateVcResponse } as QueryValidateVcResponse
    if (object.validationRes !== undefined && object.validationRes !== null) {
      message.validationRes = object.validationRes
    } else {
      message.validationRes = false
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of vcs items. */
  Vcs(request: QueryVcsRequest): Promise<QueryVcsResponse>
  /** Queries a list of vc items. */
  Vc(request: QueryVcRequest): Promise<QueryVcResponse>
  ValidateVc(request: QueryValidateVcRequest): Promise<QueryValidateVcResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Vcs(request: QueryVcsRequest): Promise<QueryVcsResponse> {
    const data = QueryVcsRequest.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.vc.Query', 'Vcs', data)
    return promise.then((data) => QueryVcsResponse.decode(new Reader(data)))
  }

  Vc(request: QueryVcRequest): Promise<QueryVcResponse> {
    const data = QueryVcRequest.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.vc.Query', 'Vc', data)
    return promise.then((data) => QueryVcResponse.decode(new Reader(data)))
  }

  ValidateVc(request: QueryValidateVcRequest): Promise<QueryValidateVcResponse> {
    const data = QueryValidateVcRequest.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.vc.Query', 'ValidateVc', data)
    return promise.then((data) => QueryValidateVcResponse.decode(new Reader(data)))
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
