'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const FloatingPixels = () => {
    const [pixels, setPixels] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

    useEffect(() => {
        // Generate random initial positions for pixels
        const newPixels = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            size: Math.random() * 10 + 5, // size in px
            duration: Math.random() * 20 + 10 // duration in seconds
        }));
        setPixels(newPixels);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {pixels.map((pixel) => (
                <motion.div
                    key={pixel.id}
                    initial={{ x: `${pixel.x}vw`, y: `${pixel.y}vh`, opacity: 0 }}
                    animate={{
                        y: [
                            `${pixel.y}vh`,
                            `${pixel.y - 20}vh`, // Move up
                            `${pixel.y}vh` // Loop back/drift
                        ],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: pixel.duration,
                        repeat: Infinity,
                        ease: "linear",
                        times: [0, 0.5, 1]
                    }}
                    className="absolute bg-[#e05d28] opacity-20"
                    style={{
                        width: pixel.size,
                        height: pixel.size,
                    }}
                />
            ))}
        </div>
    );
};
