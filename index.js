const port = 80;
const path = require('path');
const express = require('express');
const app = express();

app.use("/", express.static(path.join(__dirname, "public/home")));
app.use("/store", express.static(path.join(__dirname, "public/store")));
app.use("/crud", express.static(path.join(__dirname, "public/crud")));

app.post("/adicionar", express.json(), (req, res) => {
    let camisa = req.body;
    console.log(camisa);
    res.send(camisa);
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
})