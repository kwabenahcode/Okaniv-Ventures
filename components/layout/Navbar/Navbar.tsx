"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { services } from "@/data/services";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C81010] text-white">
                        <span className="text-xl font-black">O</span>
                    </div>

                    <div className="leading-tight">
                        <h1 className="text-xl font-black tracking-tight text-[#C81010]">
                            OKANIV
                        </h1>
                        <p className="text-xs font-bold uppercase text-black">
                            Ventures Limited
                        </p>
                    </div>
                </Link>

                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.slice(0, 2).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-black transition hover:text-[#C81010]"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-sm font-semibold text-black transition hover:text-[#C81010]">
                            Services
                            <ChevronDown
                                size={16}
                                className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.97 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="absolute left-1/2 top-10 w-170 -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl"
                                >
                                    <div className="grid grid-cols-2 gap-3">
                                        {services.map((service) => {
                                            const Icon = service.icon;

                                            return (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="group flex gap-4 rounded-xl p-4 transition hover:bg-[#C81010]"
                                                >
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C81010]/10 text-[#C81010] transition group-hover:bg-white group-hover:text-[#C81010]">
                                                        <Icon size={22} />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-sm font-bold text-black transition group-hover:text-white">
                                                            {service.title}
                                                        </h3>
                                                        <p className="mt-1 text-xs leading-relaxed text-black/60 transition group-hover:text-white/80">
                                                            {service.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.slice(2).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-black transition hover:text-[#C81010]"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <Link
                    href="tel:+2330256499835"
                    className="hidden items-center gap-2 rounded-full bg-[#C81010] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-black lg:flex"
                >
                    <Phone size={17} />
                    Call Us Now
                </Link>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C81010] text-white lg:hidden"
                >
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-black/10 bg-white lg:hidden"
                    >
                        <div className="space-y-2 px-5 py-5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-xl px-4 py-3 text-sm font-bold text-black hover:bg-[#C81010] hover:text-white"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <div className="pt-2">
                                <p className="px-4 pb-2 text-xs font-black uppercase text-[#C81010]">
                                    Services
                                </p>

                                {services.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/80 hover:bg-[#C81010] hover:text-white"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="tel:+2330256499835"
                                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#C81010] px-5 py-3 text-sm font-bold text-white"
                            >
                                <Phone size={17} />
                                Call Us Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}