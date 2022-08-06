import autores from "../models/Autor";

class autorController {

   static listarAutores = (req, res) => {
      autores.find((err, autores) => {
         res.status(200).json(autores);
      })
   }

   static cadastrarAutor = (req, res) => {
      let autor = new autores(req.body)
      autor.save((err)=>{
         if(err) {
            res.status(200).send({
               message: `${err} - Falha ao cadastrar autor`
            })
         } else {
            res.status(200).send(autor.toJSON())
            // Converte para o usuario
         }
      })
   }

   static listarAutorPorId = (req, res) => {
      const { id } = req.params;
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

   static atualizarAutor = (req, res) => {
      const { id } = req.params;
      autores.findByIdAndUpdate(id, { $set: req.body}, (err) =>{
         if(err) {
            res.status(500).send({
               message: `${err} - Nao foi possivel atualizar o autor` 
            }) 
         } else {
            res.status(200).send({
               message: "Autor atualizado com sucesso"
            })
         }
      })
   }

   static deletaraAutor = (req, res) => {
      const { id } = req.params; 
      autores.findByIdAndDelete(id, (err, autores) => {
         if(err) {
            res.status(500).send({
               message: `${err} - Nao foi possivel apagar o autor`
            })
         } else {
            res.status(200).send({
               message: 'Autor apagado com sucesso'
            })
         }
      })
   }
}

export default autorController;