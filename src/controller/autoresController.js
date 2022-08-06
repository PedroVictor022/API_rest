import autores from "../models/Autor.js";

class AutoresController {

   static listarAutores = (req, res) => {
      autores.find((err, autores) => {
         // * Listagem
         res.status(200).json(autores);
      })
   }

   static listarAutorPorId = (req, res) => {
      const { id } = req.params
      autores.findById(id, (err, autores) => {
         if(err) {
            res.status(500).send({
               message: `${err} - Autor nao encontrado`
            })
         } else {
            res.status(200).send(autores);
         }
      })
   }

   static cadastrarAutor = (req, res) => {
      const autor = new autores(req.body);
      autor.save((err) => {
         if(err) {
            res.status(500).send({
               message: `${err} - Nao foi possivel cadastrar o autor!`
            })
         } else { 
            res.status(200).send(autor.toJSON())
         }
      })
   }

   static atualizarAutor = (req, res) => {
      const { id } = req.params;
      autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
         if(err) {
            res.status(500).send({
               message: `${err} - Falha ao atualizar autor`
            })
         } else {
            res.status(200).send({
               message: 'Autor atualizado com sucesso'
            })
         }
      })
   }

   static deletarAutor = (req, res) => {
      const { id } = req.params;

      autores.findByIdAndDelete(id, (err) => {
         if(err) {
            res.status(501).send({
               message: `${err} - Falha ao apagar autor`
            })
         } else {
            res.status(200).send({
               message: "Autor apagado com sucesso"
            })
         }
      }) 
   }
}

export default AutoresController;