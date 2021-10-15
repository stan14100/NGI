/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Service } from '../did/did'

export const protobufPackage = 'stan14100.ngi.did'

export interface MsgCreateDidDocument {
  creator: string
  id: string
  controller: string
  services: Service[]
}

export interface MsgCreateDidDocumentResponse {}

export interface MsgUpdateDidDocument {
  creator: string
  id: string
  controller: string[]
}

export interface MsgUpdateDidDocumentResponse {}

export interface MsgAddService {
  creator: string
  id: string
  service: Service | undefined
}

export interface MsgAddServiceResponse {}

export interface MsgDeleteService {
  creator: string
  id: string
  serviceId: string
}

export interface MsgDeleteServiceResponse {}

const baseMsgCreateDidDocument: object = { creator: '', id: '', controller: '' }

export const MsgCreateDidDocument = {
  encode(message: MsgCreateDidDocument, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    if (message.controller !== '') {
      writer.uint32(26).string(message.controller)
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDidDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDidDocument } as MsgCreateDidDocument
    message.services = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.controller = reader.string()
          break
        case 4:
          message.services.push(Service.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateDidDocument {
    const message = { ...baseMsgCreateDidDocument } as MsgCreateDidDocument
    message.services = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = String(object.controller)
    } else {
      message.controller = ''
    }
    if (object.services !== undefined && object.services !== null) {
      for (const e of object.services) {
        message.services.push(Service.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: MsgCreateDidDocument): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.controller !== undefined && (obj.controller = message.controller)
    if (message.services) {
      obj.services = message.services.map((e) => (e ? Service.toJSON(e) : undefined))
    } else {
      obj.services = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateDidDocument>): MsgCreateDidDocument {
    const message = { ...baseMsgCreateDidDocument } as MsgCreateDidDocument
    message.services = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = object.controller
    } else {
      message.controller = ''
    }
    if (object.services !== undefined && object.services !== null) {
      for (const e of object.services) {
        message.services.push(Service.fromPartial(e))
      }
    }
    return message
  }
}

const baseMsgCreateDidDocumentResponse: object = {}

export const MsgCreateDidDocumentResponse = {
  encode(_: MsgCreateDidDocumentResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDidDocumentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateDidDocumentResponse } as MsgCreateDidDocumentResponse
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

  fromJSON(_: any): MsgCreateDidDocumentResponse {
    const message = { ...baseMsgCreateDidDocumentResponse } as MsgCreateDidDocumentResponse
    return message
  },

  toJSON(_: MsgCreateDidDocumentResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateDidDocumentResponse>): MsgCreateDidDocumentResponse {
    const message = { ...baseMsgCreateDidDocumentResponse } as MsgCreateDidDocumentResponse
    return message
  }
}

const baseMsgUpdateDidDocument: object = { creator: '', id: '', controller: '' }

export const MsgUpdateDidDocument = {
  encode(message: MsgUpdateDidDocument, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    for (const v of message.controller) {
      writer.uint32(26).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDidDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDidDocument } as MsgUpdateDidDocument
    message.controller = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.controller.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateDidDocument {
    const message = { ...baseMsgUpdateDidDocument } as MsgUpdateDidDocument
    message.controller = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.controller !== undefined && object.controller !== null) {
      for (const e of object.controller) {
        message.controller.push(String(e))
      }
    }
    return message
  },

  toJSON(message: MsgUpdateDidDocument): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    if (message.controller) {
      obj.controller = message.controller.map((e) => e)
    } else {
      obj.controller = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateDidDocument>): MsgUpdateDidDocument {
    const message = { ...baseMsgUpdateDidDocument } as MsgUpdateDidDocument
    message.controller = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.controller !== undefined && object.controller !== null) {
      for (const e of object.controller) {
        message.controller.push(e)
      }
    }
    return message
  }
}

const baseMsgUpdateDidDocumentResponse: object = {}

export const MsgUpdateDidDocumentResponse = {
  encode(_: MsgUpdateDidDocumentResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateDidDocumentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateDidDocumentResponse } as MsgUpdateDidDocumentResponse
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

  fromJSON(_: any): MsgUpdateDidDocumentResponse {
    const message = { ...baseMsgUpdateDidDocumentResponse } as MsgUpdateDidDocumentResponse
    return message
  },

  toJSON(_: MsgUpdateDidDocumentResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateDidDocumentResponse>): MsgUpdateDidDocumentResponse {
    const message = { ...baseMsgUpdateDidDocumentResponse } as MsgUpdateDidDocumentResponse
    return message
  }
}

const baseMsgAddService: object = { creator: '', id: '' }

export const MsgAddService = {
  encode(message: MsgAddService, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAddService } as MsgAddService
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.service = Service.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAddService {
    const message = { ...baseMsgAddService } as MsgAddService
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = Service.fromJSON(object.service)
    } else {
      message.service = undefined
    }
    return message
  },

  toJSON(message: MsgAddService): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.service !== undefined && (obj.service = message.service ? Service.toJSON(message.service) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAddService>): MsgAddService {
    const message = { ...baseMsgAddService } as MsgAddService
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = Service.fromPartial(object.service)
    } else {
      message.service = undefined
    }
    return message
  }
}

