const express = require('express');
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: __dirname + '/variables.env' });

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

app.enable('trust proxy');

app.use (function (req, res, next) {
        if (req.secure) {
                // request was via https, so do no special handling
                next();
        } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
        }
});

// API endpoints

app.use(express.static(path.join(__dirname, "/client/build")))

app.get('/api/memberAdd', (req, res) => {
  mailchimp
    .post(`/lists/${list_id}/members/`, {
      email_address: req.query.email,
      status: 'subscribed',
    })
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Express listening on port ${port}`);
