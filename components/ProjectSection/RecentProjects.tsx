"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/recentprojects"



export default function RecentProjects() {
    return (
        <section className="bg-[#050505] py-3 text-white">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <p className="text-sm font-black uppercase tracking-wide text-[#C81010]">
                        Our Recent Projects
                    </p>

                    <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                        Quality Work, Trusted by Many
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="group relative h-[230px] overflow-hidden rounded-3xl"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-5">
                                <h3 className="text-lg font-black text-white">
                                    {project.title}
                                </h3>

                                <div className="mt-3 h-[2px] w-10 bg-[#C81010] transition-all duration-300 group-hover:w-20" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 flex justify-center"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:border-[#C81010] hover:bg-[#C81010]"
                    >
                        View More Projects
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}