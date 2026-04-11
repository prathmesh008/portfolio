'use client';

import { motion } from 'framer-motion';
import { RetroBox } from './ui/RetroBox';
import { Checkpoint } from './Checkpoint';

export const About = () => {
    return (
        <section className="min-h-[80vh] py-20 relative px-4">
            {/* Checkpoint marker aligned on the path */}
            <div className="absolute top-24 left-0 right-0 flex justify-center">
                <Checkpoint />
            </div>

            <div className="max-w-4xl mx-auto pt-16 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <RetroBox className="bg-[#e05d28] text-[#fdfbf7] p-8 -rotate-2">
                        <h2 className="text-3xl font-bold mb-4 font-mono">WHO_AM_I?</h2>
                        <p className="font-mono text-lg leading-relaxed">
                            I'm a Full-Stack Engineer shipping production-ready systems end-to-end. My expertise spans Node.js, React, Python/Django, and distributed systems with real benchmark numbers to back it up.
                        </p>
                    </RetroBox>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <RetroBox>
                        <p className="font-mono mb-4">
                            I thrive on backend concurrency challenges like distributed locking and task queues, while building clean, performant frontends in React and Next.js.
                        </p>
                    </RetroBox>
                </motion.div>
            </div>
        </section>
    );
};
