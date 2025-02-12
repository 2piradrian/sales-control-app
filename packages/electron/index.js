const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let window;
let serverProcess;

app.whenReady().then(() => {
  //// Iniciar el backend de Express
  //serverProcess = spawn("node", [path.join(__dirname, "../backend/index.js")], {
  //  stdio: "ignore",
  //  detached: true
  //});
  //serverProcess.unref();

  Menu.setApplicationMenu(null);

  // Crear la ventana de Electron
  window = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

 // Cargar la app React
 window.loadURL("http://localhost:5173");

 window.on("closed", () => {
   window = null;
 });

});

//// Cierra el backend cuando se cierre Electron
//app.on("window-all-closed", () => {
//  if (serverProcess) serverProcess.kill();
//  if (process.platform !== "darwin") app.quit();
//});
