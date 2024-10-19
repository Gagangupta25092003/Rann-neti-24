import React, { useState, useEffect } from 'react'
import { fetchGoogleSheetData } from "../api/sponserSheet.ts";

export default function Sponsors() {
  const [images, setimages] = useState<Sponser[]>([]);
  const [loading, setLoading] = useState(true);

  type Sponser = {
    image: string;
    name: string;
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchGoogleSheetData();
      const sections = data.map((row: any) => ({
        image: row.Image,
        name: row.Name,
      }));
      setimages(sections);
      setLoading(false);
    }

    fetchData();
  }, [])

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
    <section className="bg-gray-900 py-4 text-xl">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-2 text-center">Our Sponsors</h2>
        <div className="flex justify-center ">
          {images.map((sponser, index) => (
          <div key={index} className=" h-24 md:h-36 flex justify-center items-center p-2 shadow-2xl rounded-lg transform hover:scale-110 transition-transform duration-300 gap-10">
            <img
              src={sponser.image}
              alt={sponser.name}
              className="max-h-full max-w-full object-contain rounded-xl"
            />
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}