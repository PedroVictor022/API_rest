import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema(
   {
      id : {type: String},
      title: {type: String, required: true},
      author: {type: String, required: true},
      editora: {type: String, required: true},
      nPaginas: {type: Number}
   }
);

// A colecao no banco de dados, chama livros e segue o formato de livrosSchema
const livros = mongoose.model('livros', livrosSchema);
export default livros; 