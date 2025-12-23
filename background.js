// Listen for navigation errors on localhost:3000/api/auth/callback
chrome.webNavigation.onErrorOccurred.addListener(
  (details) => {
    const url = new URL(details.url);
    
    // Only handle localhost:3000/api/auth/callback
    if (url.host !== "localhost:3000" || !url.pathname.startsWith("/api/auth/callback")) {
      return;
    }
    
    // Check if it's an SSL-related error
    if (details.error === "net::ERR_SSL_PROTOCOL_ERROR" || 
        details.error === "net::ERR_CERT_AUTHORITY_INVALID" ||
        details.error === "net::ERR_CERT_COMMON_NAME_INVALID" ||
        details.error.includes("SSL") ||
        details.error.includes("CERT")) {
      
      // Replace https with http
      const httpUrl = details.url.replace("https://", "http://");
      chrome.tabs.update(details.tabId, { url: httpUrl });
    }
  },
  { url: [{ schemes: ["https"] }] }
);
