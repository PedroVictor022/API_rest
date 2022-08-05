import livros from "../models/Livro.js";

class LivrosController {
   static listarLivros = (req, res) => {
      livros.find((err, livros) => {
         res.status(200).json(livros);
      })
   }

   static cadastrarLivro = (req, res) => {
      let livro = new livros(req.body); // Criando livro

      livro.save((err) => {
         if(err) {
            res.status(500).send({message: `${err} - Falha ao cadastrar novo livro.`})
         } else {
            res.status(201).send(livro.toJSON()) // Converte em JSON e manda para o usuario
         }
      }) // Persiste no banco
   }
}

export default LivrosController;