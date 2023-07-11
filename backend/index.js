/**
* @api {get} /Cliente/:cli_pk_id Exibir informações do cliente
 * @apiName GetClientes
 * @apiGroup Clientes
 *
 * @apiParam {Integer_Primarykey_AutoIcrement} cli_pk_id identificação do cliente.
 * @apiSuccess {Date} cli_data_cadastro Data de cadastro do cliente.
 * @apiSuccess {String} cli_nome Nome do Cliente.
 * @apiSuccess {String} cli_cpf_cnpj CPF ou CNPJ do Cliente.
 * @apiSuccess {Date} cli_data_nasc_abertura Data de nascimento do cliente fisíco ou data de abertura do cliente juridíco.
 * @apiSuccess {String} cli_nome_social Nome Social do Cliente.
 * @apiSuccess {String} cli_rg_inscr_estad RG do cliente fisíco ou Incrição Estadual do cliente juridíco.
 * @apiSuccess {String} cli_email Email do Cliente.
 * @apiSuccess {String} cli_telefone Telefone do Cliente.
 * @apiSuccess {String} cli_telefone2 Telefone2 do Cliente.
 * @apiSuccess {String} cli_celular Celular do Cliente.
 * @apiSuccess {String} cli_cep CEP do Cliente.
 * @apiSuccess {String} cli_logradouro Logradouro do Cliente.
 * @apiSuccess {String} cli_numero Número do imovel do Cliente.
 * @apiSuccess {String} cli_cep CEP do Cliente.
 * @apiSuccess {String} cli_bairro Bairro do Cliente.
 * @apiSuccess {String} cli_cidade Cidade do Cliente.
 * @apiSuccess {String} cli_estado Estado do Cliente.
 * @apiSuccess {String} cli_pais País do Cliente.
 * @apiSuccess {String} cli_observacao Observação do Cliente.

 */
/**
 * @api {post} /Cliente Criar um novo cliente
 * @apiName PutClientes
 * @apiGroup Clientes
 */

/**
* @api {get} /usuarios/:usu_pk_id Exibir informações do usuário
 * @apiName GetUsuário
 * @apiGroup Usuários
 *
 * @apiParam {Integer_Primarykey_AutoIcrement} usu_pk_id identificação do Usuário.
 * @apiSuccess {String} usu_nome Nome do Usuário.
 * @apiSuccess {String} usu_senha Senha de acesso do Usuário.
 * @apiSuccess {String} usu_email Email do Usuário.
 * @apiSuccess {String} usu_grupo Grupo do Usuário.
 * @apiSuccess {String} usu_ativo Status do Usuário.
 */
/**
 * @api {post} /usuarios Criar um novo usuário
 * @apiName PutUsuário
 * @apiGroup Usuários
 */
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

app.get("/usuarios/:usu_pk_id", (req, res) => {

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

