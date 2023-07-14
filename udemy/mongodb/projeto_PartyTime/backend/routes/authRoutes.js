const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//registrar usuario no sistema

router.post('/register', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmpassword;

    //required
    if (name == null || email == null || password == null || confirmPassword == null) {
        return res.status(400).json({ error: 'Por favor, preencha todos os campos.' })
    }

    //verificar match das senhas
    if (password != confirmPassword) {
        return res.status(400).json({ error: 'As senhas não conferem.' })
    }

    //usuario existe?
    const emailExists = await User.findOne({ email: req.body.email })

    if (emailExists) {
        return res.status(400).json({ error: 'O e-mail informado já está em uso.' })
    }

    //criar senha
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
        name: name,
        email: email,
        password: passwordHash
    })

    try {
        const newUser = await user.save();

        //criar token
        const token = jwt.sign(
            //payload
            {
                name: newUser.name,
                id: newUser._id
            },
            "nossosecret"
        )
        //retornar token
        return res.json({ error: null, msg: "Você realizou o cadastro com sucesso.", token: token, userId: newUser._id })
    } catch (error) {
        return res.status(400).json({ error: `${error}` })
    }
});

//login
router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //verificar se o usuario existe
    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(400).json({ error: 'O e-mail informado não está cadastrado.' })
    }

    //verificar se a senha está correta
    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.status(400).json({ error: 'Senha inválida' })
    }

    const token = jwt.sign(
        //payload
        {
            name: user.name,
            id: user._id
        },
        "nossosecret"
    )

    return res.json({ error: null, msg: "Você está autenticado.", token: token, userId: user._id })
});

module.exports = router;