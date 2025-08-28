import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const slides = [
    {
        title: 'Custom Software Solutions',
        description: 'Tailored applications to meet your business needs.',
        background: '/images/slide2.jpg'
    },
    {
        title: 'Cloud & DevOps Services',
        description: 'Optimize your infrastructure with scalable cloud solutions.',
        background: '/images/slide3.jpg'
    },
    {
        title: 'AI & Automation',
        description: 'Enhance productivity through intelligent automation.',
        background: '/images/slide3.jpg'
    }
];

export default function HeroCarousel() {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="heroSwiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="hero-slide"
                        style={{
                            backgroundImage: `url(${slide.background})`,
                        }}
                    >
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
