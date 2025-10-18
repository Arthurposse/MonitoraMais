// Importação das bibliotecas utilizadas no projeto
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Importação dos arquivos das rotas do projeto
const routerLogin = require("./routes/LoginRouter");

const app = express();

dotenv.config();

app.set("port", process.env.PORT || 3010);
app.use(cors());
app.use(express.json());

// Rotas da API
app.use("/api", routerLogin);

module.exports = app;