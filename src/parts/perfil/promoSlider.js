
import upload from "../img/upload-na-nuvem.png";

const PromoSlider = () => {
    return (
        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="swiper-container">
        
        <ul className="swiper-wrapper">
            <SwiperSlide className="card-promo swiper-slider">
                    <div className="img-produto">
                        <figure>
                            <img src={upload} alt="icone de upload" />
                        </figure>
                    </div>
                    <div className="info-produto">
                        <div className="info-put">
                            <label>Nome do Produto</label>
                            <input type="text" />
                        </div>
                        <div className="info-put">
                            <label>Preço Original</label>
                            <input type="text" />
                        </div>
                        <div className="info-put">
                            <label>Preço de Promoção</label>
                            <input type="text" />
                        </div>      
                    </div>
                    <div className="action-buttons">
                        <button>Salva</button>
                        <button>Remover</button>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="card-promo">
                    <div className="img-produto">
                        <figure>
                            <img src={upload} alt="icone de upload" />
                        </figure>
                    </div>
                    <div className="info-produto">
                        <div className="info-put">
                            <label>Nome do Produto</label>
                            <input type="text" />
                        </div>
                        <div className="info-put">
                            <label>Preço Original</label>
                            <input type="text" />
                        </div>
                        <div className="info-put">
                            <label>Preço de Promoção</label>
                            <input type="text" />
                        </div>      
                    </div>
                    <div className="action-buttons">
                        <button>Salva</button>
                        <button>Remover</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="card-promo">
                    <div className="img-produto">
                        <figure>
                            <img src={upload} alt="icone de upload" />
                        </figure>
                    </div>
                    <div className="info-produto">
                        <div className="info-put">
                            <label>Nome do Produto</label>
                            <input type="text" />
                        </div>
                        <div className="info-put">
                            <label>Preço Original</label>
                            <input type="text" />
                        </div>
                        <div className="info-put">
                            <label>Preço de Promoção</label>
                            <input type="text" />
                        </div>      
                    </div>
                    <div className="action-buttons">
                        <button>Salva</button>
                        <button>Remover</button>
                    </div>
                </SwiperSlide>
                
        </ul>
    </Swiper>
    )
}

export default PromoSlider;