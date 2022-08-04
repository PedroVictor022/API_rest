import express from "express";
const app = express();
app.use(express.json()) // Interpreta dados que chegam via POST 
const books = [
   {id: 1, 'title': 'Senhor dos Aneis'}, 
   {id: 2, 'title': 'O Hobiit'}
]

// Rotemento
app.get('/', (req, res) => {
   res.status(200).send('Curso de NodeJS');
});
app.get('/livros', (req, res) => {
   // Convertendo em formato legivel
   res.status(200).json(books);
});

app.get('/livros/:id', (req, res) => {
   let index = buscaLivros(req.params.id);
   res.status(200).json(books[index])
})

// Adicionando livros no array
app.post('/livros', (req, res) => {
   books.push(req.body)
   res.status(201).send('Livro cadastrado com sucesso!')  
});

app.put('/livros/:id', (req, res) => {
   let index = buscaLivros(req.params.id);
   books[index].title = req.body.title;
   res.status(200).json(books)
})

app.delete('/livros/:id', (req, res) => {
   let {id} = req.params;
   let index = buscaLivros(id);
   books.splice(index, 1);
   res.send(`O livro ${id} foi apagado com sucesso`)
})

function buscaLivros(id) {
   return books.findIndex(livro => livro.id == id);
};

export default app;