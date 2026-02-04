'use client';

import { motion } from 'framer-motion';
import { RetroBox } from './ui/RetroBox';

const education = [
    {
        degree: "B.Tech (Computer Science)",
        institute: "Vellore Institute of Technology",
        period: "2022 - Present",
        desc: "Specialization in core computer science subjects."
    },
    {
        degree: "Senior Secondary",
        institute: "CBSE Board",
        period: "2022",
        desc: "Focus on Science and Mathematics."
    },
    {
        degree: "Secondary",
        institute: "CBSE Board",
        period: "2020",
        desc: "Foundation in general sciences."
    }
];

export const Education = () => {
    return (
        <section className="py-20 relative px-4 text-[#111]">
            <div className="max-w-6xl mx-auto flex flex-col gap-10 relative">
                <h2 className="text-4xl font-bold text-center mb-10 bg-[#fdfbf7] relative z-20 w-max mx-auto px-4 border-b-4 border-[#3e6b4e]">
                    EDUCATION_LOG
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <RetroBox className="h-full flex flex-col relative border-2 border-[#111] shadow-[4px_4px_0px_0px_#3e6b4e] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#3e6b4e] transition-all">
                                <span className="absolute -top-3 -right-3 bg-[#3e6b4e] text-[#fdfbf7] px-3 py-1 font-mono text-xs font-bold border-2 border-[#111]">
                                    {edu.period}
                                </span>
                                <h3 className="text-lg font-black mb-2 uppercase tracking-tight leading-tight">{edu.degree}</h3>
                                <h4 className="font-mono text-xs mb-2 text-[#3e6b4e] font-bold tracking-widest uppercase">@{edu.institute}</h4>
                            </RetroBox>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
