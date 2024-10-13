import { useRef, useState } from "react";
import { GiPencilBrush } from "react-icons/gi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FcMultipleCameras } from "react-icons/fc";
import { BsBrush } from "react-icons/bs";
import { PiHammerThin, PiCarDuotone, PiMusicNotesMinusThin, PiLaptopDuotone, PiBabyDuotone } from "react-icons/pi";
import { TfiCut } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const categories = [
    {
        id: 1,
        name: 'Pembersih Rumah',
        icon: <GiPencilBrush />,
        description: 'Layanan pembersihan rumah profesional untuk menjaga kebersihan rumah Anda.',
    },
    {
        id: 2,
        name: 'Pengasuh Anak',
        icon: <PiBabyDuotone />,
        description: 'Pengasuh anak berpengalaman yang siap merawat buah hati Anda dengan penuh kasih sayang.',
    },
    {
        id: 3,
        name: 'Pengembang Web',
        icon: <IoCodeSlashOutline />,
        description: 'Pembangunan situs web dan aplikasi dengan developer web yang handal.',
    },
    {
        id: 4,
        name: 'Editor Foto',
        icon: <FcMultipleCameras />,
        description: 'Layanan editing foto profesional untuk mempercantik dan memperbaiki hasil jepretan Anda.',
    },
    {
        id: 5,
        name: 'Desainer Grafis',
        icon: <BsBrush />,
        description: 'Layanan desain grafis kreatif untuk kebutuhan branding dan visual Anda.',
    },
    {
        id: 6,
        name: 'Tukang Bangunan',
        icon: <PiHammerThin />,
        description: 'Tenaga ahli bangunan yang siap membantu Anda dalam pembangunan dan renovasi rumah.',
    },
    {
        id: 7,
        name: 'Tukang Cukur',
        icon: <TfiCut />,
        description: 'Jasa potong rambut dengan tukang cukur profesional yang membuat tampilan Anda lebih segar.',
    },
    {
        id: 8,
        name: 'Montir Mobil',
        icon: <PiCarDuotone />,
        description: 'Layanan perbaikan mobil dan servis kendaraan yang dilakukan oleh montir berpengalaman.',
    },
    {
        id: 9,
        name: 'Guru Musik',
        icon: <PiMusicNotesMinusThin />,
        description: 'Pelajaran musik dengan guru yang berpengalaman untuk meningkatkan kemampuan bermusik Anda.',
    },
    {
        id: 10,
        name: 'Ahli IT',
        icon: <PiLaptopDuotone />,
        description: 'Layanan konsultasi dan perbaikan komputer serta sistem IT oleh tenaga ahli.',
    },
];

export const CategoryCard = () => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handlePrevClick = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNextClick = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };
    return (
        <>
            <section className="mt-14 mb-10">

                <div className="flex items-center justify-between relative">
                    <div
                        onClick={handlePrevClick}
                        className={`absolute left-0 z-10 rounded-full p-3 border border-slate-200 shadow box-shadow-smoot transform  ${isBeginning ? "hidden text-slate-400" : "bg-slate-200 opacity-100 text-secondary hover:bg-blue-200 transition-all ease-in-out cursor-pointer duration-300 border-slate-200"}`}
                    >
                        <FaArrowLeft className="text-xl sm:text-2xl" />
                    </div>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            480: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 5,
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onReachBeginning={() => setIsBeginning(true)}
                        onReachEnd={() => setIsEnd(true)}
                        onFromEdge={() => {
                            setIsBeginning(false);
                            setIsEnd(false);
                        }}
                        modules={[Navigation]}
                        className="mySwiper w-full"
                    >
                        {categories.map((data, index) => (
                            <>
                                <SwiperSlide key={index}>
                                    <article className='flex flex-col font-inter gap-3 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 items-start justify-start shadow-md rounded-lg p-4'>
                                        <span className='text-4xl font-light'>
                                            {data.icon}
                                        </span>
                                        <h5 className='text-base font-semibold text-justify capitalize'>{data.name}</h5>
                                    </article>
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>

                    <div
                        onClick={handleNextClick}
                        className={`absolute right-0 z-10 rounded-full p-3 border border-slate-200 shadow box-shadow-smoot transform translate-x-1/2 ${isEnd ? "hidden text-slate-400" : "bg-slate-200 opacity-100 backdrop-blur-sm text-secondary hover:bg-blue-200 transition-all ease-in-out cursor-pointer duration-300 border-slate-200"}`}
                    >
                        <FaArrowRight className="text-xl sm:text-2xl" />
                    </div>
                </div>

            </section>
        </>
    )
}