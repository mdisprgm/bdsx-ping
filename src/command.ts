import { command } from "bdsx/command";
import { MCCmd } from "../utils/command";
import { Ping } from "./pings";

command.register("ping", "get your ping").overload(async (params, origin) => {
    const actor = origin.getEntity();
    const ni = actor?.isPlayer() ? actor.getNetworkIdentifier() : undefined;
    if (ni) {
        MCCmd.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"§e================"}]}`
        );
        MCCmd.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your last ping is §a${Ping.GetLastPing(
                ni
            )}§rms"}]}`
        );
        MCCmd.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your average ping is §a${Ping.GetAveragePing(
                ni
            )}§rms"}]}`
        );
        MCCmd.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"Your lowest ping is §a${Ping.GetLowestPing(
                ni
            )}§rms"}]}`
        );
        MCCmd.run(
            `tellraw "${actor?.getName()}" {"rawtext":[{"text":"§e================"}]}`
        );
    }
}, {});
