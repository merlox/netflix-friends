// This works only from contentScript to popup
// chrome.runtime.sendMessage({ code })

document.querySelector('#start-button').addEventListener('click', () => {
    // This works from popup to contentScript
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: 'play',
            code: document.querySelector('#code').value,
        })
    })
})

document.querySelector('#pause-button').addEventListener('click', () => {
    // This works from popup to contentScript
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: 'pause',
            code: document.querySelector('#code').value,
        })
    })
})
