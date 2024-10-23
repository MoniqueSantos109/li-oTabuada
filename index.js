//lição tabuada Monique Fernanda 
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function PaginaInicial(requisicao, resposta){
    resposta.send('<h1>Seja bem vindo</h1>');
}
function PaginaInicial(numero, sequencia){
    resposta.send('<h1>Seja bem vindo</h1>');
    let resultado = '';
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
    const numero = parseInt(req.query.tabuada) || 1; // Padrão 1 caso não informado
    const sequencia = parseInt(req.query.sequencia) || 10; 
    return resultado;
}

app.get("/",PaginaInicial);

app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ":" + porta);
});