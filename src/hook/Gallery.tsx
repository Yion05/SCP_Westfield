import { useState, useCallback } from "react";

export const useImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const openModal = useCallback((src: string) => {
    setImageSrc(src);
    setIsOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setImageSrc(null);
    document.body.style.overflow = "unset";
  }, []);

  return { isOpen, imageSrc, openModal, closeModal };
};