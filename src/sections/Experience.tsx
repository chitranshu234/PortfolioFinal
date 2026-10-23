import PigmentExperienceLedger from '../components/ui/pigment-experience-ledger';
import type { LedgerItem } from '../components/ui/pigment-experience-ledger';

const experienceItems: LedgerItem[] = [
    {
        company: 'Klassway',
        role: 'Full Stack Developer',
        years: 'Jan 2026 – Mar 2026',
        location: 'Remote',
        industry: 'EdTech & Web Development',
        summary: [
            "Developed two production-ready React.js websites for the company's web presence, serving 100+ users and improving load times by 25%.",
            'Created adaptive layouts and tuned frontend performance across both websites, enhancing usability and ensuring a consistent experience on desktop and mobile devices.',
        ],
        tags: ['React.js', 'JavaScript', 'Frontend Performance', 'Tailwind CSS', 'Responsive UI'],
        logo: <img src="/klassway.png" alt="Klassway" className="h-4 w-auto rounded-sm object-contain" />,
    },
    {
        company: 'Opebo',
        role: 'React Native Developer Intern',
        years: 'Nov 2025 – Feb 2026',
        location: 'Remote',
        industry: 'Mobile App Development',
        summary: [
            'Translated Figma designs into responsive Android and iOS interfaces using React Native and Expo, achieving 98% design accuracy.',
            'Optimized mobile UI rendering through lazy loading, reducing render times by 35%, and integrated REST APIs for dynamic data fetching and backend communication.',
        ],
        tags: ['React Native', 'Expo', 'Mobile UI', 'REST APIs', 'TypeScript', 'Cross-Platform'],
        logo: <img src="/opebo.png" alt="Opebo" className="h-4 w-auto rounded-sm object-contain" />,
    },
    {
        company: 'SIH 2025',
        role: 'Technical Head',
        years: 'Sep 2025 – Oct 2025',
        location: 'Pantnagar',
        industry: 'GovTech & Supply Chain (Rank 6)',
        summary: [
            'Led development of LeafLink, a medicinal herb traceability prototype with GPS origin tracking, QR code generation, and batch verification.',
            'Designed a responsive web interface with multi-step data entry and batch identification for transparent herb collection and traceability.',
        ],
        tags: ['System Architecture', 'GPS Tracking', 'QR Verification', 'Python', 'Supply Chain', 'Leadership'],
        logo: <img src="/sih.png" alt="SIH 2025" className="h-4 w-auto rounded-sm object-contain" />,
    },
];

export default function Experience() {
    return (
        <PigmentExperienceLedger
            id="experience"
            items={experienceItems}
            heading="EXPERIENCE"
            intro="Professional roles, engineering internships, and leadership achievements building modern software and AI platforms."
            footnote="National Finalist at Smart India Hackathon 2025, securing Rank 6 among 500+ competing engineering teams nationwide"
            cta={{
                label: 'View Full Resume',
                href: 'https://drive.google.com/file/d/13X1yZoe-KHRkmdQLloz_V5cNdwio68M-/view?usp=sharing',
            }}
            colors={['#a8825c', '#c4ad93', '#2c2721']}
            strength={0.85}
            residue={0.2}
            defaultOpen={0}
            background="#1a1a17"
            ink="#c8c2b4"
            fontFamily="'Bebas Neue', 'Inter', sans-serif"
            uppercase
            minHeight="auto"
        />
    );
}
