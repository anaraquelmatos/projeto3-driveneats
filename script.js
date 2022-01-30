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
}

function finalizarPedido() {

    if ((prato !== "") && (bebida !== "") && (sobremesa !== "")) {

        if (prato === "prato1") {
            prato = "Caldo de abóbora";
        }
        if (prato === "prato2") {
            prato = "Arroz com pequi";
        }
        if (prato === "prato3") {
            prato = "Baião de dois";
        }
        if (prato === "prato4") {
            prato = "Escondidinho";
        }
        if (prato === "prato5") {
            prato = "Estrogonofe";
        }
        if (prato === "prato6") {
            prato = "Feijoada";
        }
        if (prato === "prato7") {
            prato = "Torta de legumes";
        }
        if (prato === "prato8") {
            prato = "Quiche";
        }

        if (bebida === "bebida1") {
            bebida = "Coca-Cola";
        }
        if (bebida === "bebida2") {
            bebida = "Fanta";
        }
        if (bebida === "bebida3") {
            bebida = "Sprite";
        }
        if (bebida === "bebida4") {
            bebida = "Guaraná";
        }
        if (bebida === "bebida5") {
            bebida = "Suco de laranja";
        }
        if (bebida === "bebida6") {
            bebida = "Suco de uva";
        }
        if (bebida === "bebida7") {
            bebida = "Suco de goiaba";
        }
        if (bebida === "bebida8") {
            bebida = "Água";
        }

        if (sobremesa === "sobremesa1") {
            sobremesa = "Petit Gateau";
        }
        if (sobremesa === "sobremesa2") {
            sobremesa = "Sorvete de Pitaya";
        }

        if (sobremesa === "sobremesa3") {
            sobremesa = "Tiramisu";
        }
        if (sobremesa === "sobremesa4") {
            sobremesa = "Cocada branca";
        }
        if (sobremesa === "sobremesa5") {
            sobremesa = "Torta de maçã";
        }

        if (sobremesa === "sobremesa6") {
            sobremesa = "Bolo de chocolate";
        }

        if (sobremesa === "sobremesa7") {
            sobremesa = "Doce de leite";
        }

        if (sobremesa === "sobremesa8") {
            sobremesa = "Cookies";
        }

        let mensagem;
        mensagem = "Olá, gostaria de fazer o pedido: \r\n"
            + "- Prato: " + prato + "\r\n"
            + "- Bebida: " + bebida + "\r\n"
            + "- Sobremesa: " + sobremesa + "\r\n"
            + " Total: R$";

        mensagem = window.encodeURIComponent(mensagem);

        window.open("https://wa.me/+5538999999999?text=" + mensagem);
    }
}




