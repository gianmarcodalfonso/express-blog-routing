//Importo Express
const express = require(`express`);

// Definisco app
const app = express();

// Definiamo la porta d'ascolto del server
const port = 3000;

// Rotta base della nostra applicazione
app.get(`/`, (req, res) => {
  res.send(`Server del mio blog!`)
})

// Porta d'ascolto del server
app.listen(port, () => {
  console.log(`Server del mio blog in ascolto alla porta ${port}!`)
})