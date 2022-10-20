# Highlighter
Chrome Plugin to Highlight the text on a webpage and save it

## Local Setup
- Open Chrome Browser
- Navigate to `chrome://extensions/`
- Enable Developer mode on the right top corner
- Click on `Load unpacked` on top left corner
- Select the plugin to be uploaded
- Pin the plugin so that it appears on the top bar

## Technical Tasks
- Read the select content on a webpage
- Pass the selected text and the url to plugin
- Store the selected text in localstorage with key as url
- Add a download button to download the text saved in localstorage into a file
- Add a button to clear localstorage to avoid any redundant content from getting downloaded

## TODO
- Enable the highlighter on all the webpages instead of default chrome docs i.e. modify `manifest.json`