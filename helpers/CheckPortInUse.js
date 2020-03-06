import chalk from "chalk";
import detectPort from "detect-port";

/**
 * Check if the port passing throught the command line is available or not
 */
(function CheckPortInUse() {
    const port = process.env.PORT || '1212';

    detectPort(port, (error, availablePort) => {
        if(port !== String(availablePort)) {
            throw new Error(chalk.whiteBright.bgRed.bold(
                `Port "${port}" on "localhost" is already in use. Please use another port. ex: PORT=4343 yarn dev`
            ))
        }else {
            process.exit(0);
        }
    });
})();