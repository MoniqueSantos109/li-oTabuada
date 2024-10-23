//lição tabuada Monique Fernanda 
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function PG(requisicao, resposta){
    resposta.send('<h1>Tabuada</h1></br>');
}

app.get("/",PG);

app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ";" +porta);
});