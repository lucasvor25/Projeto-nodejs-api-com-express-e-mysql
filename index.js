const express=require('express');
const app = express();

app.listen(3000, () => console.log('servidor rodando'));
app.get('/atendimentos', (req, res) => res.send('Voce está no atendimento'));