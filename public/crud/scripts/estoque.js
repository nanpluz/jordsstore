let corAtual = "";

function switchEstoque() {
    if (corAtual == "") {
        document.getElementById("estoque-btn").style.backgroundColor = "#08D9D6";
        corAtual = "#08D9D6";
        form.estoque = true;
    } else {
        if (corAtual == "#08D9D6") {
            document.getElementById("estoque-btn").style.backgroundColor = "#FF2E63";
            corAtual = "#FF2E63";
            form.estoque = false;
        } else {
            document.getElementById("estoque-btn").style.backgroundColor = "#08D9D6";
            corAtual = "#08D9D6";
            form.estoque = true;
        }
    }
}