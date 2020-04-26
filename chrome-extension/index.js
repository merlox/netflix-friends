const url = 'http://3.135.96.94'
const socket = io(url)
let joinCode

document.querySelector('#start-button').addEventListener('click', () => {
	joinCode = document.querySelector('#code').value
	socket.emit('play-request', { code: joinCode })
})

document.querySelector('#pause-button').addEventListener('click', () => {
	joinCode = document.querySelector('#code').value
	socket.emit('pause-request', {
		code: joinCode,
	})
})

socket.on('start-video', msg => {
	console.log('Received message play', msg)
	if (msg.code == joinCode) {
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			chrome.tabs.sendMessage(tabs[0].id, {
				action: 'play',
			})
		})
	}
})

socket.on('pause-video', msg => {
	console.log('Received message', msg)
	if (msg.code == joinCode) {
		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			chrome.tabs.sendMessage(tabs[0].id, {
				action: 'pause',
			})
		})
	}
})
