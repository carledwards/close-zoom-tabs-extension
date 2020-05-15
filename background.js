chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query ({title: '* - Zoom'}, function(result) {
        result.forEach(function(tab) {
            chrome.tabs.remove(tab.id);
        });
    });
});
