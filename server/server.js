const port = 80
const http = require('http')
const server = http.createServer()
const io = require('socket.io')(server)
server.listen(port)

console.log('Server started at port', port)
io.on('connection', socket => {
        console.log('User connected', socket.id)
        socket.on('play-request', req => {
                console.log('Received play request', req.code)
                io.emit('start-video', { code: req.code })
        })
        socket.on('pause-request', req => {
                console.log('Received pause request', req.code)
                io.emit('pause-video', { code: req.code })
        })
})
