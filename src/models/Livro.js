import mongoose from "mongoose";


const livrosSchema = new mongoose.Schema(
   {
      id : {
         type: String
      },
      title: {
         type: String, 
         required: true
      },
      author: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'autores',
         required: true
      },
      editora: {
         type: String, 
         required: true
      },
      nPaginas: {
         type: Number
      }
   }
);

// A colecao no banco de dados, chama livros e segue o formato de livrosSchema
const livros = mongoose.model('livros', livrosSchema);
export default livros; 


// Alteração: inves de usar um tipo string no author, vamos usar a referencia de autor