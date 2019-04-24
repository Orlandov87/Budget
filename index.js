const electron = require('electron')

const { app, BrowserWindow } = require('electron')

// Keep a global reference of the windows objet, if you don't, the window will
// be closed automatically whne the JavaScript object is garbage collected.
let win

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({ width: 1200, height: 800, titleBarStyle: 'hidden'})
  win.setMenu(null)

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference teh window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete thte corresponding element.
    win = null
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their emnu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// On macOs it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activitate', () => {
  if (win === null) {
    createWindow()
  }
})
