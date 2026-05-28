import Link from "next/link";
import {

    Mail,
    MapPin,
    Phone,
    ShieldCheck,
} from "lucide-react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const services = [
    "CCTV Camera Installation",
    "CCTV Maintenance",
    "Automated Gates Installation",
    "Electric Fence Installation",
    "Electrical Wiring",
];

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white">
            <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center  text-white">
                                <img src="/images/logo.png" alt="logo" />
                            </div>

                            <div>
                                <h2 className="text-xl font-black text-[#C81010]">OKANIV</h2>
                                <p className="text-xs font-bold uppercase text-white">
                                    Ventures Limited
                                </p>
                            </div>
                        </Link>

                        <p className="mt-5 text-sm leading-7 text-white/60">
                            Professional security solutions for CCTV installation, automated
                            gates, electric fencing, maintenance, and electrical wiring.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C81010]"
                            >
                                <FaFacebookF size={18} />
                            </Link>

                            <Link
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#C81010]"
                            >
                                <FaInstagram size={18} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-black">Quick Links</h3>

                        <ul className="mt-5 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/60 transition hover:text-[#C81010]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-black">Our Services</h3>

                        <ul className="mt-5 space-y-3">
                            {services.map((service) => (
                                <li key={service} className="text-sm text-white/60">
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-black">Contact Info</h3>

                        <div className="mt-5 space-y-4">
                            <Link
                                href="tel:+2330256499835"
                                className="flex gap-3 text-sm text-white/60 transition hover:text-[#C81010]"
                            >
                                <Phone size={18} className="shrink-0 text-[#C81010]" />
                                +233 (0) 25 649 9835
                            </Link>

                            <Link
                                href="mailto:info@okanivventures.com"
                                className="flex gap-3 text-sm text-white/60 transition hover:text-[#C81010]"
                            >
                                <Mail size={18} className="shrink-0 text-[#C81010]" />
                                info@okanivventures.com
                            </Link>

                            <div className="flex gap-3 text-sm text-white/60">
                                <MapPin size={18} className="shrink-0 text-[#C81010]" />
                                Ghana
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 text-center">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} Okaniv Ventures Limited. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}