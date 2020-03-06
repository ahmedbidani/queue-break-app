import path from "path";
import chalk from "chalk";
import fs from "fs";

/**
 * Check the main build file and renderer build file already exist or not
 */

function CheckBuildExist() {
    const mainPath = path.join(__dirname, '..', '..', 'main.prod.js');
    const rendererPath = path.join(__dirname, '..', '..', 'app', 'dist', 'renderer.prod.js');
    if(!fs.existsSync(mainPath)) {
        throw new Error (
            chalk.whiteBright.bgRed.bold(
                'The main process is not built yet. Build it by running "yarn build-main"'
            )
        );
    }

    if(!fs.existsSync(rendererPath)) {
        throw new Error(
            chalk.whiteBright.bgRed.bold(
                'The renderer process is not built yet. Build it by running "yarn build-renderer"'
            )
        )
    }
}

CheckBuildExist();