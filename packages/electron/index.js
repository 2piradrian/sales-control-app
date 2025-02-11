const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let mainWindow;
let serverProcess;

app.whenReady().then(() => {
  //// Iniciar el backend de Express
  //serverProcess = spawn("node", [path.join(__dirname, "../backend/index.js")], {
  //  stdio: "ignore",
  //  detached: true
  //});
  //serverProcess.unref();

  // Crear la ventana de Electron
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

 // Cargar la app React
 mainWindow.loadURL("http://localhost:5173");

 mainWindow.on("closed", () => {
   mainWindow = null;
 });
});

//// Cierra el backend cuando se cierre Electron
//app.on("window-all-closed", () => {
//  if (serverProcess) serverProcess.kill();
//  if (process.platform !== "darwin") app.quit();
//});
