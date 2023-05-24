import { Server } from './server/server'

class Launcher {

    //instance variables
    private name: string;
    private server: Server;

    constructor() {
        this.server = new Server();
    }

    public launchApp() {
        console.log('started app');
        this.server.createServer();
        // (this.server as any).somePrivateLogic(); // for get private method
    }
}

new Launcher().launchApp();