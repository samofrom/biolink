import styled from 'styled-components';
import Image from 'next/image';

export const StyledSlider = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  .swiper {
    height: 100%;
  }

  .swiper-wrapper * {
    pointer-events: none;
  }

  .swiper-slide {
    display: flex;
    align-items: center;

    &.swiper-slide-active {
      opacity: 1;
      scale: 1.15;
    }

    &.swiper-slide-next,
    &.swiper-slide-prev {
      opacity: 0.5;
      scale: 0.75;
    }

    transition: all 0.5s ease;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;

    background: ${({ theme }) => theme.colors['bgDark']};
    opacity: 0.1;

    &:hover {
      opacity: 0.2;
    }

    &.swiper-pagination-bullet-active {
      opacity: 1;
      background: ${({ theme }) => theme.colors['blue']};
    }

    transition: all 0.2s ease;
  }
`;

export const SliderImage = styled(Image)`
  width: 240px;
  height: auto;
`;
