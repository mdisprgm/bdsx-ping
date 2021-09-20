import { serverInstance } from "bdsx/bds/server";
import { command } from "bdsx/command";
import { CmdUtil } from "../../../prv_utilities/command";
import { GetAveragePing, GetLastPing, GetLowestPing } from "./hacker";

const peer = serverInstance.minecraft.getNetworkHandler().instance.peer;

command.register("ping", "get your ping").overload((params, origin) => {
    const actor = origin.getEntity();
    const ni = actor?.isPlayer() ? actor.getNetworkIdentifier() : undefined;
    if (ni) {
        CmdUtil.runCmd(
            `tellraw ${actor?.getName()} {"rawtext":[{"text":"Your last ping is §a${GetLastPing(
                peer,
                ni.address
            )}§rms"}]}`
        );
        CmdUtil.runCmd(
            `tellraw ${actor?.getName()} {"rawtext":[{"text":"Your average ping is §a${GetAveragePing(
                peer,
                ni.address
            )}§rms"}]}`
        );
        CmdUtil.runCmd(
            `tellraw ${actor?.getName()} {"rawtext":[{"text":"Your lowest ping is §a${GetLowestPing(
                peer,
                ni.address
            )}§rms"}]}`
        );
    }
}, {});
