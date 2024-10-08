import React, { FC } from 'react';

import Speed from '../../../public/assets/images/speed.png';
import Theme from '../../../public/assets/images/custom-theme.png';
import MobileApp from '../../../public/assets/images/mobile-app.png';
import SEO from '../../../public/assets/images/seo-optimized.png';
import Visitors from '../../../public/assets/images/unlimited-visitors.png';
import QRCode from '../../../public/assets/images/qr-code.png';
import { SliderImage, StyledSlider } from './Slider.styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

type SliderProps = {};

const Slider: FC<SliderProps> = () => {
  return (
    <StyledSlider>
      <Swiper
        allowTouchMove={false}
        centeredSlides
        slidesPerView={2}
        speed={500}
        modules={[Pagination, Autoplay]}
        effect={'coverflow'}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <SliderImage
            src={Speed}
            alt={'Load in less than 100 ms'}
            draggable={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            src={Theme}
            alt={'Custom theme designers'}
            draggable={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            src={MobileApp}
            alt={'Mobile app for iOS and Android'}
            draggable={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={SEO} alt={'SEO Optimized'} draggable={false} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage
            src={Visitors}
            alt={'Unlimited visitors'}
            draggable={false}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={QRCode} alt={'QR codes'} draggable={false} />
        </SwiperSlide>
      </Swiper>
    </StyledSlider>
  );
};

export default Slider;
