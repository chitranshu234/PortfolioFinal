import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlowingMenu from '../components/FlowingMenu';

interface ExperienceDetail {
    role: string;
    company: string;
    period: string;
    location: string;
    bullets: string[];
}

const experienceDetails: ExperienceDetail[] = [
    {
        role: 'Full Stack Developer',
        company: 'Klassway',
        period: 'January 2026 – Present',
        location: 'Remote',
        bullets: [
            'Design, build, and maintain front-end and back-end components of web and mobile applications using React.js, Node.js, and modern JavaScript frameworks.',
            'Develop and implement new features while debugging and optimizing existing code to enhance application performance.',
            'Ensure seamless integration with databases (MySQL, MongoDB) and RESTful APIs for efficient data flow.',
            'Implement security and data protection measures; troubleshoot applications for optimal performance.',
        ],
    },
    {
        role: 'React Native Developer Intern',
        company: 'Opebo',
        period: 'November 2025 – February 2026',
        location: 'Remote',
        bullets: [
            'Translate high-fidelity Figma prototypes into pixel-perfect, responsive mobile interfaces using React Native.',
            'Optimize component rendering lifecycles to improve application fluidity across Android and iOS devices.',
            'Partner with backend teams to integrate functional modules and ensure seamless data flow via RESTful APIs.',
        ],
    },
    {
        role: 'Full Stack Developer (Team Lead)',
        company: 'Smart India Hackathon 2025 – Leaflink',
        period: 'September 2025 – October 2025',
        location: 'Pantnagar, India',
        bullets: [
            'Achieved 6th rank out of 500+ teams nationally for developing a robust supply chain traceability solution.',
            'Architected backend system using Node.js and Express.js for dynamic QR code generation.',
            'Improved data retrieval accuracy by 40% through optimized GPS integration and database queries.',
            'Deployed full-stack application on Vercel, ensuring 99.9% uptime during evaluation phase.',
        ],
    },
];

const experienceItems = [
    {
        link: 'javascript:void(0)',
        text: 'Full Stack Developer — Klassway',
        image: '/klassway.png',
    },
    {
        link: 'javascript:void(0)',
        text: 'React Native Intern — Opebo',
        image: '/opebo.png',
    },
    {
        link: 'javascript:void(0)',
        text: 'Smart India Hackathon',
        image: '/sih.png',
    },
];

export default function Experience() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <section
            id="experience"
            className="min-h-screen section-padding relative overflow-hidden"
            style={{ backgroundColor: '#1a1a17' }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="font-display text-[clamp(3rem,10vw,8rem)] text-[#c8c2b4] text-center leading-[0.9] mb-4"
            >
                EXPERIENCE
            </motion.h2>
            <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-16">
                Click to view details
            </p>

            <div
                style={{ height: '500px', position: 'relative' }}
                onClick={(e) => {
                    const target = e.target as HTMLElement;
                    const link = target.closest('.menu__item-link');
                    if (link) {
                        const items = Array.from(document.querySelectorAll('.menu__item-link'));
                        const idx = items.indexOf(link);
                        if (idx >= 0) {
                            setSelected(selected === idx ? null : idx);
                        }
                    }
                }}
            >
                <FlowingMenu
                    items={experienceItems}
                    speed={15}
                    textColor="#c8c2b4"
                    bgColor="#1a1a17"
                    marqueeBgColor="#c8c2b4"
                    marqueeTextColor="#1a1a17"
                    borderColor="rgba(200, 194, 180, 0.15)"
                />
            </div>

            {/* Job Description Panel */}
            <AnimatePresence mode="wait">
                {selected !== null && (
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="max-w-4xl mx-auto mt-12"
                    >
                        <div
                            className="rounded-xl p-6 md:p-8 relative"
                            style={{
                                background: 'rgba(200, 194, 180, 0.03)',
                                border: '1px solid rgba(200, 194, 180, 0.1)',
                                borderLeft: '3px solid #c8c2b4',
                            }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 text-[#a09888] hover:text-[#c8c2b4] transition-colors text-xl"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                                <h3 className="font-display text-2xl md:text-3xl tracking-wider text-[#c8c2b4]">
                                    {experienceDetails[selected].role}
                                </h3>
                                <span className="text-[#a09888]/60 text-sm">
                                    {experienceDetails[selected].period}
                                </span>
                            </div>
                            <p className="text-[#a09888]/80 text-sm mb-6">
                                {experienceDetails[selected].company} · {experienceDetails[selected].location}
                            </p>
                            <ul className="space-y-3">
                                {experienceDetails[selected].bullets.map((bullet, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: j * 0.1, duration: 0.4 }}
                                        className="text-[#a09888]/70 text-sm font-light leading-relaxed flex gap-3"
                                    >
                                        <span className="text-[#c8c2b4] mt-0.5 flex-shrink-0">▸</span>
                                        {bullet}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
