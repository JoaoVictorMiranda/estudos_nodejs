import express from 'express';
import { adicionarRotas } from './rotas.js';


const api = express();
api.use(express.json());

adicionarRotas(api);


api.listen(5010, () => console.log("Api subiu com sucesso na porta 5010"))

