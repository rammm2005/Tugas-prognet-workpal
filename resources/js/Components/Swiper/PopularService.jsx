import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Popular = [
    {
        image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
        name: "Website development",
        slug: "Website-development",
    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png',
        name: 'Logo Maker',
        slug: "Website-development",
    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png',
        name: 'SEO',
        slug: "Website-development",
    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png',
        name: 'Architecture Design and Interior',
        slug: "Website-development",

    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png',
        name: 'Social Media Marketing',
        slug: "Website-development",

    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png',
        name: 'Voice Over',
        slug: "Website-development",

    },
    {
        image: "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png",
        name: "Website development",
        slug: "Website-development",

    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png',
        name: 'Logo Maker',
        slug: "Website-development",

    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png',
        name: 'SEO',
        slug: "Website-development",

    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156473/architecture-design.png',
        name: 'Architecture Design and Interior',
        slug: "Website-development",

    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156476/social-media-marketing.png',
        name: 'Social Media Marketing',
        slug: "Website-development",

    },
    {
        image: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_188,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156479/voice-over.png',
        name: 'Voice Over',
        slug: "Website-development",
    }
];

const PopularService = () => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const [color, setColor] = useState('#00732e');

    function generateColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor('#' + randomColor);
    }

    const handlePrevClick = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNextClick = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };


    return (
        <div className="relative top-0 z-20 px-6 sm:px-20 transition-all duration-300">
            <div className="container mx-auto mt-20 sm:mt-32 relative">
                <div className="px-4 flex flex-col gap-2">
                    <h5 className="text-2xl sm:text-4xl font-inter font-semibold">Service Populer</h5>
                    <span className="text-sm sm:mt-0 mt-2 text-slate-700">
                        loremipsum dolor sit amet, consectetur adipmeta facilis maintain elementum et just facilis in fac
                    </span>
                </div>
                <div className="flex items-center justify-between relative">
                    <div
                        onClick={handlePrevClick}
                        className={`absolute left-0 z-10 rounded-full p-3 border border-slate-200 shadow box-shadow-smoot transform  ${isBeginning ? "hidden text-slate-400" : "bg-slate-200 opacity-100 text-secondary hover:bg-blue-200 transition-all ease-in-out cursor-pointer duration-300 border-slate-200"}`}
                    >
                        <FaArrowLeft className="text-xl sm:text-2xl" />
                    </div>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
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
                                slidesPerView: 4,
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
                        {Popular.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <Link to={`/blogs/${blog.slug}`}>
                                    <div className={`bg-[${generateColor}] p-4 flex flex-col gap-2`}>
                                        <span className="sm:text-lg text-base font-bold capitalize text-left font-inter">
                                            {blog.name}
                                        </span>
                                        <div className="relative w-full h-72">
                                            <img
                                                className="inset-0 w-[10rem] h-[10rem] object-cover rounded-xl hover:opacity-90 transition duration-300"
                                                src={blog.image}
                                                loading="lazy"
                                                alt={blog.name}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div
                        onClick={handleNextClick}
                        className={`absolute right-0 z-10 rounded-full p-3 border border-slate-200 shadow box-shadow-smoot transform translate-x-1/2 ${isEnd ? "hidden text-slate-400" : "bg-slate-200 opacity-100 backdrop-blur-sm text-secondary hover:bg-blue-200 transition-all ease-in-out cursor-pointer duration-300 border-slate-200"}`}
                    >
                        <FaArrowRight className="text-xl sm:text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularService;
