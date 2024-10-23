//lição tabuada Monique Fernanda 
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function PaginaInicial(requisicao, resposta){
    resposta.send('<h1>Seja bem vindo</h1>');
}

app.get("/",PaginaInicial);

app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ":" + porta);
});