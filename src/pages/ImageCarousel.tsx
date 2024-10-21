import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTTNfCvp-k03Id1DuoptahhuQJqGSjjzFiyxbcfLzQNKFE4aN-6SLRkz2_NSXX5-IRH-nxYVpjIiaj1/pub?output=csv";
  
  // Function to convert Google Drive link to embeddable thumbnail link
  function convertToEmbedUrl(openUrl: string): string {
    if (!openUrl || typeof openUrl !== "string") {
      console.warn("Invalid URL:", openUrl);
      return "";
    }
  
    const idMatch = openUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${idMatch[1]}`;
    }
  
    console.warn("No ID found in URL:", openUrl);
    return openUrl;
  }

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(csvUrl);
      const csvText = await response.text();
      const rows = csvText.split("\n");
      const imageUrls = rows.map((row) => convertToEmbedUrl(row.split(",")[0].trim()));
      setImages(imageUrls.filter((url) => url));
    };

    fetchImages();

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Define small screen size breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [csvUrl]);

  const nextImage = () => {
    if (isSmallScreen) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex + 3 >= images.length ? 0 : prevIndex + 3
      );
    }
  };

  const prevImage = () => {
    if (isSmallScreen) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
      );
    }
  };

  const displayedImages = isSmallScreen
    ? [images[currentIndex]] // Show 1 image on small screens
    : images.slice(currentIndex, currentIndex + 3); // Show 3 images on larger screens

  return (
    <div
      style={{
        width: "80%",
        height: "300px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "500px",
          padding: "0 10px",
        }}
      >
        {displayedImages.map((image, index) => (
          <div
            key={index}
            style={{
              border: "2px solid aliceblue",
              padding: "5px",
              margin: "0 5px",
              width: isSmallScreen ? "220px" : "150px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt={`carousel-${currentIndex}`}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>

      {/* Buttons for navigation */}
      <button
        onClick={prevImage}
        style={{
          position: "absolute",
          left: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={nextImage}
        style={{
          position: "absolute",
          right: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;
