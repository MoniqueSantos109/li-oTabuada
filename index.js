//lição tabuada Monique Fernanda 
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function gerarTabuada(numero, sequencia) {
    let resultado = '<table border="1" cellpadding="10" cellspacing="0">';
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
    }
    resultado += '</table>';
    return resultado;
}

// Rota principal que captura os parâmetros da URL
app.get('/', (req, res) => {
    // Pega os parâmetros 'tabuada' e 'sequencia' da URL
    const numero = parseInt(req.query.tabuada) || 1;  // Padrão para 1 caso não informado
    const sequencia = parseInt(req.query.sequencia) || 10;  // Padrão para 10 caso não informado

    // Gera a tabuada usando a função gerarTabuada
    const tabuadaHtml = gerarTabuada(numero, sequencia);

    // Resposta HTML para o cliente
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabuada do ${numero}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
                    text-align: center;
                    margin-top: 50px;
                }
                table {
                    margin: 0 auto;
                    background-color: #fff;
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 18px;
                }
            </style>
        </head>
        <body>
            <h1>Tabuada do ${numero}</h1>
            ${tabuadaHtml}
            <p>Multiplicando até: ${sequencia}</p>
        </body>
        </html>
    `);
});


app.listen(porta, host, () =>{
    console.log("Servidor em execução http://" + host + ":" + porta);
});