let prato = "";
let bebida = "";
let sobremesa = "";
let preco_prato;
let preco_bebida;
let preco_sobremesa;
let soma;



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


/*Função para o nome dos itens escolhidos e atribuição do valor a ser pago*/
function finalizarPedido() {
    let nome_usuario = "";
    let endereco_usuario = "";

    /*Pedido de nome e endereço do usuário*/
    if ((prato !== "") && (bebida !== "") && (sobremesa !== "")) {

        nome_usuario = prompt("Olá! Qual o seu nome?");
        endereco_usuario = prompt("Qual o seu endereço?");

    }

    if ((prato !== "") && (bebida !== "") && (sobremesa !== "")) {

        if (prato === "prato1") {
            prato = "Caldo de abóbora";
            preco_prato = 8.00;
        }
        if (prato === "prato2") {
            prato = "Arroz com pequi";
            preco_prato = 11.00;
        }
        if (prato === "prato3") {
            prato = "Baião de dois";
            preco_prato = 14.00;
        }
        if (prato === "prato4") {
            prato = "Escondidinho";
            preco_prato = 12.00;
        }
        if (prato === "prato5") {
            prato = "Estrogonofe";
            preco_prato = 10.00;
        }
        if (prato === "prato6") {
            prato = "Feijoada";
            preco_prato = 20.00;
        }
        if (prato === "prato7") {
            prato = "Torta de legumes";
            preco_prato = 5.00;
        }
        if (prato === "prato8") {
            prato = "Quiche";
            preco_prato = 7.00;
        }

        if (bebida === "bebida1") {
            bebida = "Coca-Cola";
            preco_bebida = 6.00;
        }
        if (bebida === "bebida2") {
            bebida = "Fanta";
            preco_bebida = 4.00;
        }
        if (bebida === "bebida3") {
            bebida = "Sprite";
            preco_bebida = 3.50;
        }
        if (bebida === "bebida4") {
            bebida = "Guaraná";
            preco_bebida = 8.00;
        }
        if (bebida === "bebida5") {
            bebida = "Suco de laranja";
            preco_bebida = 9.00;
        }
        if (bebida === "bebida6") {
            bebida = "Suco de uva";
            preco_bebida = 2.50;
        }
        if (bebida === "bebida7") {
            bebida = "Suco de goiaba";
            preco_bebida = 2.40;
        }
        if (bebida === "bebida8") {
            bebida = "Água";
            preco_bebida = 5.50;
        }

        if (sobremesa === "sobremesa1") {
            sobremesa = "Petit Gateau";
            preco_sobremesa = 14.00;
        }
        if (sobremesa === "sobremesa2") {
            sobremesa = "Sorvete de Pitaya";
            preco_sobremesa = 10.00;
        }

        if (sobremesa === "sobremesa3") {
            sobremesa = "Tiramisu";
            preco_sobremesa = 17.00;
        }
        if (sobremesa === "sobremesa4") {
            sobremesa = "Cocada branca";
            preco_sobremesa = 4.00;
        }
        if (sobremesa === "sobremesa5") {
            sobremesa = "Torta de maçã";
            preco_sobremesa = 8.00;
        }

        if (sobremesa === "sobremesa6") {
            sobremesa = "Bolo de chocolate";
            preco_sobremesa = 5.50;
        }

        if (sobremesa === "sobremesa7") {
            sobremesa = "Doce de leite";
            preco_sobremesa = 9.60;
        }

        if (sobremesa === "sobremesa8") {
            sobremesa = "Cookies";
            preco_sobremesa = 11.10;
        }

        /*Mensagem para o whatsapp*/
        let mensagem;
        soma = preco_prato + preco_bebida + preco_sobremesa;

        mensagem = "Olá, gostaria de fazer o pedido: \r\n"
            + "- Prato: " + prato + "\r\n"
            + "- Bebida: " + bebida + "\r\n"
            + "- Sobremesa: " + sobremesa + "\r\n"
            + "Total: R$ " + soma.toFixed(2).replace('.', ',')
            + "\r\n\r\n"
            + "Nome: " + nome_usuario + "\r\n"
            + "Endereço: " + endereco_usuario;

        mensagem = window.encodeURIComponent(mensagem);

        window.open("https://wa.me/+5599999999999?text=" + mensagem);

    }
}



