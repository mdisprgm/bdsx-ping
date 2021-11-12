import { command } from "bdsx/command";
import { CmdUtil } from "../utils/command";
import { Ping } from "./pings";

command.register("ping", "get your ping").overload(async (params, origin) => {
    const actor = origin.getEntity();
    const ni = actor?.isPlayer() ? actor.getNetworkIdentifier() : undefined;
    if (ni) {
        CmdUtil.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"§e================"}]}`
        );
        CmdUtil.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your last ping is §a${Ping.GetLastPing(
                ni
            )}§rms"}]}`
        );
        CmdUtil.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your average ping is §a${Ping.GetAveragePing(
                ni
            )}§rms"}]}`
        );
        CmdUtil.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your lowest ping is §a${Ping.GetLowestPing(
                ni
            )}§rms"}]}`
        );
        CmdUtil.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"§e================"}]}`
        );
    }
}, {});
