"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (selectedImageIndex - 1 + images.length) % images.length;
        setSelectedImageIndex(prevIndex);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (selectedImageIndex + 1) % images.length;
        setSelectedImageIndex(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, images.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (selectedImageIndex! - 1 + images.length) % images.length;
    setSelectedImageIndex(prevIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (selectedImageIndex! + 1) % images.length;
    setSelectedImageIndex(nextIndex);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className={`mt-8 grid gap-5 ${images.length > 3 ? 'grid-cols-2 md:grid-cols-3' : 'lg:h-136 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] lg:grid-rows-2'}`}>
        {images.length > 3 ? (
          // Simple grid for more than 3 images
          images.map((visual, index) => (
            <Reveal
              key={visual}
              delay={index * 0.04}
            >
              <div 
                className="relative aspect-4/3 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-card cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={visual}
                  alt={`${projectTitle} showcase ${index + 1}`}
                  width={600}
                  height={800}
                  className="h-full w-full object-contain transition duration-500 hover:scale-105 drop-shadow-lg"
                />
              </div>
            </Reveal>
          ))
        ) : (
          // Original layout for 3 or fewer images
          <>
            <Reveal className="h-full lg:row-span-2">
              <div 
                className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white shadow-card cursor-pointer"
                onClick={() => setSelectedImageIndex(0)}
              >
                <Image
                  src={images[0]}
                  alt={`${projectTitle} showcase 1`}
                  width={1600}
                  height={1200}
                  className="aspect-16/11 h-full min-h-96 w-full object-contain transition duration-500 hover:scale-105 lg:aspect-auto lg:min-h-0 drop-shadow-lg"
                />
              </div>
            </Reveal>

            {images.slice(1).map((visual, index) => (
              <Reveal
                key={visual}
                delay={(index + 1) * 0.05}
                className="h-full"
              >
                <div 
                  className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white shadow-card cursor-pointer"
                  onClick={() => setSelectedImageIndex(index + 1)}
                >
                  <Image
                    src={visual}
                    alt={`${projectTitle} showcase ${index + 2}`}
                    width={1200}
                    height={900}
                    className="aspect-16/10 h-full min-h-72 w-full object-contain transition duration-500 hover:scale-105 lg:aspect-auto lg:min-h-0 drop-shadow-lg"
                  />
                </div>
              </Reveal>
            ))}
          </>
        )}
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 sm:p-4"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImageIndex(null);
            }}
            className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Desktop controls (left/right) */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="hidden sm:flex absolute left-4 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={goToNext}
                className="hidden sm:flex absolute right-4 z-10 h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          <div 
            className="relative max-h-[95vh] max-w-[98vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImageIndex]}
              alt={`${projectTitle} showcase ${selectedImageIndex + 1}`}
              width={2000}
              height={1500}
              className="object-contain max-h-[80vh] sm:max-h-[92vh] w-auto max-w-[98vw]"
              priority
            />
            
            {/* Image counter for desktop */}
            {images.length > 1 && (
              <div className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full text-white text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Mobile controls (bottom center) - outside image container */}
          {images.length > 1 && (
            <div className="sm:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[60] flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              
              {/* Image counter for mobile */}
              <div className="px-4 py-2 bg-black/70 rounded-full text-white text-sm shadow-lg">
                {selectedImageIndex + 1} / {images.length}
              </div>

              <button
                onClick={goToNext}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-all hover:scale-110 shadow-lg"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
