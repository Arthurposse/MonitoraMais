// Importando dependência
const app = require("./app"); 

// Inicia teste de conexão com servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});