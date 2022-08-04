import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'Erro de conexao'))
db.once("open", () => {
   console.log('Conexao com banco de dados feita com sucesso!');
})

const app = express();
app.use(express.json()) // Interpreta dados que chegam via POST 

// const livros = [
//    {id: 1, 'title': 'Senhor dos Aneis'}, 
//    {id: 2, 'title': 'O Hobiit'}
// ]

// Rotemento
app.get('/', (req, res) => {
   res.status(200).send('Curso de NodeJS');
});
app.get('/livros', (req, res) => {
   // Convertendo em formato legivel
   livros.find((err, livros) => {
      res.status(200).json(livros);
   })
});

app.get('/livros/:id', (req, res) => {
   let index = buscaLivros(req.params.id);
   res.status(200).json(livros[index])
})

// Adicionando livros no array
app.post('/livros', (req, res) => {
   livros.push(req.body)
   res.status(201).send('Livro cadastrado com sucesso!')  
});

app.put('/livros/:id', (req, res) => {
   let index = buscaLivros(req.params.id);
   livros[index].title = req.body.title;
   res.status(200).json(livros)
})

app.delete('/livros/:id', (req, res) => {
   let {id} = req.params;
   let index = buscaLivros(id);
   livros.splice(index, 1);
   res.send(`O livro ${id} foi apagado com sucesso`)
})

function buscaLivros(id) {
   return livros.findIndex(livro => livro.id == id);
};

export default app;