import express, { Router } from 'express';

interface Options {
    port: number;
    routes: Router;
}

export class Server {
    private app = express();

    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        this.port = options.port;
        this.routes = options.routes;
    }

    public start(): void {

        /* Middlewares */
        this.app.use(express.json({ limit: '5mb' }));

        /* Routes */
        this.app.use(this.routes);

        /* Server */
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${ this.port }`);
        });
        
    }

}