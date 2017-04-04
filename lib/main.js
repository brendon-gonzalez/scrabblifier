import scrabblifier from './scrabblifier';
import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.post('/', (req, res) => {
  const requestedText = req.body.text;
  const url = req.body.response_url;
  const form = {
    response_type: 'in_channel',
    text: scrabblifier(requestedText),
  }
  return res.send(form);
});

const server = app.listen(process.env.port || 3000, () => {
  console.log('server is running')
});
