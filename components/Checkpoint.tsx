'use client';

import { motion } from 'framer-motion';

export const Checkpoint = () => (
    <motion.div
        initial={{ backgroundColor: '#fdfbf7', scale: 1 }}
        whileInView={{ backgroundColor: '#e05d28', scale: 1.5, borderColor: '#111' }}
        viewport={{ margin: "-50% 0px -50% 0px" }}
        transition={{ duration: 0.3 }}
        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 border-[3px] border-[#111] z-20 hidden md:block rounded-sm"
    />
);
