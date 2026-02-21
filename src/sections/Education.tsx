import { motion } from 'framer-motion';
import MagicBento from '../components/MagicBento';

/* ─── Education Data ─── */
const educationData = [
    {
        degree: 'B.Tech in Electronics & Communication Engineering',
        institution: 'G.B. Pant University of Agriculture & Technology',
        period: '2023 – 2027 (Expected)',
        detail: 'GPA: 7.4/10 · Focusing on software development alongside core engineering curriculum',
    },
    {
        degree: 'Intermediate (Class XII)',
        institution: 'New Beersheba Sr. Sec. School',
        period: 'Completed: June 2022',
        detail: 'Achieved 90.2% in board examinations',
    },
    {
        degree: 'High School (Class X)',
        institution: 'New Beersheba Sr. Sec. School',
        period: 'Completed: 2020',
        detail: 'Achieved 92.3% in board examinations',
    },
];

/* ─── Certification Data (for MagicBento) ─── */
const certificationCards = [
    {
        color: '#1a1a17',
        title: 'Introduction to HTML, CSS, & JavaScript',
        description: 'Comprehensive web development fundamentals',
        label: 'July 2025',
        credentialUrl: 'https://coursera.org/verify/KBW9KEXV6FWO',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8c2b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
    },
    {
        color: '#1a1a17',
        title: 'PLC & SCADA',
        description: 'Industrial automation and control systems',
        label: 'August 2024',
        credentialUrl: 'https://lnkd.in/geRS93fV',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8c2b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        ),
    },
    {
        color: '#1a1a17',
        title: 'Cloud Native, Microservices, Containers, DevOps and Agile',
        description: 'IBM · Cloud-native application development and DevOps practices',
        label: 'January 2026',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/NAH7XBG4A9CF',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8c2b4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
            </svg>
        ),
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="min-h-screen section-padding relative overflow-hidden"
            style={{ backgroundColor: '#1a1a17' }}
        >
            {/* ─── Section Title ─── */}
            <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="font-display text-[clamp(3rem,12vw,10rem)] text-[#c8c2b4] text-center leading-[0.9] mb-4"
            >
                EDUCATION
            </motion.h2>
            <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-16">
                Academic Journey
            </p>

            {/* ─── Timeline ─── */}
            <div className="max-w-3xl mx-auto relative mb-24">
                {/* Vertical line */}
                <div
                    className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(200,194,180,0.2), transparent)' }}
                />

                {educationData.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Card */}
                        <div
                            className={`w-full md:w-[45%] p-6 rounded-2xl border border-[rgba(200,194,180,0.08)] ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'
                                }`}
                            style={{ background: 'rgba(200,194,180,0.03)' }}
                        >
                            <h3 className="font-display text-[#c8c2b4] text-lg tracking-wider mb-1">
                                {item.degree}
                            </h3>
                            <p className="text-[#a09888]/70 text-sm italic mb-1">{item.institution}</p>
                            <p className="text-[#a09888]/50 text-xs tracking-wider mb-2">{item.period}</p>
                            <p className="text-[#a09888]/50 text-xs leading-relaxed">{item.detail}</p>
                        </div>

                        {/* Dot on timeline */}
                        <div className="hidden md:flex items-center justify-center w-[10%]">
                            <div
                                className="w-3 h-3 rounded-full border-2"
                                style={{
                                    borderColor: 'rgba(200,194,180,0.4)',
                                    background: '#1a1a17',
                                }}
                            />
                        </div>

                        {/* Spacer for other side */}
                        <div className="hidden md:block w-[45%]" />
                    </motion.div>
                ))}
            </div>

            {/* ─── Certifications Title ─── */}
            <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="font-display text-[clamp(2rem,8vw,5rem)] text-[#c8c2b4] text-center leading-[0.9] mb-4"
            >
                CERTIFICATIONS
            </motion.h3>
            <p className="text-center text-[#a09888]/50 text-xs tracking-[0.3em] uppercase mb-12">
                Professional Development
            </p>

            {/* ─── Bento Certification Cards ─── */}
            <div className="flex justify-center">
                <MagicBento
                    cardData={certificationCards}
                    textAutoHide={true}
                    enableStars
                    enableSpotlight
                    enableBorderGlow={true}
                    enableTilt={false}
                    enableMagnetism={false}
                    clickEffect
                    spotlightRadius={400}
                    particleCount={12}
                    glowColor="200, 194, 180"
                    disableAnimations={false}
                />
            </div>
        </section>
    );
}
