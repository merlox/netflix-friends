const port = 443
const https = require('https')
const server = https.createServer({
	key: fs.readFileSync('/etc/letsencrypt/live/merunas.co/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/merunas.co/cert.pem'),
	ca: fs.readFileSync('/etc/letsencrypt/live/merunas.co/chain.pem'),
	requestCert: false,
	rejectUnauthorized: false,
})
const io = require('socket.io')(server)

server.listen(port)
console.log('Server started at port', port)

io.on('connection', socket => {
	socket.on('play-request', req => {
		io.emit('start-video', { code: req.code })
	})
	socket.on('pause-request', req => {
		io.emit('pause-video', { code: req.code })
	})
})
