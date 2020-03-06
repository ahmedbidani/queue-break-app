import { app, BrowserWindow } from "electron"

let mainWindow = null

/**
 * Create the main window with the specific options in main process
 */
const createWindow = () => {

    const options = {
        width: 900,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        },
        center: true,
        resizable: false,
        maximizable: false,
        frame: false
    }

    mainWindow = new BrowserWindow(options)

    // Front controller (Starting point view)
    mainWindow.loadURL(`file://${__dirname}/app.html`)

    /**
     * Listen to main window be ready to show
     */
    mainWindow.on('ready-to-show', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined')
        }
        if (process.env)
            mainWindow.show()
        mainWindow.focus()
    })

    /**
     * Listen to main window to be closed and set it to null
     */
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

/**
 * Check if we are in developement mode then activate the electron developer tools
 */
if (
    process.env.NODE_ENV == 'development' ||
    process.env.DEBUG_PROD === 'true'
) {
    require('electron-debug')()
}

/**
 * Listen to the applicatin to be ready
 */
app.on('ready', async () => {
    createWindow()
})

/**
 * Listen to all window to be closed
 */
app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even after all windows have been closed
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (mainWindow === null) createWindow()
})