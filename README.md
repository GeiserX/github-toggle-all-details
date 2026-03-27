<p align="center">
  <img src="docs/images/banner.svg" alt="github-toggle-all-details banner" width="900"/>
</p>

<p align="center">
  <a href="https://github.com/GeiserX/github-toggle-all-details/blob/main/LICENSE"><img src="https://img.shields.io/github/license/GeiserX/github-toggle-all-details?color=58A6FF&style=flat-square" alt="License"></a>
  <img src="https://img.shields.io/badge/manifest-v3-58A6FF?style=flat-square&logo=googlechrome&logoColor=white" alt="Manifest V3">
  <img src="https://img.shields.io/badge/chrome-supported-58A6FF?style=flat-square&logo=googlechrome&logoColor=white" alt="Chrome">
  <a href="https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/"><img src="https://img.shields.io/amo/v/toggle-github-details?style=flat-square&logo=firefox&logoColor=white&label=firefox&color=58A6FF" alt="Firefox Add-on"></a>
  <img src="https://img.shields.io/badge/dependencies-0-58A6FF?style=flat-square" alt="Zero dependencies">
  <a href="https://github.com/GeiserX/github-toggle-all-details"><img src="https://img.shields.io/github/stars/GeiserX/github-toggle-all-details?style=flat-square&color=58A6FF" alt="Stars"></a>
</p>

<p align="center">
  <a href="https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/"><img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="Get the Add-on for Firefox" height="60"></a>
</p>

---

A lightweight browser extension for **Chrome** and **Firefox** that adds a one-click toolbar button to expand or collapse every `<details>` element inside GitHub pull request and issue comments.

Built for teams that use CI tools like **Atlantis**, **GitHub Actions**, or **Terraform** which generate dozens (or hundreds) of collapsible output blocks in a single PR. Instead of clicking each one individually, toggle them all at once.

## Features

- **One-click toggle** -- Click the toolbar icon to open or close all collapsible sections on the current page.
- **Smart toggle logic** -- If any `<details>` element is closed, all are opened. If every element is already open, all are closed.
- **Scoped to comments** -- Only targets `<details>` elements inside `.js-comment-body` containers, leaving GitHub's own UI elements untouched.
- **GitHub Enterprise support** -- Matches `https://github.com/*` and `https://*.github.com/*`, covering both public GitHub and GHE instances.
- **Zero dependencies** -- Pure vanilla JavaScript. No frameworks, no build step, no bundler.
- **Manifest V3** -- Uses the modern extension manifest format for both Chrome and Firefox compatibility.

## Installation

### Chrome (manual)

1. Clone or download this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the repository folder.
5. The extension icon appears in the toolbar. Pin it for quick access.

### Firefox

Install from **[Firefox Add-ons (AMO)](https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/)**.

<details>
<summary>Manual installation</summary>

1. Clone or download this repository.
2. Open `about:debugging#/runtime/this-firefox` in Firefox.
3. Click **Load Temporary Add-on**.
4. Select the `manifest.json` file from the repository folder.
5. The extension icon appears in the toolbar.

> **Note:** Temporary add-ons in Firefox are removed when the browser is closed.
</details>

## Usage

1. Navigate to any GitHub pull request or issue page that contains collapsible `<details>` blocks in the comments.
2. Click the **Toggle GitHub Details** icon in the browser toolbar.
3. All collapsible sections within comment bodies will expand. Click again to collapse them all.

## How It Works

The extension consists of two files:

**`background.js`** -- A service worker that listens for toolbar icon clicks and sends a message to the active tab.

**`contentScript.js`** -- A content script injected into GitHub pages that:
1. Queries all `<details>` elements scoped to `.js-comment-body` (PR/issue comment bodies).
2. Checks whether any of them are currently closed.
3. If at least one is closed, opens all of them. If all are already open, closes all of them.
4. Logs the action and count to the browser console for transparency.

The content script runs at `document_idle` and communicates with the background service worker via `chrome.runtime.onMessage`.

## Browser Compatibility

| Browser | Support | Install Method |
|---------|---------|----------------|
| Chrome | Manifest V3 | Load unpacked |
| Edge | Manifest V3 (Chromium) | Load unpacked |
| Brave | Manifest V3 (Chromium) | Load unpacked |
| Firefox | Manifest V3 | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/) |

Any Chromium-based browser that supports Manifest V3 should work without modification.

## Contributing

Contributions are welcome. To get started:

1. Fork this repository.
2. Create a feature branch: `git checkout -b feature/my-change`.
3. Make your changes and test them by loading the unpacked extension.
4. Submit a pull request with a clear description of what changed and why.

Please keep the zero-dependency philosophy -- pull requests that introduce external libraries will not be accepted unless there is a compelling reason.

## License

This project is licensed under the [GNU Lesser General Public License v2.1](LICENSE).
