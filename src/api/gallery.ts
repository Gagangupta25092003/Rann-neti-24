import csv from "csvtojson";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTNfCvp-k03Id1DuoptahhuQJqGSjjzFiyxbcfLzQNKFE4aN-6SLRkz2_NSXX5-IRH-nxYVpjIiaj1/pub?output=csv";

// Function to convert Google Drive file URL into an embeddable thumbnail URL
function convertToEmbedUrl(openUrl: string): string {
  if (!openUrl || typeof openUrl !== "string") {
    console.warn("Invalid URL:", openUrl);
    return "";
  }

  // Extract the file ID from the Google Drive URL
  const idMatch = openUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (idMatch && idMatch[1]) {
    // Return the thumbnail link using the extracted file ID
    const embedUrl = `https://drive.google.com/thumbnail?id=${idMatch[1]}`;
    // console.log("Converted URL:", embedUrl);
    return embedUrl;
  }

  console.warn("No ID found in URL:", openUrl);
  return openUrl;
}

// Function to fetch and process Google Sheet data
export async function fetchGoogleSheetData() {
  try {
    const res = await fetch(url);
    const csv_text = await res.text();

    // Convert the CSV text into a JSON array
    const rawData = await csv().fromString(csv_text);

    // Process the data to replace the Image field with the embeddable URL
    const processedData = rawData.map((row: any) => ({
      ...row,
      Image: convertToEmbedUrl(row.Image), // Convert Google Drive image URLs to embeddable URLs
    }));

    console.log("Processed Data:", processedData);
    return processedData;
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    return [];
  }
}
