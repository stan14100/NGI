/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'stan14100.ngi.vc'

/** VerifiableCredential represents a verifiable credential */
export interface VerifiableCredential {
  /** @context is spec for verifiable credential base context URL is "https://www.w3.org/2018/credentials/v1", */
  context: string[]
  /**
   * The value of the id property MUST be a single URI. It is RECOMMENDED
   * that the URI in the id be one which, if dereferenced, results in a
   * document containing machine-readable information about the id.
   */
  id: string
  /**
   * The value of the type property MUST be, or map to (through interpretation
   * of the @context property), one or more URIs. If more than one URI is
   * provided, the URIs MUST be interpreted as an unordered set.
   */
  type: string[]
  /** represents a credential subject that identifies an authorized health center */
  healthCredSubject: HealthCenterSubject | undefined
  /** represents a credential subject that connects health results to a user */
  userCredSubject: UserHealthSubject | undefined
  /**
   * The value of the issuer property MUST be either a URI or an object
   * containing an id property. It is RECOMMENDED that the URI in the issuer
   * or its id be one which, if dereferenced, results in a document containing
   * machine-readable information about the issuer that can be used to verify
   * the information expressed in the credential.
   */
  issuer: string
  /**
   * A credential MUST have an issuanceDate property. The value of the issuanceDate
   * property MUST be a string value of an [RFC3339] combined date and time string
   * representing the date and time the credential becomes valid, which could
   * be a date and time in the future. Note that this value represents the earliest
   * point in time at which the information associated with the credentialSubject
   * property becomes valid.
   */
  issuanceDate: Date | undefined
  /**
   * One or more cryptographic proofs that can be used to detect tampering
   * and verify the authorship of a credential or presentation. The specific
   * method used for an embedded proof MUST be included using the type property.
   */
  proof: Proof | undefined
}

/** A structure descrubing a Health Center information */
export interface HealthCenterSubject {
  id: string
  /** legal name of the entity */
  name: string
  info: Info | undefined
}

export interface Info {
  adress: string
  city: string
  country: string
  postcode: string
  vat: string
}

export interface UserHealthSubject {
  id: string
  testId: string
  result: boolean
}

/**
 * A cryptographic proof that can be used to detect tampering and verify the authorship of a credential or presentation.
 * The specific method used for an embedded proof MUST be included using the type property.
 */
export interface Proof {
  type: string
  created: string
  proofPurpose: string
  verificationMethod: string
  signature: string
}

const baseVerifiableCredential: object = { context: '', id: '', type: '', issuer: '' }

