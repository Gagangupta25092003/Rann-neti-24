import csv from 'csvtojson';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS5DEJFnRp52gzPSYGmR-4pc8ZNsRpPzV_erl57zljurrQfSOPnxGGfJUylVzlUHJE01snvmBG5QSjq/pub?output=csv';

export async function fetchGoogleSheetData() {
  try {
    const res = await fetch(url);
    const csv_text = await res.text();
    const rawData = await csv().fromString(csv_text);
    const processedData = rawData.map((row: any) => ({
      ...row,
      Image: row.Image
    }));
    return processedData;
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    return [];
  }
}
