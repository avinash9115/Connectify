const BUTTON_ID = "sendRequestBtn";

const handleSendRequestClick = () => {
    if (chrome && chrome.tabs && chrome.tabs.query) {
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
            const activeTab = tabs[0];
            alert(JSON.stringify(activeTab));
            chrome.tabs.sendMessage(activeTab.id, { "action": "start" });
            alert("sent");
        });
    }
}

const intializePopupScript = () => {
    const sendButton = document.getElementById(BUTTON_ID);
    if (sendButton) {
        sendButton.onclick = handleSendRequestClick;
    }
}

document.addEventListener("DOMContentLoaded", intializePopupScript);