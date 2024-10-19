import csv from 'csvtojson';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQx29uFLP5OCzcLfr-62wpCYfliJk-0obFrPJFaA2FlPQjL-KeRtuaFtOWsvqwXgKb0aGz26-IF61lP/pub?output=csv';

export async function fetchGoogleSheetData() {
  try {
    const res = await fetch(url);
    const csv_text = await res.text();
    const Data = await csv().fromString(csv_text);
    return Data;
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    return [];
  }
}
