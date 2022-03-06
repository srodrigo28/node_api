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

    const nomeAlreadyExists = customers.some( // some returno bool
        (curstomer) => curstomer.name === name
    );
    const cpfAlreadyExists = customers.some(
        (curstomer) => curstomer.cpf === cpf
    );
    // if(nomeAlreadyExists){
    //     return res.status(400).json(
    //         { error: "Custome already exists by name", tradu: "Já existe esse nome" }
    //     )
    // }
    if(cpfAlreadyExists){
        return res.status(400).json(
            { error: "Customer already exists by cpf!", tradu: "Já existe esse cpf!" }
        );
    }
    
    customers.push({
        cpf, name, id : uuid4(),
        statement: []
    });
    
        return res.status(201).send();
    });

    app.get("/account/:cpf", (req, res) => {
        const { cpf } = req.params;

        const customer = customers.find((customer) => customer.cpf === cpf );

        if(!customer){
            return res.status(400).json({ error: "Customer not found"});
        }
        return res.json(customer.statement);
    });

app.listen(3333)
console.log("rodando ...");