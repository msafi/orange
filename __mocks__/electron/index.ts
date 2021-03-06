import { app, resetApp } from "./app";
import { BrowserWindow, resetBrowserWindow } from "./BrowserWindow";
import { ipcMain, resetIpcMain } from "./ipcMain";
import { WebContents } from "./WebContents";
import { ipcRenderer, resetIpcRenderer } from "./ipcRenderer";

const globalShortcut = {
  register: () => null,
};

export {
  app,
  BrowserWindow,
  globalShortcut,
  WebContents,
  ipcMain,
  ipcRenderer,
};

export const resetStateOfElectronMock = () => {
  resetApp();
  resetIpcMain();
  resetIpcRenderer();
  resetBrowserWindow();
};
