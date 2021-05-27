const express = require('express');
const path = require('path');

const port = 8000

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, './static/')));

let filmesIndex = {
  foto: "2.png",
  foto1: "3.png",
  foto2: "4.png",
  foto3: "5.png",
  foto4: "6.png",
  foto5: "7.png"  
}

//index
app.get('/', (req, res) => {

  //res.sendFile(path.join(__dirname, './static/index.html'));
  res.render("layout/template", { filme : filmesIndex, conteudo: "index"});
}); 


app.get('/index', (req, res) => {

  //res.sendFile(path.join(__dirname, './static/index.html'));
  res.render("layout/template", { filme : filmesIndex, conteudo: "index"});
}); 

//----------------------------------------------------------------------------------------------
let dados =  require('./dados/imagens.json');

app.get('/filmes', (req, res) => {
  res.render("layout/template", { imagens: dados, conteudo: "filmes"});
}); 

//COMEÇO DOS FILMES

//bladeRunner
let dadosfilmes = require('./dadosfilmes/bladeRunner.json');

app.get('/bladeRunner', (req, res) => {
res.render("layout/template", { dadosfilme: dadosfilmes, conteudo: "filme"}); 
}); 

//dune
// let dadosfilmes = require('./dadosfilmes/dune.json');

// app.get('/dune', (req, res) => {
// res.render("layout/template", { dadosfilme: dadosfilmes, conteudo: "filme"}); 
// }); 


app.listen(8000, function(){

  console.log('O servidor está rodando na porta 8000');

});