// "use client"
// import Question from '../../../components/slide';
// import data from '../../../data/round-2.json';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import createPagination from '../../../components/pagination';

// const RoundTwo = () => {
//     const totalBullets = data.length + 2; // 2 extra bullets for '-' at the beginning and end
//     const pagination = createPagination(totalBullets);

//     const hasTitle = data.some(item => item.title);
//     const titleItem = data.find(item => item.title);

//     return ( 
//         <>
//         <Swiper         
//             pagination={pagination}
//             modules={[Pagination]} 
//             className="swiper"
//         >
//         {hasTitle && <SwiperSlide className="page__slide">Round 2 - {titleItem.title}</SwiperSlide>}
//             {data.map(item => (
//                 item.id ? (
//                     <SwiperSlide key={item.id}>
//                         <Question item={item} />
//                     </SwiperSlide>
//                 ) : null
//             ))}
//         <SwiperSlide className="page__slide">End Of Round 2</SwiperSlide>
//         </Swiper>
//       </>
//      );
// }
 
// export default RoundTwo;


"use client"
import React, { useState } from 'react';
import Question from '../../../components/slide';
import data from '../../../data/round-3.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import createPagination from '../../../components/pagination';

const RoundThree = () => {
    const totalBullets = data.length + 2; // 2 extra bullets for '-' at the beginning and end
    const pagination = createPagination(totalBullets);
    const [activeSlide, setActiveSlide] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false); // Initialize showAnswer state
    const hasTitle = data.some(item => item.title);
    const titleItem = data.find(item => item.title);


    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex);
        setShowAnswer(false); // Reset showAnswer when the slide changes
    };

    const toggleAnswer = () => {
        setShowAnswer(prevShowAnswer => !prevShowAnswer);
    };

    return ( 
        <>
            <Swiper
               pagination={pagination}
                modules={[Pagination]}
                className="swiper"
                onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
                {hasTitle && <SwiperSlide className="page__slide">Round 3 - {titleItem.title}</SwiperSlide>}
                {data.map((item, index) => (
                    item.id ? (
                        <SwiperSlide key={item.id} className="video-slide">
                            <h2 className="page__slide-title page__slide-title--video">Question {item.id}</h2>
                            <img className="page__slide-image page__slide-image--flag" src={`/lost/${item.question}`} alt=""/>
                            <span className="page__slide-reveal" onClick={toggleAnswer}>
                                {activeSlide === index ? (showAnswer ? 'Hide Answer' : 'Show Answer') : ''}
                            </span>
                            {activeSlide === index && (
                                <p className={`page__slide-answer ${showAnswer ? 'page__slide-answer-show' : ''}`}>
                                    {item.answer}
                                </p>
                            )}
                        </SwiperSlide>

                        // <SwiperSlide key={item.id}>
                        //     <Question item={item} />
                        // </SwiperSlide>
                    ) : null
                ))}
                <SwiperSlide className="page__slide">End Of Round 3</SwiperSlide>
            </Swiper>
      </>
     );
}
 
export default RoundThree;
