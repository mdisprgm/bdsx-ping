import { RakNet } from "bdsx/bds/raknet";
import { int32_t } from "bdsx/nativetype";
import { ProcHacker } from "bdsx/prochacker";

const hacker = ProcHacker.load("./prv_pdb.ini", [
    "?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
    "?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z",
    "?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
]);

export const GetLastPing = hacker.hooking(
    "?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
    int32_t,
    null,
    RakNet.RakPeer,
    RakNet.AddressOrGUID
)((peer, AddressOrGUID) => {
    return GetLastPing(peer, AddressOrGUID);
});

export const GetAveragePing = hacker.hooking(
    "?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z",
    int32_t,
    null,
    RakNet.RakPeer,
    RakNet.AddressOrGUID
)((peer, AddressOrGUID) => {
    return GetAveragePing(peer, AddressOrGUID);
});

export const GetLowestPing = hacker.hooking(
    "?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
    int32_t,
    null,
    RakNet.RakPeer,
    RakNet.AddressOrGUID
)((peer, AddressOrGUID) => {
    return GetLowestPing(peer, AddressOrGUID);
});
