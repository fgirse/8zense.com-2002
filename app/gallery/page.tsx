"use client"

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";
export default function Example() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>

    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem><Image src="/assets/images/LogoEZ.png" width={200} height={160} alt="Logo"/></CarouselItem>
        <CarouselItem><Image src="/assets/images/sideboardobg.png" width={200} height={160} alt="Logo"/></CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
    </>
  )
}
