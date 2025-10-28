// Paste this into Google Apps Script editor (Extensions -> Apps Script) and deploy as Web App
function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById('YOUR_SHEET_ID'); // replace with your sheet ID
    var sheet = ss.getSheets()[0];
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.name||'', data.mobile||'', data.email||'', data.message||'', data.source||'web']);
    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', error: err.message})).setMimeType(ContentService.MimeType.JSON);
  }
}
