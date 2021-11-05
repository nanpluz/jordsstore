let form = {
    images: [],
    cor: "",
    liga: "",
    time: "",
    nome: "",
    estoque: false,
};

function sendForm() {
    form.cor = document.getElementById("cor").value;
    form.liga = document.getElementById("liga").value;
    form.time = document.getElementById("time").value;
    form.nome = document.getElementById("nome").value;

    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(form),
    }
    fetch("../adicionar", options)
        .then(readableStream => { return readableStream.json() })
        .then(camisa => {
            console.log(camisa);
            resetValues();
            showImages();
        });
}

function resetValues() {
    document.getElementById("estoque-btn").style.backgroundColor = "#FF2E63";
    corAtual = "#FF2E63";
    form.estoque = false;
    form.images = [];
    document.getElementById("cor").value = "";
    document.getElementById("liga").value = "";
    document.getElementById("time").value = "";
    document.getElementById("nome").value = "";
}