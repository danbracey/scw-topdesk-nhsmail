function init() {
    console.log("Initialised NHSmail Helper Script for TOPDesk");
    const currentEmail = null;
    const pattern = new RegExp("^[a-zA-Z0-9._%+-]+@nhs.net$");

    var iframe = document.getElementsByTagName('iframe');
    //iframeDoc = iframe.contentWindow.document;
    for(let i = 0; i < iframe.length; i++) {
        iframe[i].onload = function() {
            console.log("iframe loaded");
            var iframeDoc = iframe[i].contentWindow.document;
            var textboxes = iframeDoc.getElementsByTagName('input');
            for (let t = 0; t < textboxes.length; t++) {
                //Find Textboxes containing an NHSMail Address
                if(pattern.test(textboxes[t].value) === true) {
                    const currentEmail = textboxes[t].value;
                    console.log("Found an NHSmail Address: " + currentEmail);
                    console.log("Attempting to inject button");
                    textboxes[t].insertAdjacentHTML('afterend', returnHTML(currentEmail));
                }
            }
        }
    }
}

function returnHTML(email) {
    return `<a href="https://portal.nhs.net/Admin#/viewDetails/` + email + `" target="_blank"><img src="https://portal.nhs.net/Images/nhs_logo.png" width="20px" height="20px" alt="NHSmail Logo" style="display:block;visibility:visible;top:2px;left:268px;width:16px;height:16px;"></a>`
}

init();