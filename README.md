# SurpriseVista - Single Page E‑commerce (React + Tailwind)

A minimal, premium-looking single-page eCommerce prototype for SurpriseVista Gifts. Built with React and Tailwind CSS, ready to deploy to **GitHub Pages**. Includes sample products, cart, checkout flow, and an enquiry form that posts to a Google Apps Script endpoint to store submissions into Google Sheets (with optional Google Auth later).

## Quick start (local)

1. Install Node 18+ and npm
2. `npm install`
3. `npm run dev` (or `npm run build` + `npm run serve`)

## Deploy to GitHub Pages

1. Create repository `surprisevista` on GitHub
2. Push code
3. In `package.json` set `homepage` to `https://<your-username>.github.io/<repo-name>`
4. Add `gh-pages` deploy script (already present)
5. `npm run build && npm run deploy`

## Enquiry & Customer data -> Google Sheets

This template posts enquiry & checkout data to a Google Apps Script Web App which writes to a Google Sheet. Steps:

1. Create a Google Sheet, add headers: `Timestamp, Name, Mobile, Email, Message, Source`
2. Open **Extensions → Apps Script** and create a new script using the code in `google_apps_script.gs` (provided below). Save and deploy as a Web App (Execute as: Me, Who has access: Anyone, even anonymous) or protect it with OAuth (for restricted writes).
3. Copy the Web App URL and set it into `window.ENQUIRY_WEBHOOK` constant inside `src/App.jsx` (or replace in App.jsx).

**Apps Script (simple write)**

```javascript
// google_apps_script.gs
function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById('YOUR_SHEET_ID'); 
    var sheet = ss.getSheetByName('Sheet1');
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.name || '', data.mobile || '', data.email || '', data.message || '', data.source || 'web']);
    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', error: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
```

**Security note**: Deploying as "Anyone, even anonymous" lets the web accept posts without auth; for production, restrict and use OAuth or include a secret token that the Apps Script checks.

