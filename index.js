import db from './models';
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello world'))

db.sequelize.sync().then(()=>{
    app.listen(port, () => {
        console.log('Express server started')
    })
});