export const VerifiableCredential = {
  encode(message: VerifiableCredential, writer: Writer = Writer.create()): Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!)
    }
    if (message.id !== '') {
      writer.uint32(18).string(message.id)
    }
    for (const v of message.type) {
      writer.uint32(26).string(v!)
    }
    if (message.healthCredSubject !== undefined) {
      HealthCenterSubject.encode(message.healthCredSubject, writer.uint32(34).fork()).ldelim()
    }
    if (message.userCredSubject !== undefined) {
      UserHealthSubject.encode(message.userCredSubject, writer.uint32(42).fork()).ldelim()
    }
    if (message.issuer !== '') {
      writer.uint32(50).string(message.issuer)
    }
    if (message.issuanceDate !== undefined) {
      Timestamp.encode(toTimestamp(message.issuanceDate), writer.uint32(58).fork()).ldelim()
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(66).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): VerifiableCredential {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseVerifiableCredential } as VerifiableCredential
    message.context = []
    message.type = []
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
          message.type.push(reader.string())
          break
        case 4:
          message.healthCredSubject = HealthCenterSubject.decode(reader, reader.uint32())
          break
        case 5:
          message.userCredSubject = UserHealthSubject.decode(reader, reader.uint32())
          break
        case 6:
          message.issuer = reader.string()
          break
        case 7:
          message.issuanceDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        case 8:
          message.proof = Proof.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): VerifiableCredential {
    const message = { ...baseVerifiableCredential } as VerifiableCredential
    message.context = []
    message.type = []
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
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(String(e))
      }
    }
    if (object.healthCredSubject !== undefined && object.healthCredSubject !== null) {
      message.healthCredSubject = HealthCenterSubject.fromJSON(object.healthCredSubject)
    } else {
      message.healthCredSubject = undefined
    }
    if (object.userCredSubject !== undefined && object.userCredSubject !== null) {
      message.userCredSubject = UserHealthSubject.fromJSON(object.userCredSubject)
    } else {
      message.userCredSubject = undefined
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = String(object.issuer)
    } else {
      message.issuer = ''
    }
    if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
      message.issuanceDate = fromJsonTimestamp(object.issuanceDate)
    } else {
      message.issuanceDate = undefined
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromJSON(object.proof)
    } else {
      message.proof = undefined
    }
    return message
  },

  toJSON(message: VerifiableCredential): unknown {
    const obj: any = {}
    if (message.context) {
      obj.context = message.context.map((e) => e)
    } else {
      obj.context = []
    }
    message.id !== undefined && (obj.id = message.id)
    if (message.type) {
      obj.type = message.type.map((e) => e)
    } else {
      obj.type = []
    }
    message.healthCredSubject !== undefined &&
      (obj.healthCredSubject = message.healthCredSubject ? HealthCenterSubject.toJSON(message.healthCredSubject) : undefined)
    message.userCredSubject !== undefined && (obj.userCredSubject = message.userCredSubject ? UserHealthSubject.toJSON(message.userCredSubject) : undefined)
    message.issuer !== undefined && (obj.issuer = message.issuer)
    message.issuanceDate !== undefined && (obj.issuanceDate = message.issuanceDate !== undefined ? message.issuanceDate.toISOString() : null)
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<VerifiableCredential>): VerifiableCredential {
    const message = { ...baseVerifiableCredential } as VerifiableCredential
    message.context = []
    message.type = []
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
    if (object.type !== undefined && object.type !== null) {
      for (const e of object.type) {
        message.type.push(e)
      }
    }
    if (object.healthCredSubject !== undefined && object.healthCredSubject !== null) {
      message.healthCredSubject = HealthCenterSubject.fromPartial(object.healthCredSubject)
    } else {
      message.healthCredSubject = undefined
    }
    if (object.userCredSubject !== undefined && object.userCredSubject !== null) {
      message.userCredSubject = UserHealthSubject.fromPartial(object.userCredSubject)
    } else {
      message.userCredSubject = undefined
    }
    if (object.issuer !== undefined && object.issuer !== null) {
      message.issuer = object.issuer
    } else {
      message.issuer = ''
    }
    if (object.issuanceDate !== undefined && object.issuanceDate !== null) {
      message.issuanceDate = object.issuanceDate
    } else {
      message.issuanceDate = undefined
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof)
    } else {
      message.proof = undefined
    }
    return message
  }
}

const baseHealthCenterSubject: object = { id: '', name: '' }

export const HealthCenterSubject = {
  encode(message: HealthCenterSubject, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.info !== undefined) {
      Info.encode(message.info, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): HealthCenterSubject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseHealthCenterSubject } as HealthCenterSubject
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.info = Info.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): HealthCenterSubject {
    const message = { ...baseHealthCenterSubject } as HealthCenterSubject
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = Info.fromJSON(object.info)
    } else {
      message.info = undefined
    }
    return message
  },

  toJSON(message: HealthCenterSubject): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.info !== undefined && (obj.info = message.info ? Info.toJSON(message.info) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<HealthCenterSubject>): HealthCenterSubject {
    const message = { ...baseHealthCenterSubject } as HealthCenterSubject
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = Info.fromPartial(object.info)
    } else {
      message.info = undefined
    }
    return message
  }
}

const baseInfo: object = { adress: '', city: '', country: '', postcode: '', vat: '' }

export const Info = {
  encode(message: Info, writer: Writer = Writer.create()): Writer {
    if (message.adress !== '') {
      writer.uint32(10).string(message.adress)
    }
    if (message.city !== '') {
      writer.uint32(18).string(message.city)
    }
    if (message.country !== '') {
      writer.uint32(26).string(message.country)
    }
    if (message.postcode !== '') {
      writer.uint32(34).string(message.postcode)
    }
    if (message.vat !== '') {
      writer.uint32(42).string(message.vat)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Info {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseInfo } as Info
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.adress = reader.string()
          break
        case 2:
          message.city = reader.string()
          break
        case 3:
          message.country = reader.string()
          break
        case 4:
          message.postcode = reader.string()
          break
        case 5:
          message.vat = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Info {
    const message = { ...baseInfo } as Info
    if (object.adress !== undefined && object.adress !== null) {
      message.adress = String(object.adress)
    } else {
      message.adress = ''
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = String(object.city)
    } else {
      message.city = ''
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country)
    } else {
      message.country = ''
    }
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = String(object.postcode)
    } else {
      message.postcode = ''
    }
    if (object.vat !== undefined && object.vat !== null) {
      message.vat = String(object.vat)
    } else {
      message.vat = ''
    }
    return message
  },

  toJSON(message: Info): unknown {
    const obj: any = {}
    message.adress !== undefined && (obj.adress = message.adress)
    message.city !== undefined && (obj.city = message.city)
    message.country !== undefined && (obj.country = message.country)
    message.postcode !== undefined && (obj.postcode = message.postcode)
    message.vat !== undefined && (obj.vat = message.vat)
    return obj
  },

  fromPartial(object: DeepPartial<Info>): Info {
    const message = { ...baseInfo } as Info
    if (object.adress !== undefined && object.adress !== null) {
      message.adress = object.adress
    } else {
      message.adress = ''
    }
    if (object.city !== undefined && object.city !== null) {
      message.city = object.city
    } else {
      message.city = ''
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country
    } else {
      message.country = ''
    }
    if (object.postcode !== undefined && object.postcode !== null) {
      message.postcode = object.postcode
    } else {
      message.postcode = ''
    }
    if (object.vat !== undefined && object.vat !== null) {
      message.vat = object.vat
    } else {
      message.vat = ''
    }
    return message
  }
}

