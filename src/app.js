import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexao'))
db.once("open", () => {
   console.log('Conexao com banco de dados feita com sucesso!');
});

const app = express();
app.use(express.json()) 
routes(app)

// Rotemento
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