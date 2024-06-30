const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const createWindow = () => {
    const mainWindow = new BrowserWindow({
        Width:800,
        Height:700,
        minWidth:800,
        minHeight:700,
        title:"������",
        icon:path.join(__dirname,'./MainFile/Image/ICON.ico'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile('./MainFile/index.html')
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {

        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
