//lição tabuada Monique Fernanda 
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function PaginaInicial(requisicao, resposta){
    resposta.send('<h1>Seja bem vindo</h1>');
}
function tabuada(requisicao, resposta){
    let resultado = '';
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }
    return resultado;
}
app.get("/",PaginaInicial);
app.get("/Tabuada", tabuada);

app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ":" + porta);
});