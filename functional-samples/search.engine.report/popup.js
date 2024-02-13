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
    // chrome.extension.getBackgroundPage().console.log('bar');
});
