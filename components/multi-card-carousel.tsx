"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MultiCardCarouselProps {
  children: React.ReactNode[]
  itemsPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  gap?: string
  autoPlay?: boolean
  interval?: number
}

export function MultiCardCarousel({
  children,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "1rem",
  autoPlay = false,
  interval = 4000,
}: MultiCardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop)
  const [isHovered, setIsHovered] = useState(false)

  const totalSlides = Math.max(1, Math.ceil(children.length / itemsToShow))

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }, [totalSlides])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(itemsPerView.mobile)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet)
      } else {
        setItemsToShow(itemsPerView.desktop)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [itemsPerView])

  useEffect(() => {
    if (autoPlay && !isHovered && totalSlides > 1) {
      const timer = setInterval(goToNext, interval)
      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, totalSlides, isHovered, goToNext])

  // Reset current index if it's out of bounds after resize
  useEffect(() => {
    const newTotalSlides = Math.max(1, Math.ceil(children.length / itemsToShow))
    if (currentIndex >= newTotalSlides) {
      setCurrentIndex(0)
    }
  }, [itemsToShow, children.length, currentIndex])

  if (children.length === 0) return null

  return (
    <div className="relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-shrink-0 grid"
              style={{
                gridTemplateColumns: `repeat(${itemsToShow}, 1fr)`,
                gap: gap,
              }}
            >
              {children.slice(slideIndex * itemsToShow, (slideIndex + 1) * itemsToShow).map((child, childIndex) => (
                <div key={childIndex} className="min-h-0">
                  {child}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {totalSlides > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
