import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";
import "swiper/css";

const promo = [
    { 'image': './assets/images/slider.png' },
    { 'image': './assets/images/slider-1.png' },
    { 'image': './assets/images/slider-2.png' }
];

const SwiperPromo = () => {
    const swipeRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [progress, setProgress] = useState(100);
    const [autoplayEnabled, setAutoplayEnabled] = useState(true);

    const HandlePrevClick = () => {
        if (swipeRef.current) swipeRef.current.slidePrev();
    };

    const HandleNextClick = () => {
        if (swipeRef.current) swipeRef.current.slideNext();
    };

    const onAutoplayTimeLeft = (swiper, time, progress) => {
        setProgress(1 - progress);
    };

    return (
        <>
            <section
                className="flex flex-col gap-2 mt-8 group relative"
                onMouseEnter={() => setAutoplayEnabled(false)}
                onMouseLeave={() => setAutoplayEnabled(true)}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-10">
                    <div
                        className="h-full bg-blue-400 rounded-sm"
                        style={{ width: `${progress * 100}%`, transition: 'width 0.1s linear' }}
                    />
                </div>

                <div className="flex absolute top-1/2 left-[-1rem] right-[-1rem] z-10 transform -translate-y-1/2 justify-between gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                        onClick={HandlePrevClick}
                        disabled={isBeginning}
                        className={`rounded-full p-3 bg-slate-100 shadow-xl border border-slate-100 text-blue-slate-800 left-[-2rem] items-center transition-colors ease-in duration-300 
            ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-all ease-in-out duration-300 hover:text-slate-900'}`}
                        isIconOnly={true}
                        startIcon={<IoIosArrowBack className="text-2xl font-bold" />}
                    />
                    <Button
                        onClick={HandleNextClick}
                        disabled={isEnd}
                        className={`rounded-full p-3 bg-slate-100 shadow-xl border border-slate-100 text-blue-slate-800 right-[-2rem] items-center transition-colors ease-in duration-300 
            ${isEnd ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 transition-all ease-in-out duration-300 hover:text-slate-900'}`}
                        isIconOnly={true}
                        startIcon={<IoIosArrowForward className="text-2xl font-bold" />}
                    />

                </div>


                <Swiper
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                        340: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 1 }
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swipeRef.current = swiper;
                        if (autoplayEnabled) {
                            swiper.autoplay.start();
                        } else {
                            swiper.autoplay.stop();
                        }
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    modules={[Navigation, Pagination, Autoplay]}
                    className="mySwiper w-full"
                >
                    {promo.map((data, index) => (
                        <SwiperSlide key={index}>
                            <img src={data.image} alt="promo" loading="eager" className="w-full rounded-lg h-[30rem]" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default SwiperPromo;
