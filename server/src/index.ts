import App from "./app";
import env from "./app/config/env";

const PORT = env.PORT;

new App().server.listen(PORT);
