import { NetworkIdentifier } from "bdsx/bds/networkidentifier";
import {
    g_peer,
    __GetAveragePing__,
    __GetLastPing__,
    __GetLowestPing__,
} from "./hacker";

export namespace Ping {
    export function GetAveragePing(ni: NetworkIdentifier): number {
        return __GetAveragePing__(g_peer, ni.address);
    }

    export function GetLastPing(ni: NetworkIdentifier): number {
        return __GetLastPing__(g_peer, ni.address);
    }

    export function GetLowestPing(ni: NetworkIdentifier): number {
        return __GetLowestPing__(g_peer, ni.address);
    }
}
