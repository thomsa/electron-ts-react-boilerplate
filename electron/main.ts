import { DependencyInjector } from "dependency-injector";
import { app, BrowserWindow } from "electron";
import { Config } from "config";

class Main {
    mainWindow;
    constructor() {
        const dependencyInjector = new DependencyInjector();
        const config = dependencyInjector.Container.get(Config);
        dependencyInjector.init(config);

        app.on("ready", () => {
            this.mainWindow = new BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    nodeIntegration: true
                }
            });

            if (config.ENVIRONMENT === "dev") {
                this.mainWindow.loadURL("http://localhost:3000");
                this.mainWindow.webContents.openDevTools({
                    mode: "undocked"
                });
            } else {
                this.mainWindow.loadFile(`../../renderer/index.html`);
            }

            this.mainWindow.on("closed", () => {
                this.mainWindow = null;
            });
        });

        app.on("window-all-closed", () => {
            if (process.platform !== "darwin") {
                app.quit();
            }
        });
    }
}

new Main();
