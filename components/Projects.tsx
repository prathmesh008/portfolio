'use client';

import { motion } from 'framer-motion';
import { RetroBox } from './ui/RetroBox';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "GrabASeat",
        desc: "Real-time Booking Platform with Socket.io for state sync. Implemented Atomic Transactions in MongoDB & RBAC.",
        tags: ["React", "Express", "Socket.io", "MongoDB"],
        color: "bg-[#e05d28]",
        link: "https://grabaseat.vercel.app"
    },
    {
        title: "TaskFlow",
        desc: "Distributed task queue engine benchmarked at 3,350 jobs/sec with zero dropped jobs across 100,000 runs. Supports priority scheduling, delayed execution, and real-time job monitoring over WebSockets.",
        tags: ["Node.js", "Redis", "Express", "WebSockets", "React"],
        color: "bg-[#3e6b4e]",
        code: "https://github.com/prathmesh008/TaskFlow"
    },
    {
        title: "ChronoStore",
        desc: "Lightweight time-series storage engine with append-only logs and in-memory range indexes achieving sub-5ms query latency on 1M+ data points. Includes a natural language query interface via Gemini function calling.",
        tags: ["Node.js", "Express", "Gemini API", "Custom File I/O"],
        color: "bg-[#3e6b4e]",
        code: "https://github.com/prathmesh008/ChronoStore"
    },
    {
        title: "StartupBoost",
        desc: "B2B SaaS Marketplace utilizing a 3-tier architecture with Docker/K8s. Features entitlement engine & IAM logic.",
        tags: ["Next.js", "Docker", "Kubernetes", "MongoDB"],
        color: "bg-[#3e6b4e]",
        link: "https://startupboost-sigma.vercel.app"
    },
    {
        title: "InsightDash",
        desc: "AI-Powered Analytics Platform using DuckDB for in-memory SQL analytics and Google Gemini for semantic insights.",
        tags: ["React", "FastAPI", "DuckDB", "AI"],
        color: "bg-[#e05d28]",
        link: "https://insightdash-ten.vercel.app"
    },
    {
        title: "Log Analytics",
        desc: "High-performance C++ engine parsing server logs with O(1) Hash Maps & Min-Heaps for threat detection.",
        tags: ["C++", "STL", "Heaps", "File I/O"],
        color: "bg-[#111]"
    }
];

export const Projects = () => {
    return (
        <section className="py-20 relative px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 relative z-20 w-max mx-auto bg-[#fdfbf7] px-4 border-b-4 border-[#3e6b4e]">
                    PROJECT_ARCHIVE
                </h2>

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className={idx === 0 || idx === projects.length - 1 ? "md:col-span-2" : ""}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <RetroBox className="h-full flex flex-col group cursor-pointer relative">
                                {idx === 0 && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#111] text-[#e05d28] px-4 py-1 font-mono font-bold border-2 border-[#e05d28] z-20 shadow-[2px_2px_0px_0px_#e05d28] animate-pulse">
                                        ★ FEATURED_BUILD ★
                                    </div>
                                )}
                                <div className={`w-full mb-6 border-2 border-[#111] ${project.color} relative overflow-hidden ${idx === 0 ? 'h-64' : idx === projects.length - 1 ? 'h-32' : 'h-48'}`}>
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-20" />
                                </div>

                                <h3 className={`font-bold mb-2 group-hover:underline decoration-4 decoration-[#e05d28] ${idx === 0 ? 'text-4xl' : 'text-2xl'}`}>{project.title}</h3>
                                <p className="font-mono text-sm mb-4 flex-grow">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold border border-[#111] px-2 py-1 uppercase bg-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {project.code ? (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold border-2 border-[#111] px-4 py-2 hover:bg-[#111] hover:text-white transition-colors"
                                        >
                                            <Github size={16} /> CODE
                                        </a>
                                    ) : (
                                        <button className="flex items-center gap-2 text-sm font-bold border-2 border-[#111] px-4 py-2 hover:bg-[#111] hover:text-white transition-colors">
                                            <Github size={16} /> CODE
                                        </button>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold border-2 border-[#111] px-4 py-2 hover:bg-[#111] hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={16} /> DEMO
                                        </a>
                                    )}
                                </div>
                            </RetroBox>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
