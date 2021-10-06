import { Actor } from "bdsx/bds/actor";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
export namespace CmdUtil {
    export const runCmd = bedrockServer.executeCommand;
    export const runCmdOnConsole = bedrockServer.executeCommandOnConsole;

    export function getPlayerByEntity(actor: Actor): Player | undefined {
        return actor.isPlayer() ? actor : undefined;
    }

    export function Feedback(
        str: string,
        target: Player | undefined = undefined
    ) {
        if (!target) {
            runCmd(`say ${str}`);
            return;
        }
        runCmd(`tellraw ${target.getName()} {"rawtext":[{"text":"${str}"}]}`);
    }
    export function Log(str: string, prefix = "Feedback") {
        console.log(`[${prefix}]`, str.replace(/§(\w{1})|(\d{1})/g, ""));
    }
}
