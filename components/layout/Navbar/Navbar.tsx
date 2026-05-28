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
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center text-white">
                        {/* <span className="text-xl font-black">O</span> */}
                        <img src="/images/logo.png" alt="" />
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
                        <div className="flex items-center gap-1">
                            <Link
                                href="/services"
                                className="text-sm font-semibold text-black transition hover:text-[#C81010]"
                            >
                                Services
                            </Link>

                            <button
                                type="button"
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="text-black transition hover:text-[#C81010]"
                            >
                                <ChevronDown
                                    size={16}
                                    className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                                />
                            </button>
                        </div>

                        <AnimatePresence>
                            {servicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.97 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.97 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="absolute left-1/2 top-10 w-[680px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-4 shadow-2xl"
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
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C81010]/10 text-[#C81010] transition group-hover:bg-white">
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
                    onClick={() => setMobileOpen(true)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C81010] text-white lg:hidden"
                >
                    <Menu />
                </button>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
                        />

                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="fixed left-0 top-0 z-50 h-screen w-[85%] max-w-sm overflow-y-auto bg-white px-5 py-5 shadow-2xl lg:hidden"
                        >
                            <div className="flex items-center justify-between">
                                <Link href="/" onClick={() => setMobileOpen(false)}>
                                    <h2 className="text-xl font-black text-[#C81010]">OKANIV</h2>
                                    <p className="text-xs font-bold uppercase text-black">
                                        Ventures Limited
                                    </p>
                                </Link>

                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C81010] text-white"
                                >
                                    <X />
                                </button>
                            </div>

                            <div className="mt-8 space-y-2">
                                {navLinks.slice(0, 2).map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-xl px-4 py-3 text-sm font-bold text-black hover:bg-[#C81010] hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <div>
                                    <div className="flex items-center justify-between rounded-xl hover:bg-[#C81010]">
                                        <Link
                                            href="/services"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex-1 px-4 py-3 text-sm font-bold text-black hover:text-white"
                                        >
                                            Services
                                        </Link>

                                        <button
                                            onClick={() =>
                                                setMobileServicesOpen(!mobileServicesOpen)
                                            }
                                            className="px-4 py-3 text-black hover:text-white"
                                        >
                                            <ChevronDown
                                                size={18}
                                                className={`transition ${mobileServicesOpen ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    <AnimatePresence>
                                        {mobileServicesOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-3"
                                            >
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/70 hover:bg-[#C81010] hover:text-white"
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {navLinks.slice(2).map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-xl px-4 py-3 text-sm font-bold text-black hover:bg-[#C81010] hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href="tel:+2330256499835"
                                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#C81010] px-5 py-3 text-sm font-bold text-white"
                            >
                                <Phone size={17} />
                                Call Us Now
                            </Link>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}