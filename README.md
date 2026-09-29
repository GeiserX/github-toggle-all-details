<p align="center">
  <img src="docs/images/banner.svg" alt="github-toggle-all-details" width="900"/>
</p>

<p align="center">
  <a href="https://github.com/GeiserX/github-toggle-all-details/blob/main/LICENSE"><img src="https://img.shields.io/github/license/GeiserX/github-toggle-all-details?color=58A6FF&style=flat-square" alt="License"></a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/"><img src="https://img.shields.io/amo/v/toggle-github-details?style=flat-square&logo=firefox&logoColor=white&label=firefox&color=58A6FF" alt="Firefox Add-on"></a>
  <a href="https://github.com/GeiserX/github-toggle-all-details"><img src="https://img.shields.io/github/stars/GeiserX/github-toggle-all-details?style=flat-square&color=58A6FF" alt="Stars"></a>
</p>

<p align="center">
  <a href="https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/"><img src="https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg" alt="Get the Add-on for Firefox" height="60"></a>
</p>

---

A browser extension for Chrome and Firefox that adds one toolbar button to expand or collapse every `<details>` block inside GitHub pull request and issue comments. Built for teams whose CI (Atlantis, GitHub Actions, Terraform) posts dozens of collapsible output blocks per PR.

## Features

- One click on the toolbar icon opens every collapsible section on the page; a second click closes them.
- If any block is closed, all open; if all are open, all close.
- Touches only `<details>` inside comment bodies (`.js-comment-body`), never GitHub's own UI.
- Works on github.com and its `*.github.com` subdomains.
- Plain JavaScript, no dependencies, no build step.
- Manifest V3 on both browsers.

## Quick start

Firefox: install from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/toggle-github-details/).

Chrome, Edge or Brave (no store listing):

1. Clone or download this repository.
2. Open `chrome://extensions/`, turn on Developer mode, click Load unpacked and pick the repository folder.
3. Open any pull request with collapsed blocks and click the toolbar icon.

## Documentation

- [How it works](docs/how-it-works.md): the two scripts, the message between them, and the browser table

## License

[GPL-3.0-or-later](LICENSE)
