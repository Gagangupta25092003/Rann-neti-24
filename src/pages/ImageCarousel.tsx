import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQe_1BJKgVUkOKbAZ72hd3ogGpWV_UKnORVel7r_ahgZoR6QqTa-qtfA_oszs4_IfLNs0Lic3SRCEUG/pub?output=csv";

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(csvUrl);
      const csvText = await response.text();

      const rows = csvText.split("\n");
      const imageUrls = rows.map((row) => row.split(",")[0].trim());
      setImages(imageUrls.filter((url) => url));
    };

    fetchImages();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [csvUrl]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const displayedImages =
    screenWidth < 480
      ? [images[currentIndex]] // One image below 480px
      : screenWidth < 620
      ? images.slice(currentIndex, currentIndex + 2) // Two images between 480px and 620px
      : images.slice(currentIndex, currentIndex + 3); // Three images on larger screens

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
          justifyContent: screenWidth < 480 ? "center" : "space-between",
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
              width:
                screenWidth < 480
                  ? "220px"
                  : screenWidth < 620
                  ? "44%"
                  : "150px", // Adjust width to 44% between 480px and 620px
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              // alt={carousel-${currentIndex}}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>

      {/* Button Container */}
      <div
        style={{
          display: "flex",
          justifyContent: screenWidth < 768 ? "space-between" : "center",
          width: "100%",
          marginTop: screenWidth < 768 ? "10px" : "0", // Add margin below image container for smaller screens
          position: screenWidth >= 768 ? "absolute" : "static", // Absolute for larger screens
          top: screenWidth >= 768 ? "50%" : "auto", // Vertically center buttons for large screens
          transform: screenWidth >= 768 ? "translateY(-50%)" : "none", // Adjust for large screens
        }}
      >
        {/* Previous Button */}
        <button
          onClick={prevImage}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            position: screenWidth >= 768 ? "absolute" : "static", // Absolute for larger screens
            left: screenWidth >= 768 ? "10px" : "auto", // Close to the image on larger screens
          }}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            position: screenWidth >= 768 ? "absolute" : "static", // Absolute for larger screens
            right: screenWidth >= 768 ? "10px" : "auto", // Close to the image on larger screens
          }}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;