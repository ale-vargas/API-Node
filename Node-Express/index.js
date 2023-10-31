require("dotenv").config(); // Gestão das configurações do projeto

const db = require("./db");

const express = require("express"); // Framework web para a construção da infraestrutura da API

//Necessário instalar o CORS: npm install cors --save
const cors = require("cors"); // Necessário para permitir o acesso da URL

const app = express();

app.use(express.json());

//App deve fazer uso do CORS
app.use(cors());

// delete
app.delete("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    db.deleteCliente(id);
    response.sendStatus(204);
})

// insert
app.post("/clientes", (request,response) => {
    const cliente = request.body;
    db.insertCliente(cliente);
    response.sendStatus(201);
})

// update
app.patch("/clientes/:id", (request,response) => {
    const id = parseInt(request.params.id);
    const cliente = request.body;
    db.updateCliente(id, cliente);
    response.sendStatus(200);
})


app.get("/clientes", (request, response) => {
    //Os cabeçalhos abaixo devem ser setados
    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Max-Age", "1800");
    response.setHeader("Access-Control-Allow-Headers", "content-type");
    response.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    response.json(db.selectClientes());
})

app.get("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    response.json(db.selectCliente(id));
})

app.get("/", (request, response, next) => {
    response.json({
        message: "Estou vivo!"
    })
})


app.listen(process.env.PORT, () =>{
    console.log("App está executando");
});