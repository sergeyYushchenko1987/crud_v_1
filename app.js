require('module-alias/register');
const express = require('express');
const config = require('config');
const bookRoute = require('@routes/bookRoute');
const authorRoute = require('@routes/authorRoute');
const authorsBooksRoute = require('@routes/authorsBooksRoute');

const PORT = config.get('constants.PORT');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/books', bookRoute);
app.use('/authors', authorRoute);
app.use('/library', authorsBooksRoute);

app.get('/', (req, res) => {
  res.end('Server works');
});

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}`);
});
