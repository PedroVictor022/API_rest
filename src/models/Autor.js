import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
   {
      id: {type: String},
      autor: {type: String, required: true},
      nacionalidade: {type: String}
   },
   {
      versionKey: false
   }
)

const autores = mongoose.model('autores', autorSchema);
export default autores;