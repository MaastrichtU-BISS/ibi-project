## For Chrome Extension

- expo build:web
- update manifest.json
  ```
  "version": "0.0.1",
  "manifest_version": 2,
  "browser_action": {
    "default_popup": "index.html",
    "default_title": "Open the popup"
  },
  "icons": {
    "16": "/pwa/chrome-icon/chrome-icon-144.png",
    "48": "/pwa/chrome-icon/chrome-icon-192.png",
    "128": "/pwa/chrome-icon/chrome-icon-512.png"
  },
  "permissions": []
  ```
- Remove the fields from manifest.json
  - background_color
  - display
  - lang
  - orientation
  - start_url
- goto chrome://extensions/
- press Load unpacked and choose web-build folder
