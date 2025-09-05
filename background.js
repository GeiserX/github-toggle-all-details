chrome.action.onClicked.addListener((tab) => {
  if (!tab || !tab.id) return;
  chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_GH_DETAILS" }).catch(() => {
    // No content script on this page or permissions mismatch; ignore.
  });
});
