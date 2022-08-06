import { Schema, model } from "mongoose";

const autorSchema = new Schema(
   {
      id: {type: String},
      nome: {type: String, required},
      nacionalidade: {type: String}
   },
   {
      versionKey: false
   }
)

const autores = model("autores", autorSchema);

export default autores;