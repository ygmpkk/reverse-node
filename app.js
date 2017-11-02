const http = require('http')
const express = require('express')
const httpBodyParse = require('http-body-parse')
const proxy = require('http-proxy-middleware')

const proxyTable = {
    '/YOUR PATH': {
        target: 'http://YOUR IP',
        changeOrigin: true,
        agent: http.globalAgent,
    },
}

const app = express()
Object.keys(proxyTable).map(function(key) {
    app.use(key, proxy(proxyTable[key]))
})

app.listen(3214)
