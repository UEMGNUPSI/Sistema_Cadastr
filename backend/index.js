const express = require("express");
const app = express();

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const db = require("./db");
const { where } = require("sequelize");

app.get("/", (req, res) => {
    res.json({ message: 'Conectado na Base de Dados' });
});

app.get("/Cliente", async (req, res) => {
    res.json(await db.Cliente.findAll());
})

app.post("/Cliente", async (req, res) => {
    try {
        const {cli_data_cadastro, cli_nome, cli_cpf_cnpj, cli_data_nasc_abertura, cli_nome_social, cli_email, cli_rg_inscr_estad, cli_telefone, cli_telefone2, cli_celular, cli_cep, cli_logradouro, cli_numero, cli_complemento, cli_bairro, cli_cidade, cli_estado, cli_pais, cli_observacao} = req.body;

        const novo_cliente = await db.Cliente.create ({cli_data_cadastro, cli_nome, cli_cpf_cnpj, cli_data_nasc_abertura, cli_nome_social, cli_email, cli_rg_inscr_estad, cli_telefone, cli_telefone2, cli_celular, cli_cep, cli_logradouro, cli_numero, cli_complemento, cli_bairro, cli_cidade, cli_estado, cli_pais, cli_observacao});
       
        res.status (201).json (novo_cliente);
    } catch (error) {
        res.status (500).json ({ error: 'Não foi possível criar um novo cliente.'});
    }
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

