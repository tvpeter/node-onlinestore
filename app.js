const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname, 'public/css/')))
app.use('/js', express.static(path.join(__dirname, 'public/js/')));
app.use('/images', express.static(path.join(__dirname, 'public/images/')));
app.get("/", (req, res)=>{
 res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(3000, ()=>{
    debug(`Listening on port ${chalk.blue('3000')} `);
});



