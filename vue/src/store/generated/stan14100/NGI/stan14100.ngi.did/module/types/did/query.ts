/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { DidDocument } from '../did/did'

export const protobufPackage = 'stan14100.ngi.did'

export interface QueryDidsRequest {
  pagination: PageRequest | undefined
}

export interface QueryDidsResponse {
  didDocuments: DidDocument[]
  pagination: PageResponse | undefined
}

const baseQueryDidsRequest: object = {}

export const QueryDidsRequest = {
  encode(message: QueryDidsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
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
        case 2:
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of dids items. */
  Dids(request: QueryDidsRequest): Promise<QueryDidsResponse>
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
