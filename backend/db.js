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
  cli_data_cadastro: {
    type: Sequelize.DATE
  },
  cli_data_cadastro: {
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
  cli_email: {
    type: Sequelize.STRING},
  cli_rg_inscr_estad:{
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