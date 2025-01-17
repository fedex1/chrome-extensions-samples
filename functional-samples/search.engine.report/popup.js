   function modifyDOM() {
       //You can play with your DOM here or check URL against your regex
       console.log('Tab script:');
       console.log(document.body);
       return document.body.innerHTML;
   }
   chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
       if (msg.message === "senddata") {
           // alert(`INFO payload ${msg.payload}`);
           // document.body.append(`<div>${msg.payload}</div>`);
           document.querySelector("#report").innerHTML = 
           `<br><a href="${msg.payload}" target="_blank">${msg.payload}</a>` +
           // `<br>>>${msg.payload}<<` +
           `<br><br><a href="https://prop.tidalforce.org/seo/site:${msg.location}" target="_blank">Search Engine Report Page Tools compare ${msg.location}</a>`  +
           `<br><br><a href="https://prop.tidalforce.org/seo/site:youtube.com" target="_blank">Search Engine Report Page Tools compare youtube.com</a>` 
           ;
       }
       return true;
   });


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
       // document.body.append(message);

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
