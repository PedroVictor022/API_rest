import express from "express";
const app = express();

const books = [
   {id: 1, 'title': 'Senhor dos Aneis'}, 
   {id: 2, 'title': 'O Hobiit'}
]

// Rotemento
app.get('/', (req, res) => {
   res.status(200).send('Curso de NodeJS');
})
app.get('/livros', (req, res) => {
   // Convertendo em formato legivel
   res.status(200).json(books);
})

export default app;