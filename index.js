//lição tabuada Monique Fernanda 
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function PG(requisicao, resposta){
    const num = parseInt(req.query.tabuada) || 0; 
    const sq = parseInt(req.query.sq) || 0; 
    let resul = '';
    for (let i = 0; i <= sq; i++) {
        resul += `<p>${num} x ${i} = ${num * i}</p>`;
    }
    return resul;
}

app.get("/",PG);

app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ";" +porta);
});