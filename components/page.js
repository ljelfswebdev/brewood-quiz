"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Question from './slide';

const Page = ({data, item}) => {

    const hasTitle = data.some(item => item.title);
    const titleItem = data.find(item => item.title);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span class="index">' + (index + 1) + '</span>' + '</span>';
        },
      };

    return ( 
        <>
        <Swiper         
            pagination={pagination}
            modules={[Pagination]} 
            className="swiper"
        >
        {hasTitle && <SwiperSlide>{titleItem.title}</SwiperSlide>}
            {data.map(item => (
                item.id ? (
                    <SwiperSlide key={item.id}>
                        <Question item={item} />
                    </SwiperSlide>
                ) : null
            ))}
        <SwiperSlide>End Of Round 1</SwiperSlide>
        </Swiper>
      </>
     );
}
 
export default Page;