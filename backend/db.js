/**
 * @api {get} /user/:cli_pk_id Request User information
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
const config = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "ROOT",
    DB: "SG",
    dialect: "postgres",
    define: {
      freezeTableName: true,
      timestamps: false
    },
};
  
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    define: config.define
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.clientes = sequelize.define("Cliente", {
  cli_pk_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  
  cli_data_cadastro:{
    type: Sequelize.DATE
  },
  cli_nome: {
    type: Sequelize.STRING
  },
  cli_cpf_cnpj: {
    type: Sequelize.STRING
  },
  cli_data_nasc_abertura: {
    type: Sequelize.DATE
  },
  cli_nome_social: {
    type: Sequelize.STRING
  }, 
  cli_rg_inscr_estad:{
    type: Sequelize.STRING},
  cli_email: {
    type: Sequelize.STRING},
  cli_telefone:{
    type: Sequelize.STRING},
  cli_telefone2:{
    type: Sequelize.STRING},
  cli_celular:{
    type: Sequelize.STRING},
  cli_cep:{
    type: Sequelize.INTEGER},   
  cli_logradouro:{
    type: Sequelize.STRING},
  cli_numero:{
    type: Sequelize.STRING},
  cli_complemento:{
    type: Sequelize.STRING},
  cli_bairro:{
    type: Sequelize.STRING},   
  cli_cidade:{
    type: Sequelize.STRING},   
  cli_estado:{
    type: Sequelize.STRING},   
  cli_pais:{
    type: Sequelize.STRING}, 
  cli_observacao:{
    type: Sequelize.STRING}
  
});


module.exports = db;