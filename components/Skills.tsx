'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Languages",
        skills: ["C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"]
    },
    {
        title: "Frameworks",
        skills: ["React", "Next.js", "Node.js", "Express", "Socket.io", "Tailwind", "LangChain", "Puppeteer"]
    },
    {
        title: "Cloud_&_DevOps",
        skills: ["Docker", "Kubernetes", "Linux", "Vercel", "Render"]
    },
    {
        title: "Tools_&_DB",
        skills: ["MongoDB", "ChromaDB", "Git", "Postman", "Node-cron", "Redis", "Razorpay"]
    },
    {
        title: "Core_Concepts",
        skills: ["DSA", "OOPS", "DBMS", "System Design"]
    }
];

export const Skills = () => {
    return (
        <section className="py-20 relative px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 relative z-20 w-max mx-auto bg-[#fdfbf7] px-4 border-b-4 border-[#3e6b4e]">
                    SKILL_SET
                </h2>

                <div className="grid gap-12">
                    {skillCategories.map((category, catIdx) => (
                        <div key={category.title} className="relative">
                            <h3 className="font-mono text-xl font-bold mb-6 text-[#3e6b4e] flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#3e6b4e]" />
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, idx) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group relative"
                                    >
                                        <div className="border-2 border-[#111] bg-white p-3 shadow-[4px_4px_0px_0px_#111] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_#111] transition-all font-mono text-xs font-bold uppercase text-center cursor-help">
                                            {skill}
                                        </div>

                                        {/* Retro Tooltip */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#111] text-white text-xs font-mono px-2 py-1 whitespace-nowrap pointer-events-none z-30">
                                            {'>'} USED_IN_PROD
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
