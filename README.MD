# API REST
--- Anotacoes ---
* Conceito de recurso, cada recurso tem uma URI
* /livros /autores /editoras
* Comunicacao stateless ( nao guarda estado )

## CRUD
-> Buscar livros, buscar livro especifico, criar novo livro, editar informacao de livros, excluir um livro
-> Funcao de buscar livros
-> Busca por ID
-> Update livros
-> Delete livros
   # Criando Autores
      -> CRUD de autores: {
         nome: requerido,
         nacionalidade: nao requerido,
         versionKey: false
      }

## Mongoose
* Iniciando com mongoose
   -> Conectando com banco de dados
   -> Criando Schema para coleções no Banco de Dados
   -> Fazer conexão do Banco de Dados com a API

## Controller 
* São intermediarios entre views e banco de dados

## Cadastrando autor e livro na API
1. Primeiro crie um autor na rota de POST /autores. Passe um nome e uma nacionalidade
2. Na rota de listagem, pegue o ID do autor criado.
3. Em livros, crie um livro com o title, no nome do author passe o ID que foi retornado da rota GET. Em editora coloque um nome qualquer
4. 