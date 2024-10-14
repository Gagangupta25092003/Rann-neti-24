import csv from 'csvtojson';

const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA7Fvb6sojucw5bfktjp7ixJQMBAdbZgeOMv3vIWowk3x9NCtzsTml3jgmpoUfH3Hperlr00YlWFek/pub?output=csv';

export async function fetchGoogleSheetData() {
  try {
    const response = await fetch(sheetUrl);
    const csvText = await response.text();
    const jsonData = await csv().fromString(csvText);
    console.log(jsonData)
    return jsonData;
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    return [];
  }
}