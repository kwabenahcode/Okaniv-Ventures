"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/miniservices"
import { whyChooseUs } from "@/data/whychooseus"
import {
    BadgeCheck,
    ArrowRight,
} from "lucide-react";



export default function ServicesAbout() {
    return (
        <section className="bg-white">
            {/* Services */}
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-black uppercase tracking-wide text-[#C81010]">
                        Our Services
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-black sm:text-4xl">
                        Complete Security Solutions
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                        We offer professional security installation and maintenance services
                        for residential, commercial, and industrial properties.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                className="group rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:bg-[#C81010] hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C81010]/10 text-[#C81010] transition group-hover:bg-white group-hover:text-[#C81010]">
                                    <Icon size={28} />
                                </div>

                                <h3 className="mt-5 text-sm font-black leading-5 text-black transition group-hover:text-white">
                                    {service.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* About + Why Choose Us */}
            <div className="border-t border-black/10 bg-[#F7F7F7]">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-3 lg:px-8">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-black uppercase tracking-wide text-[#C81010]">
                            About Okaniv Ventures
                        </p>

                        <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl">
                            Your Safety Is Our Priority
                        </h2>

                        <p className="mt-5 text-base leading-8 text-black/65">
                            Okaniv Ventures Limited provides reliable and high-quality security
                            solutions tailored to meet your needs. We combine advanced
                            technology with skilled professionals to protect what matters most.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {[
                                "Professional & experienced team",
                                "Quality products and services",
                                "24/7 support and maintenance",
                                "Affordable and reliable solutions",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-black">
                                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C81010] text-white">
                                        <BadgeCheck size={14} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/about"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C81010] px-6 py-3 text-sm font-bold text-white transition hover:bg-black"
                        >
                            Learn More About Us
                            <ArrowRight size={17} />
                        </Link>
                    </motion.div>

                    {/*------------------------- Image------------------------------------ */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative min-h-95 overflow-hidden rounded-3xl shadow-xl lg:min-h-full"
                    >
                        <Image
                            src="/images/e-fence.jpg"
                            alt="Electric fence installation by Okaniv Ventures"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute bottom-6 left-6 rounded-2xl bg-[#C81010] p-5 text-white shadow-xl">
                            <h3 className="text-3xl font-black">10+</h3>
                            <p className="text-sm font-semibold">Years of Experience</p>
                        </div>
                    </motion.div>

                    {/* ----------------------Why Choose Us --------------------------*/}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-black uppercase tracking-wide text-[#C81010]">
                            Why Choose Us?
                        </p>

                        <h2 className="mt-3 text-3xl font-black leading-tight text-black sm:text-4xl">
                            Secure Solutions You Can Trust
                        </h2>

                        <div className="mt-8 space-y-5">
                            {whyChooseUs.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="group flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C81010]/10 text-[#C81010] transition group-hover:bg-[#C81010] group-hover:text-white">
                                            <Icon size={24} />
                                        </div>

                                        <div>
                                            <h3 className="text-base font-black text-black">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-6 text-black/60">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}