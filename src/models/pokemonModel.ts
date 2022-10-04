import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

class Ability {
  @prop()
  public name: string;
  @prop()
  public url: string;
}

class Sprites {
  @prop()
  public back_default?: string;
  @prop()
  public back_shiny?: string;
  @prop({ required: true })
  public front_default: string;
  @prop()
  public front_shiny?: string;
}

class Type {
  @prop()
  publicslot: number;
  @prop()
  public type: Ability;
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Pokemon {
  @prop({ lowercase: true, required: true, unique: true })
  public name: string;
  @prop()
  public height: number;
  @prop()
  public species: Ability;
  @prop()
  public sprites: Sprites;
  @prop({ type: () => Type })
  public types: Type[];
  @prop()
  public weight: number;
}

const PokemonModel = getModelForClass(Pokemon);

export default PokemonModel;
