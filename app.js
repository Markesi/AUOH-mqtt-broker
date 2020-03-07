// MQTT over TLS / MQTTS

// npm init
// npm install aedes
// npm install websocket-stream


const aedes = require('aedes')()
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
const port = process.env.port || 8081;

ws.createServer({ 
    server: httpServer 
}, aedes.handle)

httpServer.listen(port, function () {
  console.log('websocket server listening on port ', port)
})


