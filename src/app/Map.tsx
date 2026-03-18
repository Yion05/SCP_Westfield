import React, { useState } from "react";
import useLazyLoad from "../hook/useLazyLoad";
import ImageModal from "../hook/Gallery";

export const MapHero = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const [sectionRef, isVisible] = useLazyLoad({
    rootMargin: "0px 0px 0px 0px",
  });

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-128"}
  `;

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      onClick={() =>
        openModal(
          `https://scpwestfield.com.my/wp-content/webp-express/webp-images/uploads/2026/03/location-map2.jpg.webp`,
        )
      }
      className={`${rightSlide} cursor-pointer`}
    >
      <img
        src="https://scpwestfield.com.my/wp-content/webp-express/webp-images/uploads/2026/03/location-map2.jpg.webp"
        alt="living slide"
        className={`object-contain`}
      />
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};
