function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value; //tipo do ingresso
    let qtd = parseInt(document.getElementById('qtd').value); //parse para transformar a string em int

    if (tipo == 'pista'){
        if(qtd <= 10){
            comprarPista(qtd);
        } else {
            alert("Quantidade indisponível para compra, máximo de ingressos permitido por pessoa: 10 ")
            }
    } else if (tipo == 'superior'){
        if(qtd <= 10){
            comprarSuperior(qtd);
        } else {
            alert("Quantidade indisponível para compra, máximo de ingressos permitido por pessoa: 10 ")
        }
    } else {
        if (qtd <= 10){
            comprarInferior(qtd);
        } else {
            alert("Quantidade indisponível para compra, máximo de ingressos permitido por pessoa: 10 ")
        }
    }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista){
        alert('Quantidade indisponível para Ingresso tipo Pista');
    } else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista; //textcontext pq no html ele é tipo LISTA
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior){
        alert('Quantidade indisponível para Ingresso tipo Cadeira Superior');
    } else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior; //textcontext pq no html ele é tipo LISTA
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior){
        alert('Quantidade indisponível para Ingresso tipo Cadeira Inferior');
    } else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior; //textcontext pq no html ele é tipo LISTA
        alert('Compra realizada com sucesso!');
    }
}