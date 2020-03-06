import chalk from "chalk";

/**
 * Check the given node environment string
 * @param {string} expectedEnv 
 */
export default function CheckNodeEnv(expectedEnv) {
    if(!expectedEnv) {
        throw new Error('Set the expectedEnv');
    }

    if(process.env.NODE_ENV !== expectedEnv) {
        console.log(
            chalk.whiteBright.bgRed.bold(
                `"process.env.Node_ENV" must be "${expectedEnv}" to use this webpack config`
            )
        );
        process.exit(2);
    }
}