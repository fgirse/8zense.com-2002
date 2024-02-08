"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "@/components/share/Card01"
import  {Testimonial}  from "@/types";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '@/styles/styles.css'

// import required modules
import { Pagination } from 'swiper/modules';
import Testimonials from '../partials/Testimonials'
import { any, boolean, string } from 'zod';
import SliderCards from '../BV                                                                            £/SliderCards';


const SlightShow2=() => {

  

  return (
    <>

    
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        

        </SwiperSlide>
        <SwiperSlide>
              <SliderCards cards={[]}/>


          
          </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )}
  export default SlightShow2
  
