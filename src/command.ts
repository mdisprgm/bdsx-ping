import { command } from "bdsx/command";
import { CmdUtil } from "../utils/command";
import { Ping } from "./pings";

command.register("ping", "get your ping").overload((params, origin) => {
    const actor = origin.getEntity();
    const ni = actor?.isPlayer() ? actor.getNetworkIdentifier() : undefined;
    if (ni) {
        CmdUtil.runCmd(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"§e================"}]}`
        );
        CmdUtil.runCmd(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your last ping is §a${Ping.GetLastPing(
                ni
            )}§rms"}]}`
        );
        CmdUtil.runCmd(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your average ping is §a${Ping.GetAveragePing(
                ni
            )}§rms"}]}`
        );
        CmdUtil.runCmd(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your lowest ping is §a${Ping.GetLowestPing(
                ni
            )}§rms"}]}`
        );
        CmdUtil.runCmd(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"§e================"}]}`
        );
    }
}, {});
