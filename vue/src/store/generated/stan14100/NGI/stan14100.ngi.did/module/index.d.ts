import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRemoveService } from "./types/did/tx";
import { MsgUpdateDidDocument } from "./types/did/tx";
import { MsgAddService } from "./types/did/tx";
import { MsgCreateDidDocument } from "./types/did/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgRemoveService: (data: MsgRemoveService) => EncodeObject;
    msgUpdateDidDocument: (data: MsgUpdateDidDocument) => EncodeObject;
    msgAddService: (data: MsgAddService) => EncodeObject;
    msgCreateDidDocument: (data: MsgCreateDidDocument) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
