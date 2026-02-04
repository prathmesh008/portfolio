'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { RetroBox } from './ui/RetroBox';

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="py-20 pb-40 relative px-4 text-center">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">INITIALIZE_HANDSHAKE</h2>

                <RetroBox className="text-left bg-[#e05d28] text-white overflow-hidden relative">
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center p-12 text-center h-[400px]"
                        >
                            <div className="text-6xl mb-4">✓</div>
                            <h3 className="text-3xl font-bold mb-2 uppercase">Transmission_Sent</h3>
                            <p className="font-mono">Stand by for response protocol.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-8 text-sm underline font-mono hover:text-[#111]"
                            >
                                Send another
                            </button>
                        </motion.div>
                    ) : (
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block font-mono text-sm mb-2 uppercase">Subject</label>
                                <input type="text" required className="w-full bg-[#fdfbf7] border-2 border-[#111] p-3 text-[#111] font-mono focus:outline-none focus:shadow-[4px_4px_0px_0px_white]" />
                            </div>
                            <div>
                                <label className="block font-mono text-sm mb-2 uppercase">Message</label>
                                <textarea required rows={5} className="w-full bg-[#fdfbf7] border-2 border-[#111] p-3 text-[#111] font-mono focus:outline-none focus:shadow-[4px_4px_0px_0px_white]" />
                            </div>
                            <button type="submit" className="bg-[#111] text-white font-bold py-4 px-8 border-2 border-transparent hover:bg-white hover:text-[#111] hover:border-[#111] transition-colors uppercase tracking-widest shadow-[4px_4px_0px_0px_#111]">
                                Send Transmission
                            </button>
                            <p className="text-center font-mono text-xs opacity-80 mt-2">
                  // Response time: {"<"} 24 hours
                            </p>
                        </form>
                    )}
                </RetroBox>

                <motion.div
                    className="mt-20 inline-block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <div className="w-8 h-8 bg-[#111] mx-auto mb-4 animate-bounce" />
                    <p className="font-mono text-xl font-bold uppercase tracking-widest">End of Journey</p>
                </motion.div>
            </div>
        </section>
    );
};
