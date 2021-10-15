// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
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
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgAddService: (data) => ({ typeUrl: "/stan14100.ngi.did.MsgAddService", value: data }),
        msgDeleteService: (data) => ({ typeUrl: "/stan14100.ngi.did.MsgDeleteService", value: data }),
        msgCreateDidDocument: (data) => ({ typeUrl: "/stan14100.ngi.did.MsgCreateDidDocument", value: data }),
        msgUpdateDidDocument: (data) => ({ typeUrl: "/stan14100.ngi.did.MsgUpdateDidDocument", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
