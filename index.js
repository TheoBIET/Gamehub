const express = require('express');
const routes = require('./modules/routes');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(routes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});