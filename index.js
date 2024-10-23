//lição tabuada Monique Fernanda 
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function tabuada(numero, sequencia) {
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
    }
    resultado += '</table>';
    return resultado;
}

app.get('/', (req, res) => {
    
    const numero = parseInt(req.query.tabuada) || 1; 
    const sequencia = parseInt(req.query.sequencia) || 10;  

   
    const tabuadaHtml = tabuada(numero, sequencia);

   
    res.send(`
        <html>
        <head>
            <title>Tabuada do ${numero}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                }
                table {
                    margin: 0 auto;
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
    console.log("Servidor rodando em http://"+host + ":"+porta);
});