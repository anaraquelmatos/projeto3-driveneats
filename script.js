function selecionarMenu(classeBotao) {
    const selecionado = document.querySelector(".selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    const botaoMenu = document.querySelector("." + classeBotao);
    botaoMenu.classList.add("selecionado");
    prato = selecionarMenu(classeBotao);

}
function selecionarBebida(classeBotao2) {
    const selecionado2 = document.querySelector(".selecionado2");

    if (selecionado2 !== null) {
        selecionado2.classList.remove("selecionado2");
    }
    const botaoMenu = document.querySelector("." + classeBotao2);
    botaoMenu.classList.add("selecionado2");

}
function selecionarSobremesa(classeBotao3) {
    const selecionado3 = document.querySelector(".selecionado3");

    if (selecionado3 !== null) {
        selecionado3.classList.remove("selecionado3");
    }
    const botaoMenu = document.querySelector("." + classeBotao3);
    botaoMenu.classList.add("selecionado3");
}
