/* istanbul ignore file: this function simply handles command line arguments
from the Squirrel Windows installer. The logic is both declarative and
cumbersome to test, so it's not being tested. */
import { App } from "electron";
import { resolve, dirname } from "path";
import { spawn } from "child_process";

export const runSquirrelUpdateExe = (
  args: string[],
  done: (...args: any[]) => void,
) => {
  const updateExe = resolve(dirname(process.execPath), "..", "Update.exe");
  spawn(updateExe, args, { detached: true }).on("close", done);
};

export const handleSquirrelEvents = (app: App) => {
  const cmd = process.argv[1];
  const target = process.execPath;

  if (cmd === "--squirrel-install" || cmd === "--squirrel-updated") {
    runSquirrelUpdateExe(
      [`--createShortcut=${target}`, "--shortcut-locations=StartMenu,Desktop"],
      app.quit,
    );
    return true;
  }
  if (cmd === "--squirrel-uninstall") {
    runSquirrelUpdateExe([`--removeShortcut=${target}`], app.quit);
    return true;
  }
  if (cmd === "--squirrel-obsolete" || cmd === "--squirrel-firstrun") {
    app.quit();
    return true;
  }

  return false;
};