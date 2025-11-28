const testRouter = require('./test')

const route = (app) => {
    app.use(`/getVersion`, testRouter)
}

module.exports = route;