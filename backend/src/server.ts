import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';
import routes from './routes'
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

//Rota = conjunto
//Recurso = usuário
//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros

//GET = Buscar uma informação (Lista, item)
//POST = Criando uma informação
//PUT = Editando uma informação
//DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=jorge&page=2
// Route Params: http://localhost:3333/1 (Identificar um recurso)
// Body: http://localhost:3333/1 (Identificar um recurso)

app.listen(3333);

//REQ / RES
//localhost:3333

