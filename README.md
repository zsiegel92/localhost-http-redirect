# Localhost HTTPS to HTTP

A simple Chrome extension that automatically redirects `https://localhost:...` to `http://localhost:...` when SSL errors occur.

## Why?

Sometimes local development servers don't have valid SSL certificates, causing Chrome to show `ERR_SSL_PROTOCOL_ERROR`. This extension detects that error and redirects to HTTP automatically.

## Install

1. Go to `chrome://extensions/`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select this folder

## How it works

The extension listens for SSL-related navigation errors on `localhost` and redirects to the HTTP version of the same URL.
