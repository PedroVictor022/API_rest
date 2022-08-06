<h1>API REST NODEJS</h1>

<p align='star'>Este projeto consiste em uma Livraria, onde podemos cadastrar livros, listar, atualizar e deletar. Tambem podemos criar autores e vincular o mesmos com os livros criados.</p>

<h3> 🏁 Projeto Finalizado 🏁 </h3>

<h2>Topícos</h2>

* [Sobre](#Sobre)
* [Crud](#Crud)
* [Instalação](#Instalação)
* [Modo de uso](#Modo-de-uso)

* [Teconologias](#teconologias)

# Sobre
Este projeto foi iniciado com o objetivo de me aprofundar nas techs sobre backend.
## Features
[x] CRUD 
[x] Criar novos livros e autores.
[x] Listagem.
[x] Atualizar informações dos livros criados.
[x] Atualizar informações dos autores criados.
[x] Deletar livros e autores do banco de dados.


## Modo de uso
<h4> É importante que você tenha um conhecimento prévio sobre os métodos HTTP e NodeJS 🚧 </h4>
<p>Primeiro baixe o Insomnia ou um app de sua preferencia que consiga executar as funções.
Após configurar as rotas da API que se encontram na porta `http://localhost:8080`, configure as rotas, passando `/autores` ou `/livros`. Usando os métodos HTTP voce podera criar, listar, atualizar e deletar.</p>


## Criando Autores

No Insomnia, na rota de POST /autores, o parâmetro 'name' é obrigatório, já o segundo parâmetro é opcional.

      {
         "name" : "HP Lovecraft",
         "nacionalidade" ?: "estadunidense ",
      }

## Criando Livros
Na rota POST /livros, é recomendado que preencha todos os parâmetros

      {
         "title" : "Matrix",
         "author" : ID_do_author,
         "editora" : "The API REST",
         "nPaginas" : 0
      }

## Cadastrando autor e livro na API
1. Primeiro crie um autor na rota de POST /autores. Passe um nome e uma nacionalidade
2. Na rota de listagem, pegue o ID do autor criado.
3. Em livros, crie um livro com o title, no nome do author passe o ID que foi retornado da rota GET. Em editora coloque um nome qualquer
4. 

<!-- readgithub -->
