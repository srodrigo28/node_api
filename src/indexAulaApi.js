const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.json({ 
        message: "Hellow world",
        nome: "Bastião",
        idade: 36
    })
});

app.post("/curso", (req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
})

app.post("/curso", (req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3"]);
})

app.put("/curso/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 5", "Curso 3"]);
})

app.patch("/curso/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 5", "Curso 3"]);
})

app.delete("/curso/:id", (req, res) => {
    return res.json(["Curso 6", "Curso 2", "Curso 2"]);
})

app.listen(3333)
console.log("rodando ...");