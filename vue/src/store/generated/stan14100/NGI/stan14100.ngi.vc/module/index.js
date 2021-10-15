// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateVerifiableCredential } from "./types/vc/tx";
import { MsgCreaRevokeVerifiableCredential } from "./types/vc/tx";
const types = [
    ["/stan14100.ngi.vc.MsgCreateVerifiableCredential", MsgCreateVerifiableCredential],
    ["/stan14100.ngi.vc.MsgCreaRevokeVerifiableCredential", MsgCreaRevokeVerifiableCredential],
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
        msgCreateVerifiableCredential: (data) => ({ typeUrl: "/stan14100.ngi.vc.MsgCreateVerifiableCredential", value: data }),
        msgCreaRevokeVerifiableCredential: (data) => ({ typeUrl: "/stan14100.ngi.vc.MsgCreaRevokeVerifiableCredential", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
