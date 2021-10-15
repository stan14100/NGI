// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAddService } from "./types/did/tx";
import { MsgDeleteService } from "./types/did/tx";
import { MsgCreateDidDocument } from "./types/did/tx";
import { MsgUpdateDidDocument } from "./types/did/tx";


const types = [
  ["/stan14100.ngi.did.MsgAddService", MsgAddService],
  ["/stan14100.ngi.did.MsgDeleteService", MsgDeleteService],
  ["/stan14100.ngi.did.MsgCreateDidDocument", MsgCreateDidDocument],
  ["/stan14100.ngi.did.MsgUpdateDidDocument", MsgUpdateDidDocument],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgAddService: (data: MsgAddService): EncodeObject => ({ typeUrl: "/stan14100.ngi.did.MsgAddService", value: data }),
    msgDeleteService: (data: MsgDeleteService): EncodeObject => ({ typeUrl: "/stan14100.ngi.did.MsgDeleteService", value: data }),
    msgCreateDidDocument: (data: MsgCreateDidDocument): EncodeObject => ({ typeUrl: "/stan14100.ngi.did.MsgCreateDidDocument", value: data }),
    msgUpdateDidDocument: (data: MsgUpdateDidDocument): EncodeObject => ({ typeUrl: "/stan14100.ngi.did.MsgUpdateDidDocument", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};