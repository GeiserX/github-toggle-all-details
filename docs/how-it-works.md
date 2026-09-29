# How it works

The extension is two files.

- [`background.js`](https://github.com/GeiserX/github-toggle-all-details/blob/main/background.js) is a service worker. It listens for clicks on the toolbar icon and sends a message to the active tab.
- [`contentScript.js`](https://github.com/GeiserX/github-toggle-all-details/blob/main/contentScript.js) is injected into GitHub pages at `document_idle` and receives that message through `chrome.runtime.onMessage`. It then:
  1. finds every `<details>` element inside `.js-comment-body`, the pull request and issue comment bodies;
  2. checks whether any of them is closed;
  3. opens all of them if at least one is closed, and closes all of them if every one is open;
  4. logs the action and the count to the browser console.

The manifest asks for no permissions and matches `https://github.com/*` and `https://*.github.com/*` only. GitHub Enterprise Server on your own host name and GitHub Enterprise Cloud on `*.ghe.com` are not matched.

## Browsers

| Browser | Support | Install method |
|---------|---------|----------------|
| Chrome | Manifest V3 | Load unpacked |
| Edge | Manifest V3 (Chromium) | Load unpacked |
| Brave | Manifest V3 (Chromium) | Load unpacked |
| Firefox | Manifest V3 | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/) |

Any Chromium browser that supports Manifest V3 should work without changes.

To load it in Firefox without the store, open `about:debugging#/runtime/this-firefox`, click Load Temporary Add-on and pick `manifest.json` from the repository folder. Firefox removes temporary add-ons when it closes.
