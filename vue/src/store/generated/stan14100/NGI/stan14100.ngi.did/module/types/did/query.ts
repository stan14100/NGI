/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { DidDocument, DidMetadata } from '../did/did'

export const protobufPackage = 'stan14100.ngi.did'

export interface QueryDidsRequest {
  pagination: PageRequest | undefined
}

export interface QueryDidsResponse {
  didDocuments: DidDocument[]
  pagination: PageResponse | undefined
}

export interface QueryDidRequest {
  id: string
}

export interface QueryDidResponse {
  didDocument: DidDocument | undefined
  didMetadata: DidMetadata | undefined
}

const baseQueryDidsRequest: object = {}

export const QueryDidsRequest = {
  encode(message: QueryDidsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryDidsRequest } as QueryDidsRequest
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

  fromJSON(object: any): QueryDidsRequest {
    const message = { ...baseQueryDidsRequest } as QueryDidsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryDidsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryDidsRequest>): QueryDidsRequest {
    const message = { ...baseQueryDidsRequest } as QueryDidsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryDidsResponse: object = {}

export const QueryDidsResponse = {
  encode(message: QueryDidsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.didDocuments) {
      DidDocument.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryDidsResponse } as QueryDidsResponse
    message.didDocuments = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.didDocuments.push(DidDocument.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryDidsResponse {
    const message = { ...baseQueryDidsResponse } as QueryDidsResponse
    message.didDocuments = []
    if (object.didDocuments !== undefined && object.didDocuments !== null) {
      for (const e of object.didDocuments) {
        message.didDocuments.push(DidDocument.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryDidsResponse): unknown {
    const obj: any = {}
    if (message.didDocuments) {
      obj.didDocuments = message.didDocuments.map((e) => (e ? DidDocument.toJSON(e) : undefined))
    } else {
      obj.didDocuments = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryDidsResponse>): QueryDidsResponse {
    const message = { ...baseQueryDidsResponse } as QueryDidsResponse
    message.didDocuments = []
    if (object.didDocuments !== undefined && object.didDocuments !== null) {
      for (const e of object.didDocuments) {
        message.didDocuments.push(DidDocument.fromPartial(e))
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

const baseQueryDidRequest: object = { id: '' }

export const QueryDidRequest = {
  encode(message: QueryDidRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryDidRequest } as QueryDidRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryDidRequest {
    const message = { ...baseQueryDidRequest } as QueryDidRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    return message
  },

  toJSON(message: QueryDidRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryDidRequest>): QueryDidRequest {
    const message = { ...baseQueryDidRequest } as QueryDidRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    return message
  }
}

const baseQueryDidResponse: object = {}

export const QueryDidResponse = {
  encode(message: QueryDidResponse, writer: Writer = Writer.create()): Writer {
    if (message.didDocument !== undefined) {
      DidDocument.encode(message.didDocument, writer.uint32(10).fork()).ldelim()
    }
    if (message.didMetadata !== undefined) {
      DidMetadata.encode(message.didMetadata, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryDidResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryDidResponse } as QueryDidResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.didDocument = DidDocument.decode(reader, reader.uint32())
          break
        case 2:
          message.didMetadata = DidMetadata.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryDidResponse {
    const message = { ...baseQueryDidResponse } as QueryDidResponse
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = DidDocument.fromJSON(object.didDocument)
    } else {
      message.didDocument = undefined
    }
    if (object.didMetadata !== undefined && object.didMetadata !== null) {
      message.didMetadata = DidMetadata.fromJSON(object.didMetadata)
    } else {
      message.didMetadata = undefined
    }
    return message
  },

  toJSON(message: QueryDidResponse): unknown {
    const obj: any = {}
    message.didDocument !== undefined && (obj.didDocument = message.didDocument ? DidDocument.toJSON(message.didDocument) : undefined)
    message.didMetadata !== undefined && (obj.didMetadata = message.didMetadata ? DidMetadata.toJSON(message.didMetadata) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryDidResponse>): QueryDidResponse {
    const message = { ...baseQueryDidResponse } as QueryDidResponse
    if (object.didDocument !== undefined && object.didDocument !== null) {
      message.didDocument = DidDocument.fromPartial(object.didDocument)
    } else {
      message.didDocument = undefined
    }
    if (object.didMetadata !== undefined && object.didMetadata !== null) {
      message.didMetadata = DidMetadata.fromPartial(object.didMetadata)
    } else {
      message.didMetadata = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of dids items. */
  Dids(request: QueryDidsRequest): Promise<QueryDidsResponse>
  /** Queries a list of did items. */
  Did(request: QueryDidRequest): Promise<QueryDidResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Dids(request: QueryDidsRequest): Promise<QueryDidsResponse> {
    const data = QueryDidsRequest.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.did.Query', 'Dids', data)
    return promise.then((data) => QueryDidsResponse.decode(new Reader(data)))
  }

  Did(request: QueryDidRequest): Promise<QueryDidResponse> {
    const data = QueryDidRequest.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.did.Query', 'Did', data)
    return promise.then((data) => QueryDidResponse.decode(new Reader(data)))
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
