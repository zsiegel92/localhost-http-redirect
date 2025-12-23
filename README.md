# Localhost HTTPS to HTTP

A simple Chrome extension that automatically redirects `https://localhost:3000/api/auth/callback` to `http://localhost:3000/api/auth/callback` when SSL errors occur.

## Why?

OAuth callbacks sometimes redirect to `https://localhost:3000/api/auth/callback`, but local dev servers typically don't have valid SSL certificates. Chrome shows `ERR_SSL_PROTOCOL_ERROR` and the callback fails. This extension detects that error and redirects to HTTP automatically.

## Install

1. Go to `chrome://extensions/`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select this folder

## How it works

The extension listens for SSL-related navigation errors on `localhost` and redirects to the HTTP version of the same URL.
