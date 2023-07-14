const express = require('express');

const skillsRouter = require('./routes/skills');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/skills', skillsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });