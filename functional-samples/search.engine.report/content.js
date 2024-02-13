        if (document.querySelector("link[rel='canonical']")) {
            message = (`canonical link: ${document.querySelector("link[rel='canonical']").getAttribute("href")}`);
        } else {
            message = (`no canonical link: ${document.body}`);
        }
        alert(message);
