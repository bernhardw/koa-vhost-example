var koa = require('koa');
var compose = require('koa-compose');

var server = koa();

var app = compose(require('./apps/app').middleware);
var web = compose(require('./apps/web').middleware);

server.use(function *(next) {
    switch (this.host) {
        case 'app.example.com':
            return yield app.call(this, next);
            break;
        default:
            return yield web.call(this, next);
    }
});

server.listen(3000);