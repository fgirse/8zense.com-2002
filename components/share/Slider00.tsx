import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Casr01 from "@/components/share/Card01"
// Import Swiper styles
import "swiper/css";
import"./slider00.module.css"
//import "./styles.css";
import Card01 from"@/components/share/Card01";

export default function App() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-col items-center">

        <Card01/>
        </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
