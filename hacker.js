"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLowestPing = exports.GetAveragePing = exports.GetLastPing = void 0;
const raknet_1 = require("bdsx/bds/raknet");
const nativetype_1 = require("bdsx/nativetype");
const prochacker_1 = require("bdsx/prochacker");
const hacker = prochacker_1.ProcHacker.load("./prv_pdb.ini", [
    "?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
    "?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z",
    "?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z",
]);
exports.GetLastPing = hacker.hooking("?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z", nativetype_1.int32_t, null, raknet_1.RakNet.RakPeer, raknet_1.RakNet.AddressOrGUID)((peer, AddressOrGUID) => {
    return (0, exports.GetLastPing)(peer, AddressOrGUID);
});
exports.GetAveragePing = hacker.hooking("?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z", nativetype_1.int32_t, null, raknet_1.RakNet.RakPeer, raknet_1.RakNet.AddressOrGUID)((peer, AddressOrGUID) => {
    return (0, exports.GetAveragePing)(peer, AddressOrGUID);
});
exports.GetLowestPing = hacker.hooking("?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z", nativetype_1.int32_t, null, raknet_1.RakNet.RakPeer, raknet_1.RakNet.AddressOrGUID)((peer, AddressOrGUID) => {
    return (0, exports.GetLowestPing)(peer, AddressOrGUID);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRDQUF5QztBQUN6QyxnREFBMEM7QUFDMUMsZ0RBQTZDO0FBRTdDLE1BQU0sTUFBTSxHQUFHLHVCQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtJQUM1Qyx1REFBdUQ7SUFDdkQsMERBQTBEO0lBQzFELHlEQUF5RDtDQUM1RCxDQUFDLENBQUM7QUFFVSxRQUFBLFdBQVcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUNyQyx1REFBdUQsRUFDdkQsb0JBQU8sRUFDUCxJQUFJLEVBQ0osZUFBTSxDQUFDLE9BQU8sRUFDZCxlQUFNLENBQUMsYUFBYSxDQUN2QixDQUFDLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxFQUFFO0lBQ3RCLE9BQU8sSUFBQSxtQkFBVyxFQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsY0FBYyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQ3hDLDBEQUEwRCxFQUMxRCxvQkFBTyxFQUNQLElBQUksRUFDSixlQUFNLENBQUMsT0FBTyxFQUNkLGVBQU0sQ0FBQyxhQUFhLENBQ3ZCLENBQUMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUU7SUFDdEIsT0FBTyxJQUFBLHNCQUFjLEVBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRVUsUUFBQSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FDdkMseURBQXlELEVBQ3pELG9CQUFPLEVBQ1AsSUFBSSxFQUNKLGVBQU0sQ0FBQyxPQUFPLEVBQ2QsZUFBTSxDQUFDLGFBQWEsQ0FDdkIsQ0FBQyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsRUFBRTtJQUN0QixPQUFPLElBQUEscUJBQWEsRUFBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUMifQ==