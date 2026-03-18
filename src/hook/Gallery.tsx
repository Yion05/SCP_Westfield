import { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-70 transition-opacity duration-300 py-24"
      onClick={onClose}
    >
      <div onClick={onClose} className="relative inset-0"></div>
      <div
        ref={contentRef}
        className="absolute max-w-5xl py-8 px-8 bg-background-800 rounded-lg shadow-2xl self-start"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-accent duration-500 cursor-pointer hover:text-black rounded-full p-2 z-50 transition"
          aria-label="Close image gallery"
        >
          <FaTimes className="text-xl" />
        </button>

        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          limitToBounds={false}
        >
          <TransformComponent wrapperClass="w-full h-full">
            <img
              src={imageUrl}
              alt="Zoomable Gallery Image"
              className="w-full h-full object-contain"
            />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default ImageModal;
