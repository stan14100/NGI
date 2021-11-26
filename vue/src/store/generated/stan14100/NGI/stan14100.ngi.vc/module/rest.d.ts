export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface VcHealthCenterSubject {
    id?: string;
    name?: string;
    info?: VcInfo;
}
export interface VcInfo {
    adress?: string;
    city?: string;
    country?: string;
    postcode?: string;
    vat?: string;
}
export declare type VcMsgIssueVerifiableCredentialResponse = object;
export declare type VcMsgRevokeVerifiableCredentialResponse = object;
/**
* A cryptographic proof that can be used to detect tampering and verify the authorship of a credential or presentation.
The specific method used for an embedded proof MUST be included using the type property.
*/
export interface VcProof {
    type?: string;
    created?: string;
    proofPurpose?: string;
    verificationMethod?: string;
    signature?: string;
}
export interface VcVerifiableCredential {
    context?: string[];
    /**
     * The value of the id property MUST be a single URI. It is RECOMMENDED
     * that the URI in the id be one which, if dereferenced, results in a
     * document containing machine-readable information about the id.
     */
    id?: string;
    /**
     * The value of the type property MUST be, or map to (through interpretation
     * of the @context property), one or more URIs. If more than one URI is
     * provided, the URIs MUST be interpreted as an unordered set.
     */
    type?: string[];
    /**
     * The value of the credentialSubject property is defined as a set of
     * objects that contain one or more properties that are each related
     * to a subject of the verifiable credential.
     */
    credentialSubject?: VcHealthCenterSubject;
    /**
     * The value of the issuer property MUST be either a URI or an object
     * containing an id property. It is RECOMMENDED that the URI in the issuer
     * or its id be one which, if dereferenced, results in a document containing
     * machine-readable information about the issuer that can be used to verify
     * the information expressed in the credential.
     */
    issuer?: string;
    /**
     * A credential MUST have an issuanceDate property. The value of the issuanceDate
     * property MUST be a string value of an [RFC3339] combined date and time string
     * representing the date and time the credential becomes valid, which could
     * be a date and time in the future. Note that this value represents the earliest
     * point in time at which the information associated with the credentialSubject
     * property becomes valid.
     * @format date-time
     */
    issuanceDate?: string;
    /**
     * One or more cryptographic proofs that can be used to detect tampering
     * and verify the authorship of a credential or presentation. The specific
     * method used for an embedded proof MUST be included using the type property.
     */
    proof?: VcProof;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title vc/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
}
export {};
