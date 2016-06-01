'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

const options = {
  width: 330,
  height: 100,
  frame: false,
  resizable: false,
};

app.on('ready', function () {
  mainWindow = new BrowserWindow(options);
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
app.on('window-all-closed', function () {
  app.quit();
});
