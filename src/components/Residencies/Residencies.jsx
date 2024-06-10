import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider'
import { sliderSettings } from '../../utils/common'

function Residencies() {
    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                
                <Swiper {...sliderSettings}>
                <SliderButtons/>
                    {
                        data.map((card, id) => (
                            <SwiperSlide key={id}>
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="" />
                                    <span className="r-price secondaryText">
                                        <span>{card.price}</span><span style={{ color: 'orange' }}>$</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className='secondaryText'>{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies

const SliderButtons=  () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    );
};