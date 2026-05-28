"use client";



import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, MessageCircle } from "lucide-react";

import "./hero.css"

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#0B0B0B] text-white ">
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-black/40" />

            <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 -mt-10">
                <Image
                    src="/images/CCTV.png"
                    alt="CCTV security camera installation"
                    fill
                    priority
                    className="object-cover opacity-40 lg:opacity-80 hero-img"
                />
            </div>

            <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center px-5 py-24 lg:grid-cols-2 lg:px-8 -mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                        <ShieldCheck size={18} className="text-[#C81010]" />
                        Security Solutions You Can Trust
                    </div>

                    <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        CCTV, Automated Gates &{" "}
                        <span className="text-[#C81010]">Electric Fence</span> Services
                    </h1>

                    <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg -mt-3">
                        Okaniv Ventures Limited provides professional installation,
                        maintenance, and security solutions for homes, businesses, estates,
                        and commercial properties.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="tel:+2330256499835"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C81010] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-white hover:text-black"
                        >
                            <Phone size={18} />
                            Call: +233 (0) 25 649 9835
                        </Link>

                        <Link
                            href="https://wa.me/233256499835"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition hover:border-[#1e9d3a] hover:bg-[#1e9d3a]"
                        >
                            <MessageCircle size={18} />
                            Chat on WhatsApp
                        </Link>
                    </div>

                    <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                            <h3 className="text-2xl font-black text-white">24/7</h3>
                            <p className="mt-1 text-xs font-medium text-white/65">
                                Maintenance Support
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                            <h3 className="text-2xl font-black text-white">10+</h3>
                            <p className="mt-1 text-xs font-medium text-white/65">
                                Years Experience
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                            <h3 className="text-2xl font-black text-white">100%</h3>
                            <p className="mt-1 text-xs font-medium text-white/65">
                                Quality Service
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/services"
                        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#C81010]"
                    >
                        Explore Our Services
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}