import HalftoneWordmarkFooter from '../components/ui/halftone-wordmark-footer';

export default function Contact() {
    return (
        <section id="contact">
            {/* Halftone Wordmark Footer */}
            <HalftoneWordmarkFooter
                wordmark="CHITRANSHU"
                label="Chitranshu Pandey"
                meta="© 2026 · Full Stack Developer | Gen AI Engineer"
                preset="night"
                palette={{
                    background: '#0c0c0b',
                    ink: '#c8c2b4',
                    warm: '#a09888',
                }}
                columns={[
                    {
                        title: 'Navigate',
                        links: [
                            { label: 'Home', href: '#hero' },
                            { label: 'About', href: '#about' },
                            { label: 'Work', href: '#work' },
                        ],
                    },
                    {
                        title: 'Connect',
                        links: [
                            { label: 'GitHub', href: 'https://github.com/chitranshu234' },
                            { label: 'LinkedIn', href: 'https://linkedin.com/in/chitranshupandey' },
                            { label: 'Email', href: 'mailto:chitranshupandey234@gmail.com' },
                        ],
                    },
                    {
                        title: 'More',
                        links: [
                            { label: 'Resume', href: 'https://drive.google.com/file/d/13X1yZoe-KHRkmdQLloz_V5cNdwio68M-/view?usp=sharing' },
                            { label: 'LeetCode', href: 'https://leetcode.com/u/chitranshu234/' },
                        ],
                    },
                ]}
                backToTop={false}
                dotGap={6}
                radius={80}
                crop={0.2}
                grain={0.5}
                interactive
                fontFamily="'Bebas Neue', 'Inter', sans-serif"
                fontWeight={800}
                height="480px"
            />
        </section>
    );
}
