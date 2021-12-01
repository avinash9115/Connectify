function handleChromeMessages(request, sender, sendResponse) {
    if (request.action === "start") {
        handleStart();
    }
}

function handleStart() {
    const actionButtons = document.getElementsByClassName("reusable-search__entity-result-list")[0].getElementsByClassName("artdeco-button");
    console.log(actionButtons);
    for (const button of actionButtons) {
        switch (button.children[0].innerText) {
            case "Connect":
                handleConnect(button);

            case "Follow":
                handleFollow(button);

            case "Message":
            case "Pending":
            default:
                continue;
        }
    }
}

function handleConnect(button) {
    if (button && button.click) {
        button.click();
        const modalElement = document.getElementsByClassName("artdeco-modal__actionbar")[0];
        console.log(modalElement);
        const noButton = modalElement.getElementsByClassName("ml1 artdeco-button artdeco-button--2 artdeco-button--primary ember-view")[0];
        if (noButton.ariaLabel == 'Send now');
        noButton.click();
    }
}

function handleFollow(button) {
    if (button && button.click) button.click();
}

chrome.runtime.onMessage.addListener(handleChromeMessages);