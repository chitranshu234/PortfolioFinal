import { motion } from 'framer-motion';
import Aurora from '../components/Aurora';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: '#1a1a17' }}
        >
            {/* Aurora Background */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Aurora
                    colorStops={['#0d0d0b', '#c8c2b4', '#0d0d0b']}
                    blend={0.3}
                    amplitude={1.2}
                    speed={0.8}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen py-24">
                    {/* Left — Name */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-[#a09888] text-xs tracking-[0.4em] uppercase mb-6 font-light"
                        >
                            PANTNAGAR · INDIA
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            className="font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.9] tracking-wider text-[#c8c2b4]"
                        >
                            <span className="block">CHITRANSHU</span>
                            <span className="block">PANDEY</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="mt-12 flex flex-col gap-1 text-[#a09888] text-xs tracking-[0.2em] uppercase font-light"
                        >
                            <span>WEB APPS</span>
                            <span>MOBILE</span>
                            <span>FULL STACK</span>
                            <span>DSA</span>
                        </motion.div>
                    </div>

                    {/* Right — CTA Buttons */}
                    <div className="flex flex-col items-center md:items-end justify-end">

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="flex flex-wrap items-center justify-center md:justify-end gap-4"
                        >
                            <a
                                href="#work"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-3 bg-[#c8c2b4] text-[#1a1a17] font-display text-lg tracking-wider hover:bg-[#a09888] transition-all duration-500"
                            >
                                VIEW WORK
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-3 border border-[#3a3530] text-[#c8c2b4] font-display text-lg tracking-wider hover:border-[#c8c2b4] transition-all duration-500"
                            >
                                CONTACT
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1HTQisS7dRVy8_q32POFI_gN94gUC_cR3/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border border-[#3a3530] text-[#c8c2b4] font-display text-lg tracking-wider hover:border-[#c8c2b4] transition-all duration-500"
                            >
                                RESUME
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
