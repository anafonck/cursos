//modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
const authRouter = require('./routes/authRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const partyRouter = require('./routes/partyRoutes.js');

//middlewares

//config
const dbName = 'partytime';
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/party', partyRouter);

//conexao mongodb
mongoose.connect(
    `mongodb://127.0.0.1:27017/${dbName}`
);


app.get('/', (req, res) => {
    res.json({ mensagem: 'rota teste' })
})

app.listen(port, () => {
    console.log(`O backend está rodando na porta ${port}`)
})