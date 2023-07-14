//Connect MongoDb

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('conectado')
})

//Create Schema

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

//Create Models

const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const ana = new Pessoa({
    nome: "Ana",
    idade: 28,
    profissao: "estudante"
});

const alice = new Pessoa({
    nome: "Alice",
    idade: 23,
    profissao: "diplomica"
});

//Save Data
// ana.save()
// alice.save()

//Find Data
// Pessoa.findOne({ nome: "Alice" })
//     .then((pessoa) => { console.log(pessoa) })
//     .catch((err) => { console.log(err) })

//InsertMany Data and getting it
/*Pessoa.insertMany([
    { nome: "Jorge", idade: 26, profissao: "chef" },
    { nome: "Pai", idade: 60, profissao: "funileiro" },
    { nome: "Mãe", idade: 49, profissao: "mãe" }
])*/

// async function getPessoa() {
//     const pessoas = await Pessoa.find({ nome: "Pai" }).exec()
//     console.log(pessoas)
// }

// getPessoa()

//Deleting Data

async function getPessoa(nome) {
    const pessoa = await Pessoa.find({ nome: nome }).exec();
    if (pessoa.length === 0) {
        console.log('Não encontrado')
    } else {
        console.log(pessoa);
    }
}

// getPessoa('Jorge')

// Pessoa.deleteOne({ nome: "Jorge" }).exec()

// getPessoa('Mãe')

//Update Data

// Pessoa.updateOne({ nome: "Ana" }, { profissao: "Programadora" }).exec();

// getPessoa('Ana');

//Using Where
async function getPessoaNomeIdade(nome, idade) {
    const pessoa = await Pessoa
        .where('idade').gte(idade)
        .where('nome', nome)

    if (pessoa.length === 0) {
        console.log('Não encontrado')
    } else {
        console.log(pessoa)
    }
}

getPessoaNomeIdade('Alice', 23)