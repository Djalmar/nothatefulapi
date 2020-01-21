const express = require('express');
const app = express();
const port = 4000;

import {Ejemplo} from './ejemploService';

app.get('/', (req, res) => res.send('Hello world'))

app.listen(port, () => {
    let a = new Ejemplo();
    a.imprimir();
    
    console.log('Express server started')
})