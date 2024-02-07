import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import cocaLogo from "../img/logococa.png";
import lizaLogo from "../img/logo-liza.png";
import DonaBentaLogo from "../img/Dona_Benta.webp";
import PilaoLogo from "../img/pilao-logo-0.png";
import YokiLogo from "../img/Yoki_logo.png";
import PilecoLogo from "../img/pilecoNobre.png";
import nestleLogo from "../img/logonestle.png";

import './menu.css';

const MarcaSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay, Navigation]}
      className="swiper-container slide-marcas"
    >
      <div className="swiper-wrapper">
        <SwiperSlide>
          <figure>
            <img src={cocaLogo} alt="logo coca cola" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={nestleLogo} alt="logo Nestle" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={YokiLogo} alt="logo Yoki" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={lizaLogo} alt="logo Liza" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={PilaoLogo} alt="logo Pilao" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={PilecoLogo} alt="logo Pileco" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure>
            <img src={DonaBentaLogo} alt="logo Dona benta" />
          </figure>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default MarcaSlider;
