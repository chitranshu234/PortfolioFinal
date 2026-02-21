import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen section-padding"
            style={{ backgroundColor: '#1a1a17' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                    {/* Left — Title + Profile */}
                    <div className="md:col-span-4">
                        <motion.h2
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="font-display text-sm tracking-[0.3em] text-[#a09888]/60 uppercase mb-10"
                        >
                            About
                        </motion.h2>

                        {/* Circular Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: true }}
                            className="group flex flex-col items-center sticky top-32"
                        >
                            <div
                                className="relative rounded-full p-[3px]"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(200,194,180,0.35), rgba(200,194,180,0.05), rgba(200,194,180,0.25))',
                                    boxShadow: '0 0 50px rgba(200, 194, 180, 0.06), 0 25px 70px rgba(0, 0, 0, 0.4)',
                                }}
                            >
                                <div className="rounded-full overflow-hidden" style={{ width: '300px', height: '300px' }}>
                                    <img
                                        src="/profile.jpeg"
                                        alt="Chitranshu Pandey"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                                    />
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <h3 className="font-display text-2xl tracking-wider text-[#c8c2b4]">
                                    CHITRANSHU
                                </h3>
                                <p className="text-[#a09888]/60 text-[10px] tracking-[0.3em] uppercase mt-1">
                                    FULL STACK DEVELOPER
                                </p>
                                <div className="flex items-center justify-center gap-1.5 mt-3">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-[#a09888]/40 text-[10px] tracking-wider uppercase">
                                        Available for work
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Content */}
                    <motion.div
                        className="md:col-span-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p
                            variants={itemVariants}
                            className="text-[#c8c2b4] text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 uppercase tracking-wide"
                        >
                            I'M A PASSIONATE B.TECH STUDENT
                            SPECIALIZING IN ELECTRONICS AND
                            COMMUNICATION ENGINEERING WITH A
                            STRONG FOCUS ON SOFTWARE DEVELOPMENT.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-[#a09888] text-lg md:text-xl font-light leading-relaxed mb-8 uppercase tracking-wide"
                        >
                            WITH A SOLID FOUNDATION IN CORE JAVA,
                            DATA STRUCTURES & ALGORITHMS, AND
                            FULL-STACK TECHNOLOGIES LIKE SPRING BOOT
                            AND REACT, I BUILD EFFICIENT AND
                            SCALABLE SOLUTIONS.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-[#a09888] text-lg md:text-xl font-light leading-relaxed mb-16 uppercase tracking-wide"
                        >
                            I'M A FAST LEARNER AND ADAPTABLE
                            DEVELOPER — ALWAYS READY TO WORK
                            WITH ANY WEB TECHNOLOGY TO DELIVER
                            HIGH-QUALITY RESULTS.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
