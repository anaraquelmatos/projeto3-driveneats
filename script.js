let prato = "";
let bebida = "";
let sobremesa = "";

/*Seleção do prato escolhido*/
function selecionarMenu(classeBotao) {
    const selecionado = document.querySelector(".selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }
    const botaoMenu = document.querySelector("." + classeBotao);
    botaoMenu.classList.add("selecionado");

    prato = classeBotao;

    /*Seleção das três opções para alterar botão de fechar pedido automaticamente*/
    if ((prato !== "") && (bebida !== "") && (sobremesa !== "")) {

        const elemento = document.querySelector("#envio__pedido");
        elemento.innerHTML = "Fechar pedido";
        document.getElementById("envio__pedido").style.backgroundColor = "rgba(50, 183, 47, 1";
        document.getElementById("envio__pedido").style.borderColor = "rgba(50, 183, 47, 1";
        document.getElementById("envio__pedido").style.fontWeight = "700";
    }
}

/*Seleção da bebida escolhida*/
function selecionarBebida(classeBotao2) {
    const selecionado2 = document.querySelector(".selecionado2");

    if (selecionado2 !== null) {
        selecionado2.classList.remove("selecionado2");
    }
    const botaoMenu = document.querySelector("." + classeBotao2);
    botaoMenu.classList.add("selecionado2");

    bebida = classeBotao2;

    /*Seleção das três opções para alterar botão de fechar pedido automaticamente*/
    if ((prato !== "") && (bebida !== "") && (sobremesa !== "")) {

        const elemento = document.querySelector("#envio__pedido");
        elemento.innerHTML = "Fechar pedido";
        document.getElementById("envio__pedido").style.backgroundColor = "rgba(50, 183, 47, 1";
        document.getElementById("envio__pedido").style.borderColor = "rgba(50, 183, 47, 1";
        document.getElementById("envio__pedido").style.fontWeight = "700";
    }
}

/*Seleção da sobremesa escolhida*/
function selecionarSobremesa(classeBotao3) {
    const selecionado3 = document.querySelector(".selecionado3");

    if (selecionado3 !== null) {
        selecionado3.classList.remove("selecionado3");
    }
    const botaoMenu = document.querySelector("." + classeBotao3);
    botaoMenu.classList.add("selecionado3");

    sobremesa = classeBotao3;

    /*Seleção das três opções para alterar botão de fechar pedido automaticamente*/
    if ((prato !== "") && (bebida !== "") && (sobremesa !== "")) {

        const elemento = document.querySelector("#envio__pedido");
        elemento.innerHTML = "Fechar pedido";
        document.getElementById("envio__pedido").style.backgroundColor = "rgba(50, 183, 47, 1";
        document.getElementById("envio__pedido").style.borderColor = "rgba(50, 183, 47, 1";
        document.getElementById("envio__pedido").style.fontWeight = "700";
    }
    function finalizarPedido() {

    }

}
