"use client"
import React, { useState } from 'react';
import Question from '../../../components/slide';
import data from '../../../data/round-8.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import createPagination from '../../../components/pagination';

const RoundEight = ({ folder = '/', is_image_round = false }) => {
    const totalBullets = data.length + 2; // 2 extra bullets for '-' at the beginning and end
    const pagination = createPagination(totalBullets);
    const [activeSlide, setActiveSlide] = useState(0); // Track the current active slide
    const hasTitle = data.some(item => item.title);
    const titleItem = data.find(item => item.title);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);  // Update the activeSlide when the slide changes
    };

    return ( 
        <>
            <Swiper
               pagination={pagination}
                modules={[Pagination]}
                className="swiper"
                onSlideChange={handleSlideChange}
            >
                {hasTitle && <SwiperSlide className="page__slide">Round 8 - {titleItem.title}</SwiperSlide>}

                {data.map((item, index) => (
                    item.id ? (
                        <SwiperSlide key={item.id}>
                            <Question 
                                item={item} 
                                isActive={activeSlide === index}  // Pass if this slide is active
                                is_image_round={is_image_round}  // Pass the is_image_round boolean
                                folder={folder}  // Pass the folder for dynamic image path
                            />
                        </SwiperSlide>
                    ) : null
                ))}
                
                <SwiperSlide className="page__slide">End Of Round 8</SwiperSlide>
            </Swiper>
        </>
    );
}

export default RoundEight;
