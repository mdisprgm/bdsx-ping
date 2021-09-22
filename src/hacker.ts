import { RakNet } from "bdsx/bds/raknet";
import { serverInstance } from "bdsx/bds/server";
import { int32_t } from "bdsx/nativetype";
import { ProcHacker } from "bdsx/prochacker";

export const g_peer =
    serverInstance.minecraft.getNetworkHandler().instance.peer;

const hacker = ProcHacker.load("./prv_pdb.ini", [
    "?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
    "?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z",
    "?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
]);

export const __GetLastPing__ = hacker.hooking(
    "?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
    int32_t,
    null,
    RakNet.RakPeer,
    RakNet.AddressOrGUID
)((peer, AddressOrGUID) => {
    return __GetLastPing__(peer, AddressOrGUID);
});

export const __GetAveragePing__ = hacker.hooking(
    "?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z",
    int32_t,
    null,
    RakNet.RakPeer,
    RakNet.AddressOrGUID
)((peer, AddressOrGUID) => {
    return __GetAveragePing__(peer, AddressOrGUID);
});

export const __GetLowestPing__ = hacker.hooking(
    "?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
    int32_t,
    null,
    RakNet.RakPeer,
    RakNet.AddressOrGUID
)((peer, AddressOrGUID) => {
    return __GetLowestPing__(peer, AddressOrGUID);
});
