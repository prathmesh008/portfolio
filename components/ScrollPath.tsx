'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollPath = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#111]/20 -translate-x-1/2 z-0 hidden md:block"
        >
            <motion.div
                className="absolute top-0 left-0 right-0 bg-[#e05d28] origin-top"
                style={{ scaleY, height: '100%' }}
            />
        </motion.div>
    );
};
