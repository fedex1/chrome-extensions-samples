chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.message === "getdata") {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, ([tab]) => {
            if (!tab.url.includes('chrome://')) {
                chrome.scripting.executeScript({
                    target: {
                        tabId: tab.id
                    },
                    files: ["content.js"],
                });
            }
        });
    }
    return true;
});


function reddenPage() {
    document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            func: reddenPage
        });
    }
});

// try{

/*
   chrome.action.onClicked.addListener((tab) => {
   console.log(`INFO: tab: ${JSON.stringify(tab)}`);
       if (!tab.url.includes('chrome://')) {
           chrome.scripting.executeScript({
               target: {
                   tabId: tab.id
               },
               files: ['content.js']
           });
       }
   });
*/

// }catch(e){
// console.log(e);
// }
