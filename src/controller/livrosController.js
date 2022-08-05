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
         if (err) {
            res.status(500).send({ message: `${err} - Falha ao cadastrar novo livro.` })
         } else {
            res.status(201).send(livro.toJSON()) // Converte em JSON e manda para o usuario
         }
      }) // Persiste no banco
   }

   static listarLivrosPorId = (req, res) => {
      const { id } = req.params;
      livros.findById(id, (err, livros) => {
         if (err) {
            res.status(400).send({ message: `${err} - Livro nao encontrado` })
         } else {
            res.status(200).send(livros);
         }
      })
   }

   static atualizarLivro = (req, res) => {
      const { id } = req.params;
      livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
         if (!err) {
            res.status(200).send({ message: 'Livro atualizado com sucesso!' })
         } else {
            res.status(500).send({ message: `${err} - Nao foi possivel atualizar o livro!` })
         }
      })
   }

   static deletarLivro = (req, res) => {
      const { id } = req.params;
      livros.findByIdAndDelete(id, (err) => {
         if (!err) {
            res.status(200).send({ message: "Livro removido com sucesso" })
         } else {
            res.status(500).send({ message: err.message })
         }
      })
   }
}

export default LivrosController;