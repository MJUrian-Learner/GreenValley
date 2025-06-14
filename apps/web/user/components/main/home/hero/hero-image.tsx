"use client";
import { HERO_IMAGES } from "@/constants";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useElementHeight } from "@/hooks/useElementHeight";
import {
  AnimatePresence,
  motion,
  PanInfo,
  useDragControls,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  HERO_IMAGES_DRAGGING_THRESHOLD,
  HERO_IMAGES_GALLERY_HEIGHT_RATIO,
  HERO_IMAGES_IMAGE_CONTENT_HEIGHT_RATIO,
} from "@/constants";

// Generate random rotation number in range of -10 to 10
const generateRandomRotation = () => Math.floor(Math.random() * 21) - 10;

function HeroImage() {
  const [active, setActive] = useState(0);
  const [randomRotateYValue, setRandomRotateYValue] = useState<number[]>([]);

  const dragControls = useDragControls();
  const heroSectionHeight = useElementHeight("hero-section");

  useEffect(() => {
    const rotations = HERO_IMAGES.map(() => generateRandomRotation());

    setRandomRotateYValue(rotations);
  }, []);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = HERO_IMAGES_DRAGGING_THRESHOLD; // minimum distance to trigger swipe
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        // Swipe right - go to previous
        setActive(
          (prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length
        );
      } else {
        // Swipe left - go to next
        setActive((prev) => (prev + 1) % HERO_IMAGES.length);
      }
    }
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const handlePrevious = () => {
    setActive((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const isActive = (index: number) => index === active;

  return (
    <div className="w-11/12 mx-auto">
      <div
        className="relative"
        style={{
          height: `${heroSectionHeight * HERO_IMAGES_GALLERY_HEIGHT_RATIO}px`,
        }}
      >
        <AnimatePresence initial={false}>
          {HERO_IMAGES.map(({ src, alt, title, description }, index) => {
            const rotation = randomRotateYValue[index] || 0;
            return (
              <motion.div
                key={index}
                drag="x"
                dragControls={dragControls}
                onDragEnd={handleDragEnd}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: rotation,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.98,
                  zIndex: isActive(index) ? 40 : HERO_IMAGES.length + 2 - index,
                  y: isActive(index) ? [0, -100, 0] : 0,
                  x: isActive(index) ? [0, -100, 0] : 15,
                  rotate: isActive(index) ? 0 : rotation,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: rotation,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom cursor-grab active:cursor-grabbing"
              >
                <Card className="p-6 shadow-2xl">
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
                    style={{
                      height: `${
                        heroSectionHeight *
                        HERO_IMAGES_IMAGE_CONTENT_HEIGHT_RATIO
                      }px`,
                    }}
                  >
                    <Image src={src} alt={alt} fill draggable={false} />
                  </CardContent>
                  <CardFooter className="flex justify-between items-center gap-36">
                    {isActive(index) ? (
                      <>
                        <div>
                          <h3 className="text-lg font-bold leading-tight">
                            {title}
                          </h3>
                          <p className="text-muted-foreground">{description}</p>
                        </div>
                        <Badge className="bg-accent text-foreground hover:bg-accent/90 cursor-default rounded-full px-3">
                          See more
                        </Badge>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col gap-2">
                          <Skeleton className="h-4 w-[250px] rounded-lg" />
                          <Skeleton className="h-4 w-[200px] rounded-lg" />
                        </div>
                        <Skeleton className="h-5 w-20 rounded-full" />
                      </>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center gap-2 py-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevious}
          className="text-primary! hover:bg-primary/10! size-6"
        >
          <ChevronLeft className="size-4" />
        </Button>
        {HERO_IMAGES.map((_, index) => (
          <Button
            onClick={() => setActive(index)}
            key={index}
            className={`h-2! w-2! p-0! rounded-full transition-all duration-300 ${
              isActive(index) ? "bg-primary" : "bg-primary/30"
            }`}
          />
        ))}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="text-primary! hover:bg-primary/10! size-6"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export default HeroImage;
