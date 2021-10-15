/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'stan14100.ngi.did'

/** https://www.w3.org/TR/did-core/#did-document-properties */
export interface DidDocument {
  /** @context is spec for did document. */
  context: string[]
  /** id represents the id for the did document. */
  id: string
  /**
   * A DID controller is an entity that is authorized to make changes to a DID document.
   * cfr. https://www.w3.org/TR/did-core/#did-controller
   */
  controller: string[]
  /**
   * Services are used in DID documents to express ways of communicating with the DID subject or associated entities.
   * https://www.w3.org/TR/did-core/#services
   */
  service: Service[]
  /**
   * Authentication represents public key associated with the did document.
   * https://www.w3.org/TR/did-core/#authentication
   */
  authentication: string[]
  /**
   * Used to specify how the DID subject is expected to express claims, such as for the purposes of issuing a Verifiable Credential.
   * https://www.w3.org/TR/did-core/#assertion
   */
  assertionMethod: string[]
  /**
   * used to specify how an entity can generate encryption material in order to transmit confidential information intended for the DID subject.
   * https://www.w3.org/TR/did-core/#key-agreement
   */
  keyAgreement: string[]
  /**
   * Used to specify a verification method that might be used by the DID subject to invoke a cryptographic capability,
   * such as the authorization to update the DID Document.
   * https://www.w3.org/TR/did-core/#capability-invocation
   */
  capabilityInvocation: string[]
  /**
   * Used to specify a mechanism that might be used by the DID subject to delegate a cryptographic capability to another party.
   * https://www.w3.org/TR/did-core/#capability-delegation
   */
  capabilityDelegation: string[]
}

/** https://www.w3.org/TR/did-core/#service-properties */
export interface Service {
  id: string
  type: string
  serviceEndpoint: string
}

const baseDidDocument: object = {
  context: '',
  id: '',
  controller: '',
  authentication: '',
  assertionMethod: '',
  keyAgreement: '',
  capabilityInvocation: '',
  capabilityDelegation: ''
}

