const express = require('express');

const app = express();
const port = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id([0-9]+)', (req, res) => {
  console.log(req.params.id);
  res.send(`Payment methods for cart ${req.params.id}`);
});
app.get('/available_payments', (_, res) => {
  const payments = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(payments);
});
app.post('/login', function (request, response) {
  response.send(`\nHello ${request.body}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
