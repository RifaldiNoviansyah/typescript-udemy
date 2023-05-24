"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var Launcher = /** @class */ (function () {
    function Launcher() {
        this.server = new server_1.Server();
    }
    Launcher.prototype.launchApp = function () {
        console.log('started app');
        this.server.createServer();
        this.server.somePrivateLogic(); // for get private method
    };
    return Launcher;
}());
new Launcher().launchApp();