const baseMsgAddServiceResponse: object = {}

export const MsgAddServiceResponse = {
  encode(_: MsgAddServiceResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAddServiceResponse } as MsgAddServiceResponse
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

  fromJSON(_: any): MsgAddServiceResponse {
    const message = { ...baseMsgAddServiceResponse } as MsgAddServiceResponse
    return message
  },

  toJSON(_: MsgAddServiceResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgAddServiceResponse>): MsgAddServiceResponse {
    const message = { ...baseMsgAddServiceResponse } as MsgAddServiceResponse
    return message
  }
}

const baseMsgDeleteService: object = { creator: '', id: '', serviceId: '' }

export const MsgDeleteService = {
  encode(message: MsgDeleteService, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    if (message.serviceId !== '') {
      writer.uint32(26).string(message.serviceId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteService {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteService } as MsgDeleteService
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.serviceId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteService {
    const message = { ...baseMsgDeleteService } as MsgDeleteService
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = String(object.serviceId)
    } else {
      message.serviceId = ''
    }
    return message
  },

  toJSON(message: MsgDeleteService): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.serviceId !== undefined && (obj.serviceId = message.serviceId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteService>): MsgDeleteService {
    const message = { ...baseMsgDeleteService } as MsgDeleteService
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.serviceId !== undefined && object.serviceId !== null) {
      message.serviceId = object.serviceId
    } else {
      message.serviceId = ''
    }
    return message
  }
}

const baseMsgDeleteServiceResponse: object = {}

export const MsgDeleteServiceResponse = {
  encode(_: MsgDeleteServiceResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteServiceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteServiceResponse } as MsgDeleteServiceResponse
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

  fromJSON(_: any): MsgDeleteServiceResponse {
    const message = { ...baseMsgDeleteServiceResponse } as MsgDeleteServiceResponse
    return message
  },

  toJSON(_: MsgDeleteServiceResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteServiceResponse>): MsgDeleteServiceResponse {
    const message = { ...baseMsgDeleteServiceResponse } as MsgDeleteServiceResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  CreateDidDocument(request: MsgCreateDidDocument): Promise<MsgCreateDidDocumentResponse>
  UpdateDidDocument(request: MsgUpdateDidDocument): Promise<MsgUpdateDidDocumentResponse>
  AddService(request: MsgAddService): Promise<MsgAddServiceResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateDidDocument(request: MsgCreateDidDocument): Promise<MsgCreateDidDocumentResponse> {
    const data = MsgCreateDidDocument.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.did.Msg', 'CreateDidDocument', data)
    return promise.then((data) => MsgCreateDidDocumentResponse.decode(new Reader(data)))
  }

  UpdateDidDocument(request: MsgUpdateDidDocument): Promise<MsgUpdateDidDocumentResponse> {
    const data = MsgUpdateDidDocument.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.did.Msg', 'UpdateDidDocument', data)
    return promise.then((data) => MsgUpdateDidDocumentResponse.decode(new Reader(data)))
  }

  AddService(request: MsgAddService): Promise<MsgAddServiceResponse> {
    const data = MsgAddService.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.did.Msg', 'AddService', data)
    return promise.then((data) => MsgAddServiceResponse.decode(new Reader(data)))
  }

  DeleteService(request: MsgDeleteService): Promise<MsgDeleteServiceResponse> {
    const data = MsgDeleteService.encode(request).finish()
    const promise = this.rpc.request('stan14100.ngi.did.Msg', 'DeleteService', data)
    return promise.then((data) => MsgDeleteServiceResponse.decode(new Reader(data)))
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
