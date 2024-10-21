import React, { useEffect, useState } from "react";
import { fetchGoogleSheetData } from "../api/gallery.ts"; // Ensure the path is correct

type GalleryItem = {
  image: string; // Image URL
};

const Gallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGoogleSheetData();

      // Assuming data is an array of objects with 'Image' properties
      const processedData = data.map((row: any) => ({
        image: row.Image, // Ensure 'Image' matches your Google Sheet column name
      }));

      setGalleryItems(processedData);
      setLoading(false);
    }

    fetchData();
  }, []);
  console.log(galleryItems)
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Loading...</h2>
          <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="bg-red-600 h-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1
          className="text-4xl font-bold text-center mb-4"
          style={{ color: "#f0f0f0", textShadow: "2px 2px 5px #b22222" }}
        >
          Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.image}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
