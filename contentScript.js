(() => {
  function getTargets() {
    // Restrict strictly to PR/issue comment bodies.
    return Array.from(document.querySelectorAll(".js-comment-body details"));
  }

  function toggleAll() {
    const els = getTargets();
    if (els.length === 0) return { toggled: 0, action: "none" };
    const shouldOpen = els.some(d => !d.open);
    els.forEach(d => { d.open = shouldOpen; });
    const action = shouldOpen ? "open" : "close";
    console.log(`[Toggle GH Details] ${action} ${els.length} details`);
    return { toggled: els.length, action };
  }

  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg && msg.type === "TOGGLE_GH_DETAILS") {
      sendResponse(toggleAll());
    }
  });
})();