export const DidDocument = {
  encode(message: DidDocument, writer: Writer = Writer.create()): Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    for (const v of message.controller) {
      writer.uint32(26).string(v!)
    }
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    for (const v of message.authentication) {
      writer.uint32(50).string(v!)
    }
    for (const v of message.assertionMethod) {
      writer.uint32(58).string(v!)
    }
    for (const v of message.keyAgreement) {
      writer.uint32(66).string(v!)
    }
    for (const v of message.capabilityInvocation) {
      writer.uint32(74).string(v!)
    }
    for (const v of message.capabilityDelegation) {
      writer.uint32(82).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): DidDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseDidDocument } as DidDocument
    message.context = []
    message.controller = []
    message.service = []
    message.authentication = []
    message.assertionMethod = []
    message.keyAgreement = []
    message.capabilityInvocation = []
    message.capabilityDelegation = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string())
          break
        case 2:
          message.id = reader.string()
          break
        case 3:
          message.controller.push(reader.string())
          break
        case 5:
          message.service.push(Service.decode(reader, reader.uint32()))
          break
        case 6:
          message.authentication.push(reader.string())
          break
        case 7:
          message.assertionMethod.push(reader.string())
          break
        case 8:
          message.keyAgreement.push(reader.string())
          break
        case 9:
          message.capabilityInvocation.push(reader.string())
          break
        case 10:
          message.capabilityDelegation.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DidDocument {
    const message = { ...baseDidDocument } as DidDocument
    message.context = []
    message.controller = []
    message.service = []
    message.authentication = []
    message.assertionMethod = []
    message.keyAgreement = []
    message.capabilityInvocation = []
    message.capabilityDelegation = []
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e))
      }
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
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromJSON(e))
      }
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      for (const e of object.authentication) {
        message.authentication.push(String(e))
      }
    }
    if (object.assertionMethod !== undefined && object.assertionMethod !== null) {
      for (const e of object.assertionMethod) {
        message.assertionMethod.push(String(e))
      }
    }
    if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
      for (const e of object.keyAgreement) {
        message.keyAgreement.push(String(e))
      }
    }
    if (object.capabilityInvocation !== undefined && object.capabilityInvocation !== null) {
      for (const e of object.capabilityInvocation) {
        message.capabilityInvocation.push(String(e))
      }
    }
    if (object.capabilityDelegation !== undefined && object.capabilityDelegation !== null) {
      for (const e of object.capabilityDelegation) {
        message.capabilityDelegation.push(String(e))
      }
    }
    return message
  },

  toJSON(message: DidDocument): unknown {
    const obj: any = {}
    if (message.context) {
      obj.context = message.context.map((e) => e)
    } else {
      obj.context = []
    }
    message.id !== undefined && (obj.id = message.id)
    if (message.controller) {
      obj.controller = message.controller.map((e) => e)
    } else {
      obj.controller = []
    }
    if (message.service) {
      obj.service = message.service.map((e) => (e ? Service.toJSON(e) : undefined))
    } else {
      obj.service = []
    }
    if (message.authentication) {
      obj.authentication = message.authentication.map((e) => e)
    } else {
      obj.authentication = []
    }
    if (message.assertionMethod) {
      obj.assertionMethod = message.assertionMethod.map((e) => e)
    } else {
      obj.assertionMethod = []
    }
    if (message.keyAgreement) {
      obj.keyAgreement = message.keyAgreement.map((e) => e)
    } else {
      obj.keyAgreement = []
    }
    if (message.capabilityInvocation) {
      obj.capabilityInvocation = message.capabilityInvocation.map((e) => e)
    } else {
      obj.capabilityInvocation = []
    }
    if (message.capabilityDelegation) {
      obj.capabilityDelegation = message.capabilityDelegation.map((e) => e)
    } else {
      obj.capabilityDelegation = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<DidDocument>): DidDocument {
    const message = { ...baseDidDocument } as DidDocument
    message.context = []
    message.controller = []
    message.service = []
    message.authentication = []
    message.assertionMethod = []
    message.keyAgreement = []
    message.capabilityInvocation = []
    message.capabilityDelegation = []
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e)
      }
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
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromPartial(e))
      }
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      for (const e of object.authentication) {
        message.authentication.push(e)
      }
    }
    if (object.assertionMethod !== undefined && object.assertionMethod !== null) {
      for (const e of object.assertionMethod) {
        message.assertionMethod.push(e)
      }
    }
    if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
      for (const e of object.keyAgreement) {
        message.keyAgreement.push(e)
      }
    }
    if (object.capabilityInvocation !== undefined && object.capabilityInvocation !== null) {
      for (const e of object.capabilityInvocation) {
        message.capabilityInvocation.push(e)
      }
    }
    if (object.capabilityDelegation !== undefined && object.capabilityDelegation !== null) {
      for (const e of object.capabilityDelegation) {
        message.capabilityDelegation.push(e)
      }
    }
    return message
  }
}

const baseService: object = { id: '', type: '', serviceEndpoint: '' }

export const Service = {
  encode(message: Service, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.type !== '') {
      writer.uint32(18).string(message.type)
    }
    if (message.serviceEndpoint !== '') {
      writer.uint32(26).string(message.serviceEndpoint)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseService } as Service
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.type = reader.string()
          break
        case 3:
          message.serviceEndpoint = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Service {
    const message = { ...baseService } as Service
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type)
    } else {
      message.type = ''
    }
    if (object.serviceEndpoint !== undefined && object.serviceEndpoint !== null) {
      message.serviceEndpoint = String(object.serviceEndpoint)
    } else {
      message.serviceEndpoint = ''
    }
    return message
  },

  toJSON(message: Service): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.type !== undefined && (obj.type = message.type)
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint)
    return obj
  },

  fromPartial(object: DeepPartial<Service>): Service {
    const message = { ...baseService } as Service
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type
    } else {
      message.type = ''
    }
    if (object.serviceEndpoint !== undefined && object.serviceEndpoint !== null) {
      message.serviceEndpoint = object.serviceEndpoint
    } else {
      message.serviceEndpoint = ''
    }
    return message
  }
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
