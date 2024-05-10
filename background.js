chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});


chrome.action.onClicked.addListener(async (tab) => {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });
    

    if (nextState === "ON") {
        // Insert the JS & CSS files when the user turns the extension on
        await chrome.scripting.executeScript({
            files: ["scripts/content.js"],
            target: { tabId: tab.id },
        });
        await chrome.scripting.insertCSS({
             files: ["main.css"],
             target: { tabId: tab.id},
         });
    } else if (nextState === "OFF") {
        await chrome.tabs.reload()
    };
});