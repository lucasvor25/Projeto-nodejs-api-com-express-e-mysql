module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce está no atendimento'));
}