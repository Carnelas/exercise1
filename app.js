const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser')


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/message',  (req, res, next) =>{
  //coge del body el destinatario y el mensaje
  const {destination, body} = req.body;
  //se sustituye localhost por messageapp porque es lo que tenemos en dockerfile
  axios.post('http://messageapp:3000/message', {destination, body})
    .then(resp => {
      res.status(200).
      res.send(`${resp.data}`)
    })
    .catch(e => {
      res.status(500).
      console.log(e)})
  })

  
  app.listen(9001, () => {
    console.log('listend on port 9001!');
  });