const url = 'https://3.135.96.94'
const socket = io(url)
let joinCode

console.log('Merunas ------------ content script inserted')
chrome.runtime.onMessage.addListener(req => {
    joinCode = req.code
    switch (req.action) {
        case 'play':
            socket.emit('play-request', { code: joinCode })
            break
        case 'pause':
            socket.emit('pause-request', { code: joinCode })
            break
    }
})

socket.on('start-video', msg => {
    if (msg.code == joinCode) {
        playNetflixVideo()
    }
})

socket.on('pause-video', msg => {
    if (msg.code == joinCode) {
        pauseNetflixVideo()
    }
})

function playNetflixVideo () {
    const selector = document.querySelector("#appMountPoint button.touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerPlay")
    if (selector) {
        selector.click()
    }
}

function pauseNetflixVideo () {
    const selector = document.querySelector("#appMountPoint button.touchable.PlayerControls--control-element.nfp-button-control.default-control-button.button-nfplayerPause")
    if (selector) {
        selector.click()
    }
}