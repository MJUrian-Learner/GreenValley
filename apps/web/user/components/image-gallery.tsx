"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useDragControls,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ImageGalleryProps {
  images: string[];
  height: number;
}

const titles = ["Community Hall", "Basketball Court", "Volleyball Court"];

function ImageGallery({ images, height }: ImageGalleryProps) {
  const [active, setActive] = useState(0);
  const dragControls = useDragControls();

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50; // minimum distance to trigger swipe
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Swipe right - go to previous
        setActive((prev) => (prev - 1 + images.length) % images.length);
      } else {
        // Swipe left - go to next
        setActive((prev) => (prev + 1) % images.length);
      }
    }
  };

  const isActive = (index: number) => {
    return index === active;
  };

  return (
    <div className="px-10">
      <div className="relative" style={{ height: `${height * 0.75}px` }}>
        <AnimatePresence>
          {images.map((image, index) => (
            <motion.div
              key={index}
              drag="x"
              dragControls={dragControls}
              onDragEnd={handleDragEnd}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                zIndex: isActive(index) ? 40 : images.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom cursor-grab active:cursor-grabbing"
            >
              <Card className="p-6">
                <CardHeader hidden>
                  <CardTitle>Gallery Image {index + 1}</CardTitle>
                  <CardDescription>
                    Interactive image card that can be swiped left or right
                  </CardDescription>
                  <CardAction>
                    Use drag gestures to navigate between images
                  </CardAction>
                </CardHeader>
                <CardContent
                  className="relative h-64 w-full rounded-2xl overflow-hidden"
                  style={{ height: `${height * 0.6}px` }}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    draggable={false}
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold leading-tight">
                      {titles[index]}
                    </h3>
                    <p className="text-muted-foreground">Available Today</p>
                  </div>
                  <Badge className="bg-accent text-foreground hover:bg-accent/90 cursor-default rounded-full px-3">
                    See more
                  </Badge>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <Button
            onClick={() => setActive(index)}
            key={index}
            className={`h-2! w-2! p-0! rounded-full transition-all duration-300 ${
              isActive(index) ? "bg-primary" : "bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
