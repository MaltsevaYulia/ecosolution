import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';
import CasesSlide from '../CasesSlide/CasesSlide';
import { useMediaQuery } from '@react-hook/media-query';



const CasesSlider = ({ onSlideChange, items, refference }) => {
const isScreenSmall = useMediaQuery('(max-width: 767px)');

  const elements = items.map(item => (
    <SwiperSlide key={item.id}>
      <CasesSlide key={item.id} item={item} />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        style={{ width: '100%' }}
        onSlideChange={onSlideChange}
        ref={refference}
        slidesPerView={isScreenSmall ? 1 : 2}
        spaceBetween={12}
        freeMode={true}
        centeredSlides={false}
        loop={true}
        modules={[Pagination]}
      >
        {elements}
      </Swiper>
    </>
  );
};

export default CasesSlider;
