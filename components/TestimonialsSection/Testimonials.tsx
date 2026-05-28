"use client";

import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "@/data/testimonials";



export default function Testimonials() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="text-center">
                    <p className="text-sm font-black uppercase text-[#C81010]">
                        Testimonials
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-black sm:text-4xl">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="mt-10">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-20"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.name}>
                                <div className="relative h-full rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                                    <Quote
                                        className="absolute right-6 top-6 text-[#C81010]/15"
                                        size={44}
                                    />

                                    <div className="flex gap-1 text-[#C81010]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} fill="currentColor" />
                                        ))}
                                    </div>

                                    <p className="mt-5 text-sm leading-7 text-black/70">
                                        “{item.text}”
                                    </p>

                                    <div className="mt-6 border-t border-black/10 pt-5">
                                        <h3 className="text-base font-black text-black">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm text-black/50">{item.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}