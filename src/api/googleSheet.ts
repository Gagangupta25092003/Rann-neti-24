import csv from 'csvtojson';

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR4W5J9-Q41MiFzovn8OIsbxQGwlLZakky7jvmaVBqsN-kY4e39DofAtLUu_YpLTWtpf1Ur6udvITq7/pub?output=csv';

function convertToEmbedUrl(openUrl: string): string {
  if (!openUrl || typeof openUrl !== 'string') {
    console.warn('Invalid URL:', openUrl);
    return '';
  }

  const idMatch = openUrl.match(/id=([^&]+)/);
  if (idMatch && idMatch[1]) {
    const embedUrl = `https://drive.google.com/uc?export=view&id=${idMatch[1]}`;
    console.log('Converted URL:', embedUrl);
    return embedUrl;
  }

  console.warn('No ID found in URL:', openUrl);
  return openUrl;
}

export async function fetchGoogleSheetData() {
  try {
    const res = await fetch(url);
    const csv_text = await res.text();
    const rawData = await csv().fromString(csv_text);
    const processedData = rawData.map((row: any) => ({
      ...row,
      Image: convertToEmbedUrl(row.Image)
    }));

    console.log('Processed Data:', processedData);
    return processedData;
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error);
    return [];
  }
}
