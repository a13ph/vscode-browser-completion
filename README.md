# vscode-browser-completion

Webpage words completion source for VS Code

---

![](./images/demo.png)

---

## Installation

- **Make sure your 8888 port is open**

  That port is used to communicate with browser

- **Install the browser extension**

  Browser extension grabs words from web page and send them to local server

  - For Google Chrome: [link](https://chrome.google.com/webstore/detail/browser-source-provider/lkaldcfmhailjfcbapicgkdkkamanlml)
  - For Firefox: [link](https://addons.mozilla.org/firefox/addon/voldikss/)

- **Install this extension from the [marketplace](https://marketplace.visualstudio.com/items?itemName=voldikss.vscode-browser-completion)**

## Configurations

| Name                          | Default         | Description                                                 |
| ----------------------------- | --------------- | ----------------------------------------------------------- |
| `browserCompletion.capacity`  | `5`             | Count of cache files which are used to storage words, 1~10. |
| `browserCompletion.filetypes` | `['plaintext']` | Enable browser completion for those filetypes.              |

## Usage

Words from webpage will be added to completion candidates once you open a new page or refresh a page.

## References

- [coc-browser](https://github.com/voldikss/coc-browser) Webpage words completion in (Neo)Vim

- [browser-source-provider](https://github.com/voldikss/browser-source-provider) Browser extension used to grab words from webpage

## Credits

<div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>

## Donation

- Paypal

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/voldikss)

- Wechat Pay

<div>
<img src="https://user-images.githubusercontent.com/20282795/64410950-b3c66c80-d0be-11e9-8500-973382366324.jpg" width=150>
</div>

## License

MIT
