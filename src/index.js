const express = require("express");
const { v4 : uuid4 } = require("uuid");
const app = express();
app.use(express.json());

/**
 *  cpf - string
 *  name - string
 *  id - uuid
 *  statament []
 */

const customers = [];

app.post("/account", (req, res) => {
    const { cpf, name } = req.body;
    const id = uuid4();
    
    customers.push({
        cpf,
        name,
        id,
        statement: []
    });

    return res.status(201).send();
});

app.listen(3333)
console.log("rodando ...");