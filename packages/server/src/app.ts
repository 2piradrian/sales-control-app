import { env } from "./config";
import { PostgreDatabase } from "./data/postgresql/database";
import { AppRouter, Server } from "./presentation";

(async () => {
    main();
})();

async function main() {

    const postgres = new PostgreDatabase(env.POSTGRES_DB, env.POSTGRES_USER, env.POSTGRES_PASSWORD);
    await postgres.connect();

    const server = new Server({
        port: env.PORT,
        routes: AppRouter.routes
    });

    server.start();
}