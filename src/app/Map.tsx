import React, { useState, useRef } from "react";
import useLazyLoad from "../hook/useLazyLoad";
import { useImageModal } from "../hook/Gallery";

export const MapHero = () => {
  const { isOpen, imageSrc, openModal, closeModal } = useImageModal();

  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef({ lastX: 0, lastY: 0 });

  const [sectionRef, isVisible] = useLazyLoad({ rootMargin: "0px" });

  const imageUrl =
    "https://scpwestfield.com.my/wp-content/webp-express/webp-images/uploads/2026/03/location-map2.jpg.webp";

  const handleClose = () => {
    setIsZoomed(false);
    setPosition({ x: 0, y: 0 });
    closeModal();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isZoomed) return;
    setIsDragging(true);
    scrollRef.current = { lastX: e.clientX, lastY: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isZoomed) return;

    const deltaX = e.clientX - scrollRef.current.lastX;
    const deltaY = e.clientY - scrollRef.current.lastY;

    setPosition((prev) => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));

    scrollRef.current = { lastX: e.clientX, lastY: e.clientY };
  };

  const stopDragging = () => setIsDragging(false);

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isZoomed) {
      setPosition({ x: 0, y: 0 });
    }
    setIsZoomed(!isZoomed);
  };

  const rightSlide = `
    transition-all duration-1500 ease-in-out
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-128"}
  `;

  return (
    <>
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        onClick={() => openModal(imageUrl)}
        className={`${rightSlide} cursor-pointer group relative overflow-hidden rounded-lg border border-gray-200`}
      >
        <img
          src={imageUrl}
          alt="map"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 overflow-hidden select-none"
          onClick={handleClose}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          <button
            className="fixed top-10 right-10 text-white text-4xl z-110 cursor-pointer"
            onClick={handleClose}
          >
            &times;
          </button>

          <img
            src={imageSrc || ""}
            alt="Zoomed"
            draggable={false}
            className={`
              transition-transform duration-100 ease-out
              ${isZoomed ? "scale-125 cursor-grab active:cursor-grabbing" : "max-w-[90%] max-h-[90%] cursor-zoom-in"}
              object-contain
            `}
            style={{
              transform: isZoomed
                ? `translate(${position.x}px, ${position.y}px) scale(1.25)`
                : undefined,
            }}
            onMouseDown={handleMouseDown}
            onClick={!isDragging ? toggleZoom : undefined}
          />
        </div>
      )}
    </>
  );
};
