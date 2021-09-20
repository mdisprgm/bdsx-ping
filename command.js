"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("bdsx/bds/server");
const command_1 = require("bdsx/command");
const command_2 = require("../../prv_utilities/command");
const hacker_1 = require("./hacker");
const peer = server_1.serverInstance.minecraft.getNetworkHandler().instance.peer;
command_1.command.register("ping", "get your ping").overload((params, origin) => {
    const actor = origin.getEntity();
    const ni = (actor === null || actor === void 0 ? void 0 : actor.isPlayer()) ? actor.getNetworkIdentifier() : undefined;
    if (ni) {
        command_2.CmdUtil.runCmd(`tellraw ${actor === null || actor === void 0 ? void 0 : actor.getName()} {"rawtext":[{"text":"Your last ping is §a${(0, hacker_1.GetLastPing)(peer, ni.address)}§rms"}]}`);
        command_2.CmdUtil.runCmd(`tellraw ${actor === null || actor === void 0 ? void 0 : actor.getName()} {"rawtext":[{"text":"Your average ping is §a${(0, hacker_1.GetAveragePing)(peer, ni.address)}§rms"}]}`);
        command_2.CmdUtil.runCmd(`tellraw ${actor === null || actor === void 0 ? void 0 : actor.getName()} {"rawtext":[{"text":"Your lowest ping is §a${(0, hacker_1.GetLowestPing)(peer, ni.address)}§rms"}]}`);
    }
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBaUQ7QUFDakQsMENBQXVDO0FBQ3ZDLHlEQUFzRDtBQUN0RCxxQ0FBc0U7QUFFdEUsTUFBTSxJQUFJLEdBQUcsdUJBQWMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBRXhFLGlCQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbEUsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2pDLE1BQU0sRUFBRSxHQUFHLENBQUEsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsRUFBRSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hFLElBQUksRUFBRSxFQUFFO1FBQ0osaUJBQU8sQ0FBQyxNQUFNLENBQ1YsV0FBVyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxFQUFFLDZDQUE2QyxJQUFBLG9CQUFXLEVBQy9FLElBQUksRUFDSixFQUFFLENBQUMsT0FBTyxDQUNiLFVBQVUsQ0FDZCxDQUFDO1FBQ0YsaUJBQU8sQ0FBQyxNQUFNLENBQ1YsV0FBVyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxFQUFFLGdEQUFnRCxJQUFBLHVCQUFjLEVBQ3JGLElBQUksRUFDSixFQUFFLENBQUMsT0FBTyxDQUNiLFVBQVUsQ0FDZCxDQUFDO1FBQ0YsaUJBQU8sQ0FBQyxNQUFNLENBQ1YsV0FBVyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsT0FBTyxFQUFFLCtDQUErQyxJQUFBLHNCQUFhLEVBQ25GLElBQUksRUFDSixFQUFFLENBQUMsT0FBTyxDQUNiLFVBQVUsQ0FDZCxDQUFDO0tBQ0w7QUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMifQ==