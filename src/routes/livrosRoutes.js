import express from "express";
import LivroController from "../controller/livrosController.js";

const router = express.Router();

router
   // Da mais especifica para a menos especifica
   .get("/livros", LivroController.listarLivros)
   .get("/livros/busca", LivroController.listarLivrosPorEditora)
   .get("/livros/:id", LivroController.listarLivrosPorId)
   .post("/livros", LivroController.cadastrarLivro)
   .put("/livros/:id", LivroController.atualizarLivro)
   .delete("/livros/:id", LivroController.deletarLivro)
   
export default router;