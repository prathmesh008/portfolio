'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

export const SystemBar = () => {
    const [time, setTime] = useState("");
    const { scrollYProgress } = useScroll();
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        // Clock
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);

        // Scroll listener for percentage update (using RAF to throttle if needed, but rAF is built into framer mostly)
        // Actually we can listen to the onChange of motion value
        const unsubscribe = scrollYProgress.on('change', (v) => {
            setScrollPercent(Math.round(v * 100));
        });

        return () => {
            clearInterval(timer);
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 h-10 bg-[#111] border-t-2 border-[#e05d28] z-50 flex items-center justify-between px-4 font-mono text-xs text-[#e05d28] uppercase select-none"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    SYSTEM_ONLINE
                </span>
                <span className="hidden md:inline">V 1.0.4-BETA</span>
            </div>

            <div className="flex items-center gap-4">
                <span>LOC: 127.0.0.1</span>
                <span>MEM: 64K OK</span>
            </div>

            <div className="flex items-center gap-4 font-bold">
                <span>SCROLL: {scrollPercent}%</span>
                <span>{time}</span>
            </div>
        </motion.div>
    );
};
