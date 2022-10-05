import config from "config";
import express from "express";
import { connecrDb } from "./services/dbService";
import logger from "./services/loggerService";
import cors from "cors";
import router from "./routes";

const port = config.get("port");
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  logger.info(`server is listening on http://localhost:${port}`);
  connecrDb();
});
