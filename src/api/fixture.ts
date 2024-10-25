import csv from 'csvtojson';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9R4HEFrE61zEVvuJJaj_JDvIzROkQF5dNKFIBfjkPyZdCd9RhoYZyj2Gi09CRhL2kbw639vESj-ku/pub?output=csv';

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
