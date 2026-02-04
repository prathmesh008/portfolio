'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { RetroBox } from './ui/RetroBox';
import { ScrambleText } from './ui/ScrambleText';

export const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative z-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <RetroBox className="mb-8 border-4 shadow-[8px_8px_0px_0px_#111] hover:scale-[1.02] transition-transform">
                    <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-2">
                        Hi, I'm <ScrambleText text="Prathmesh Upadhyay" delay={500} />
                    </h1>
                    <h2 className="text-xl md:text-2xl font-mono text-[#e05d28]">
                        <ScrambleText text="I build digital products & experiences" delay={1500} speed={30} />
                    </h2>
                </RetroBox>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 flex flex-col items-center gap-2"
            >
                <span className="font-mono text-sm uppercase tracking-widest animate-pulse">
                    Scroll to Begin
                </span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </motion.div>
        </section>
    );
};