const baseUserHealthSubject: object = { id: '', testId: '', result: false }

export const UserHealthSubject = {
  encode(message: UserHealthSubject, writer: Writer = Writer.create()): Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id)
    }
    if (message.testId !== '') {
      writer.uint32(18).string(message.testId)
    }
    if (message.result === true) {
      writer.uint32(24).bool(message.result)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UserHealthSubject {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUserHealthSubject } as UserHealthSubject
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string()
          break
        case 2:
          message.testId = reader.string()
          break
        case 3:
          message.result = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): UserHealthSubject {
    const message = { ...baseUserHealthSubject } as UserHealthSubject
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id)
    } else {
      message.id = ''
    }
    if (object.testId !== undefined && object.testId !== null) {
      message.testId = String(object.testId)
    } else {
      message.testId = ''
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Boolean(object.result)
    } else {
      message.result = false
    }
    return message
  },

  toJSON(message: UserHealthSubject): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.testId !== undefined && (obj.testId = message.testId)
    message.result !== undefined && (obj.result = message.result)
    return obj
  },

  fromPartial(object: DeepPartial<UserHealthSubject>): UserHealthSubject {
    const message = { ...baseUserHealthSubject } as UserHealthSubject
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = ''
    }
    if (object.testId !== undefined && object.testId !== null) {
      message.testId = object.testId
    } else {
      message.testId = ''
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result
    } else {
      message.result = false
    }
    return message
  }
}

const baseProof: object = { type: '', created: '', proofPurpose: '', verificationMethod: '', signature: '' }

export const Proof = {
  encode(message: Proof, writer: Writer = Writer.create()): Writer {
    if (message.type !== '') {
      writer.uint32(10).string(message.type)
    }
    if (message.created !== '') {
      writer.uint32(18).string(message.created)
    }
    if (message.proofPurpose !== '') {
      writer.uint32(26).string(message.proofPurpose)
    }
    if (message.verificationMethod !== '') {
      writer.uint32(34).string(message.verificationMethod)
    }
    if (message.signature !== '') {
      writer.uint32(42).string(message.signature)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseProof } as Proof
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string()
          break
        case 2:
          message.created = reader.string()
          break
        case 3:
          message.proofPurpose = reader.string()
          break
        case 4:
          message.verificationMethod = reader.string()
          break
        case 5:
          message.signature = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Proof {
    const message = { ...baseProof } as Proof
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type)
    } else {
      message.type = ''
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = String(object.created)
    } else {
      message.created = ''
    }
    if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
      message.proofPurpose = String(object.proofPurpose)
    } else {
      message.proofPurpose = ''
    }
    if (object.verificationMethod !== undefined && object.verificationMethod !== null) {
      message.verificationMethod = String(object.verificationMethod)
    } else {
      message.verificationMethod = ''
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature)
    } else {
      message.signature = ''
    }
    return message
  },

  toJSON(message: Proof): unknown {
    const obj: any = {}
    message.type !== undefined && (obj.type = message.type)
    message.created !== undefined && (obj.created = message.created)
    message.proofPurpose !== undefined && (obj.proofPurpose = message.proofPurpose)
    message.verificationMethod !== undefined && (obj.verificationMethod = message.verificationMethod)
    message.signature !== undefined && (obj.signature = message.signature)
    return obj
  },

  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = { ...baseProof } as Proof
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type
    } else {
      message.type = ''
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created
    } else {
      message.created = ''
    }
    if (object.proofPurpose !== undefined && object.proofPurpose !== null) {
      message.proofPurpose = object.proofPurpose
    } else {
      message.proofPurpose = ''
    }
    if (object.verificationMethod !== undefined && object.verificationMethod !== null) {
      message.verificationMethod = object.verificationMethod
    } else {
      message.verificationMethod = ''
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = object.signature
    } else {
      message.signature = ''
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}
