import mongoose from "mongoose";
import config from "config";
import logger from "./loggerService";

export const connecrDb = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("db connected successfully");
  } catch (err) {
    logger.error("cannot connect to DB", err);
    process.exit(1);
  }
};
