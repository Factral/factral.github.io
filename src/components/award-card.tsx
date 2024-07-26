"use client";

import { useState } from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Image from 'next/image';

interface AwardCardProps {
  award: string;
  title: string;
  position: string;
  images: readonly string[];
  description: string;
  homepageLink: string;
}

export function AwardCard({
  award,
  title,
  position,
  images,
  description,
  homepageLink,
}: AwardCardProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getGridColumns = (length: number) => {
    if (length === 1) return 'grid-cols-1';
    if (length === 2) return 'grid-cols-2';
    if (length === 3) return 'grid-cols-2 md:grid-cols-3';
    return 'grid-cols-2 md:grid-cols-4';
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Card className="flex flex-col border border-muted shadow-lg w-full md:w-[700px] group transition-transform transform hover:scale-105 hover:shadow-xl mt-8 p-4">
        <CardHeader className="flex flex-col items-center p-0 mb-4">
          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">{award}</span>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="flex items-center mt-2">
            <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">🏆</span>
            <span className="ml-2 text-sm text-muted-foreground">{position}</span>
          </div>
        </CardHeader>
        <CardContent className="">
          <div className={`grid gap-2 ${getGridColumns(images.length)} `}>
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-32 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image src={image} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className="transition-transform hover:scale-105" />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            {description}
          </p>
          <div className="mt-4 flex justify-center">
            <Button asChild size="sm" className="h-8 w-auto gap-1">
              <a href={homepageLink} target="_blank" rel="noopener noreferrer">
                <HomeIcon className="h-4 w-4" />
                Homepage
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 !m-0" onClick={handleCloseModal}>
          <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <Image src={selectedImage} alt="Expanded image" layout="responsive" width={800} height={600} objectFit="contain" />
          </div>
        </div>
      )}
    </>
  );
}
