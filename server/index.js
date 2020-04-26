const port = 8000
const io = require('socket.io')(port)

io.on('connection', socket => {
    socket.on('play-request', req => {
        io.emit('start-video', { code: req.code })
    })
    socket.on('pause-request', req => {
        io.emit('pause-video', { code: req.code })
    })
})

console.log('Server started at port', port)