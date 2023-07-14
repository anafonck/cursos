const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
const port = 8000;

const db = require('./db/connection');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const notesRoutes = require('./routes/notes');

app.get('/', async (req, res) => {
    const notes = await db.getDb().db().collection('notes').find({}).toArray();
    res.render('home', { notes })
});

app.use('/notes', notesRoutes)

db.initDb((err, db) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Banco conectado com sucesso!")
        app.listen(port, () => {
            console.log(`Projeto rodando na porta ${port}`)
        });
    }
})

