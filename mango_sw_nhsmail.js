chrome.webRequest.onCompleted.addListener(
    (details) => {
        // Check if the request is an XHR request
        if (details.type === "xmlhttprequest" && details.method === "POST") {
            // Send a message to the content script
            chrome.scripting.executeScript({
                target: {tabId: details.tabId},
                function: (xhrUrl) => {
                    //console.log("Re-initialising NHSmail Helper Script for TOPDesk");
                    //init();
                    chrome.runtime.sendMessage({ action: "reinitialize" });
                    //chrome.runtime.sendMessage("Re-initialising NHSmail Helper Script for TOPDesk");
                },
                args: [details.url]
            });
        }
    },
    { urls: ["<all_urls>"] }
);