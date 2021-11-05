function acessarLoja() {
    console.log("funcionou");
    btn = document.getElementsByClassName("btn")[0];
    btn_shadow = document.getElementsByClassName("btn_shadow")[0];
    btn_content = document.getElementsByClassName("btn_content")[0];
    btn.style.top = "-13px";
    btn.style.left = "-61px";
    btn_shadow.style.backgroundColor = "#252A34";
    btn_content.style.color = "#FF2E63";
    setTimeout(() => {
        window.open("../store/index.html")
        btn.style.top = "-20px";
        btn.style.left = "-65px";
        btn_content.style.color = "#08D9D6";
        btn_shadow.style.backgroundColor = "#EAEAEA"
    }, 600);
}

function abrirInsta() {
    console.log("funcionou");

    setTimeout(() => {

        window.open("https://www.instagram.com/jordssports");
    }, 600);
}