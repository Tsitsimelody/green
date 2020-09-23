const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

if (process.env.NODE_ENV === 'development') {
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
        })
    );
}

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
}

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({ secret: 'Seecrettt', resave: false, saveUninitialized: true })
);

app.get('/api/user', (req, res) => {
    if (req.session.user) {
        res.status(200).send({ user: req.session.user });
    } else {
        res.status(200).send({ message: 'no user' });
    }
});

app.post('/api/login', (req, res) => {
    const user = req.body.email;

    if (!user) {
        res.status(400).send({ message: 'Please send an email address' });
    } else {
        req.session.user = user;
        res.status(200).send({ user });
    }
});

app.listen(3000, function () {
    console.log('App running on port 3000!\n');
});
