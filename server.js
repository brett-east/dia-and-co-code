const path = require('path');
const express = require('express');

const app = express();

const port = '3000';
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('*', (request, response) => {
  response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
});
