const config = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "root",
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
  }
});

db.usuarios = sequelize.define("Usuario", {
  usu_pk_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usu_nome: {
    type: Sequelize.STRING,
  },
  usu_senha: {
    type: Sequelize.STRING,
  },
  usu_email: {
    type: Sequelize.STRING,
  },
  usu_grupo: {
    type: Sequelize.INTEGER,
  },
  usu_ativo: {
    type: Sequelize.INTEGER,
  }
});

module.exports = db;