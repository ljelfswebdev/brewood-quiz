"use client"
import Question from '../../../components/slide';
import data from '../../../data/round-7.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import createPagination from '../../../components/pagination';

const RoundSeven = () => {
    const totalBullets = data.length + 2; // 2 extra bullets for '-' at the beginning and end
    const pagination = createPagination(totalBullets);
    const hasTitle = data.some(item => item.title);
    const titleItem = data.find(item => item.title);

    return ( 
        <>
        <Swiper         
            pagination={pagination}
            modules={[Pagination]} 
            className="swiper"
        >
        {hasTitle && <SwiperSlide className="page__slide">Round 7 - {titleItem.title}</SwiperSlide>}
            {data.map(item => (
                item.id ? (
                    <SwiperSlide key={item.id}>
                        <Question item={item} />
                    </SwiperSlide>
                ) : null
            ))}
        <SwiperSlide className="page__slide">End Of Round 7</SwiperSlide>
        </Swiper>
      </>
     );
}
 
export default RoundSeven;