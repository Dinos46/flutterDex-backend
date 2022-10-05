import {
  prop,
  modelOptions,
  getModelForClass,
  index,
} from "@typegoose/typegoose";

@index({ order: 1 }, { unique: true })
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Pokemon {
  @prop({ lowercase: true, index: true })
  public name: string;
  @prop({ index: true })
  public height: number;
  @prop({ type: () => String })
  public sprites: string[];
  @prop({ type: () => String, index: true })
  public types: string[];
  @prop()
  public weight: number;
  @prop()
  public order: number;
}

const PokemonModel = getModelForClass(Pokemon);

export default PokemonModel;
