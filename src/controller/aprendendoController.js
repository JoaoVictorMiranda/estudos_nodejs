import * as repo from '../repositories/aprendendoRepository.js'

import { Router } from 'express';

const endpoints = Router();

endpoints.get('/dobros', (req, res) => {
        let numeros = req.body;

        let dobros = repo.dobros(numeros);

        res.send(dobros)

})




export default endpoints;

