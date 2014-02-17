var koa = require('koa');

var app = koa();

app.use(function *() {
    this.body = 'APP';
});

module.exports = app;