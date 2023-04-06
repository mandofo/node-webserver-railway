require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {console.log});

//Middelware
//para hacer contenido estatico
app.use( express.static('public'));
//app.use(express.static('public',{extensions:['html']}));

app.get('/', (req, res) => {
     res.render('home', {
      nombre:'Armando Flores',
      titulo:'Curso de Node'
     });
  });

app.get('/generic', (req, res) => {
     res.render('generic', {
      nombre:'Armando Flores',
      titulo:'Curso de Node'
     });
  });

app.get('/generic', (req, res) => {
     res.render('generic', {
      nombre:'Armando Flores',
      titulo:'Curso de Node'
     });
  });
app.get('/elements', (req, res) => {
     res.render('elements', {
      nombre:'Armando Flores',
      titulo:'Curso de Node'
     });
  });

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname +'/public/generic.html')
// });


/*No se va a ejecutar ´por el Middelware
app.get('/',  (req, res) => {
  res.send('Home Page')
})*/

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
})


app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })