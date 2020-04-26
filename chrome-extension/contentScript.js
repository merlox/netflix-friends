chrome.runtime.onMessage.addListener(req => {
    switch (req.action) {
        case 'play':
            playNetflixVideo()
            break
        case 'pause':
            pauseNetflixVideo()
            break
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

console.log('Merunas content scripts initialized')