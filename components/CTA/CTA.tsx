"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-white px-5 py-16 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0B0B0B] px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-16"
            >
                <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr]">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold">
                            <ShieldCheck size={18} className="text-[#C81010]" />
                            Secure Your Property Today
                        </div>

                        <h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                            Need CCTV, Electric Fence or Automated Gate Services?
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                            Get professional installation, maintenance, and reliable security
                            solutions for your home, business, estate, or commercial property.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                        <Link
                            href="tel:+2330256499835"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C81010] px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
                        >
                            <Phone size={18} />
                            Call Now
                        </Link>

                        <Link
                            href="https://wa.me/233256499835"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:border-[#C81010] hover:bg-[#C81010]"
                        >
                            <MessageCircle size={18} />
                            WhatsApp Us
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 text-sm font-black text-white transition hover:text-[#C81010]"
                        >
                            Request Quote
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}