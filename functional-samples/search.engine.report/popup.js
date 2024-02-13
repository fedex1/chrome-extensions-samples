   function modifyDOM() {
       //You can play with your DOM here or check URL against your regex
       console.log('Tab script:');
       console.log(document.body);
       return document.body.innerHTML;
   }

   document.addEventListener('DOMContentLoaded', function() {
       // document.body.append("test");
       let message;
       // alert(`injected 1`);
       // chrome.extension.getBackgroundPage().console.log('foo');
       if (document.querySelector("link[rel='canonical']")) {
           // alert(`canonical link: ${document.querySelector("link[rel='canonical']").getAttribute("href")}`);
           message = (`canonical link: ${document.querySelector("link[rel='canonical']").getAttribute("href")}`);
       } else {
           // alert(`no canonical link: ${document.body}`);
           message = (`no canonical link: ${document.body}`);
       }
       document.body.append(message);

       chrome.runtime.sendMessage({
           message: "getdata"
       }, (response) => {
           // do sth here if you want
           console.log(response);
       });

       // chrome.extension.getBackgroundPage().console.log('bar');
       //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
       /*
       chrome.scripting.executeScript({
           target: {
               tabId: tab.id
           },
           files: ['content.js']
       });
       */
   });
   //
   //   chrome.action.onClicked.addListener((tab) => {
   //       if (!tab.url.includes('chrome://')) {
   //           chrome.scripting.executeScript({
   //               target: {
   //                   tabId: tab.id
   //               },
   //               files: ['content.js']
   //           });
   //       }
   //   });
