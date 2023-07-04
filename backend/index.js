const express = require("express");
const app = express();

const db = require("./db");
const { where } = require("sequelize");

app.get("/", (req, res) => {
    res.json({ message: 'Conectado na Base de Dados' });
});

app.get("/clientes", async (req, res) => {
    res.json(await db.clientes.findAll());
})

app.get("/usuarios", async (req, res) => {
    res.json(await db.usuarios.findAll());
})

app.get("/usuarios/:id", (req, res) => {

    const userId = req.params.id;

    res.json(db.usuarios.findOne({ where:
        {
            usu_pk_id: userId
        }
    }));
})

app.post("/usuarios", (req, res) => {
    const {id,nome,senha,email,grupo,ativo} = req.query;

    console.log("Criando Usuário", nome, senha, email, grupo, ativo);

    db.usuarios
    .create(
        {
            usu_pk_id: id,
            usu_nome: nome,
            usu_senha: senha,
            usu_email: email,
            usu_grupo: grupo,
            usu_ativo: ativo
        }).then((usuarios) => {
            res.status(201).json(usuarios.toJSON());
        })
});

app.listen(8080, () => {
    console.log('Executando => http://localhost:8080/');
});

