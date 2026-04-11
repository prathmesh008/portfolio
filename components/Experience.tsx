'use client';

import { motion } from 'framer-motion';
import { RetroBox } from './ui/RetroBox';
import { Checkpoint } from './Checkpoint';

const experiences = [
    {
        role: "Full-Stack Developer (Intern)",
        company: "Mentaive",
        period: "Feb 2026 - Present",
        desc: "Engineered a production-ready assessment platform using the MERN stack. Implemented secure REST APIs with JWT & SendGrid for alerts. Automated cron jobs for exam windows and reduced reporting overhead by 40% via a custom analytics dashboard."
    },
    {
        role: "Co-Lead",
        company: "iOS Club, VIT",
        period: "Oct 2023 - Jan 2024",
        desc: "Media and Content Creation. Led technical and cultural events, managing media outreach and technical content creation for club activities."
    }
];

export const Experience = () => {
    return (
        <section className="py-20 relative px-4 text-[#111]">
            <div className="max-w-6xl mx-auto flex flex-col gap-16 relative">
                <h2 className="text-4xl font-bold text-center mb-10 bg-[#fdfbf7] relative z-20 w-max mx-auto px-4 border-b-4 border-[#e05d28]">
                    EXPERIENCE_LOG
                </h2>

                {experiences.map((exp, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                        {/* Content Side */}
                        <motion.div
                            className="w-full md:w-1/2 px-4"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <RetroBox className="relative">
                                <span className="absolute -top-3 -right-3 bg-[#111] text-[#fdfbf7] px-3 py-1 font-mono text-sm font-bold border-2 border-[#e05d28] shadow-[2px_2px_0px_0px_#e05d28]">
                                    {exp.period}
                                </span>
                                <h3 className="text-2xl font-black mb-1 uppercase tracking-tight">{exp.role}</h3>
                                <h4 className="font-mono text-sm mb-4 text-[#e05d28] font-bold tracking-widest uppercase">@{exp.company}</h4>
                                <p className="font-mono text-sm text-gray-800 leading-relaxed">{exp.desc}</p>
                            </RetroBox>
                        </motion.div>

                        {/* Marker on Center Line */}
                        <div className="hidden md:flex justify-center w-0 relative">
                            <Checkpoint />
                            {/* Connector Line */}
                            <div className={`absolute top-1/2 w-16 h-1 bg-[#111] z-0 ${index % 2 === 0 ? 'right-0' : 'left-0'}`} />
                        </div>

                        {/* Empty Side for alignment */}
                        <div className="hidden md:block w-1/2" />
                    </div>
                ))}
            </div>
        </section>
    );
};
