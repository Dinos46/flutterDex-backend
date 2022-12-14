import {
  prop,
  getModelForClass,
  modelOptions,
  pre,
  DocumentType,
  Ref,
  index,
} from "@typegoose/typegoose";
import mongoose from "mongoose";
import argon2 from "argon2";
import logger from "../services/loggerService";
import { Pokemon } from "./pokemonModel";

enum ERoles {
  USER = "user",
  ADMIN = "admin",
}

@index({ email: 1 })
@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const hash = await argon2.hash(this.password);
  this.password = hash;
  return;
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop({ lowercase: true, required: true, unique: true })
  public email: string;

  @prop({ enum: ERoles, default: ERoles.USER })
  public role: ERoles;

  @prop({ lowercase: true, required: true, unique: true })
  public username: string;

  @prop({ required: true })
  public password: string;

  // @prop({ required: true })
  // public accessToken: string;

  // @prop({ required: true })
  // public refreshToken: string;

  @prop({ ref: () => Pokemon, type: mongoose.Types.ObjectId })
  public pokemon?: Ref<Pokemon>[];

  public async validatePassword(this: DocumentType<User>, inputPass: string) {
    try {
      return await argon2.verify(this.password, inputPass);
    } catch (err) {
      logger.error("could not validate password", err);
      return false;
    }
  }
}

const UserModel = getModelForClass(User);

export default UserModel;
