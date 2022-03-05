const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.json({ 
        message: "Hellow world",
        nome: "Bastião",
        idade: 36
    })
});


app.listen(3333)
console.log("rodando ...");