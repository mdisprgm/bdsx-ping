import { NetworkIdentifier } from "bdsx/bds/networkidentifier";

import { serverInstance } from "bdsx/bds/server";

export const g_peer = serverInstance.networkHandler.instance.peer;

export namespace Ping {
    export function GetAveragePing(ni: NetworkIdentifier): number {
        return g_peer.GetAveragePing(ni.address);
    }

    export function GetLastPing(ni: NetworkIdentifier): number {
        return g_peer.GetLastPing(ni.address);
    }

    export function GetLowestPing(ni: NetworkIdentifier): number {
        return g_peer.GetLowestPing(ni.address)
    }
}
