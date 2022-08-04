import mongoose from "mongoose";

mongoose.connect('mongodb+srv://pedrovictor:pedro2002@projetoagenda1.yym1s.mongodb.net/alura-node');

let db = mongoose.connection;

export default db;