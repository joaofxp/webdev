let changeSpeed = document.getElementById('changeSpeed');

changeSpeed.onclick = function () {
    let speed = document.getElementById('videoVelocidade').value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'document.getElementsByTagName("video")[0].playbackRate = "' + speed + '";'
            });
    });
};