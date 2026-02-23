"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductPortfolio() {
    const portfolioData = [
        {
            title: "Haemostasis",
            bgImage: "/home/service-2.jpg",
        },
        {
            title: "Surgical Meshes",
            bgImage: "/home/service-1.jpg",
        },
        {
            title: "Coating",
            bgImage: "/home/service-3.jpg",
        }
    ];

    return (
        <section className="px-4 lg:px-8 py-8 mb-16">
            <div className="bg-[#f5f5f5] rounded-[2rem] p-8 lg:p-14 max-w-[1400px] mx-auto">

                {/* Top Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <img src={`/home/vector.svg`} width={`25px`} alt='BioCer' />
                            <span className="text-gray-500 font-medium text-sm">Projects</span>
                        </div>
                        <h2 className="text-3xl lg:text-[2.25rem] font-medium text-gray-800 leading-tight">
                            Our product portfolio
                        </h2>
                    </div>
                    <div className="max-w-sm">
                        <p className="text-gray-500 text-[13px] leading-relaxed">
                            We focus on three central topics: haemostasis, surgical meshes as soft tissue replacement and the functionalisation of implant surfaces using modern coating technologies.
                        </p>
                    </div>
                </div>

                {/* Portfolio Swiper */}
                <div className="mb-8">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        pagination={{
                            clickable: true,
                            el: '.portfolio-pagination',
                            bulletClass: 'swiper-custom-bullet',
                            bulletActiveClass: 'swiper-custom-bullet-active',
                        }}
                        className="w-full"
                    >
                        {portfolioData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative h-[300px] lg:h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer w-full">
                                    <div
                                        className="absolute inset-0 bg-slate-300 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${item.bgImage}')` }}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-80`} />
                                    <div className="absolute bottom-8 left-8">
                                        <h3 className="text-white text-2xl font-semibold">{item.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Pagination Dots container */}
                <div className="flex justify-center gap-2 portfolio-pagination mt-4"></div>

                {/* Global styles specifically targeting this swiper's bullets since we are using custom elements via classes, this helps inject custom Tailwind values smoothly */}
                <style jsx global>{`
                    .portfolio-pagination {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 0.5rem;
                    }
                    .swiper-custom-bullet {
                        width: 0.5rem;
                        height: 0.375rem;
                        background-color: #d1d5db; /* gray-300 */
                        border-radius: 9999px;
                        display: inline-block;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .swiper-custom-bullet-active {
                        width: 2rem !important;
                        background-color: var(--primary) !important;
                    }
                `}</style>

            </div>
        </section>
    );
}
