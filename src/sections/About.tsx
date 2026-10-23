import { HeroSection } from '../components/ui/hero-section-2';

export default function About() {
    return (
        <section id="about" style={{ backgroundColor: '#1a1a17' }}>
            <HeroSection
                title={
                    <>
                        Building{' '}
                        <span className="text-[#a09888]">Intelligent</span>
                        <br />
                        Software Solutions
                    </>
                }
                subtitle="I'm a Full Stack Developer and Generative AI Engineer specializing in Java, Spring Boot, React, and Python. I build AI-powered platforms like Sensei (codebase analysis with RAG and LangChain) and distributed systems like RetryX. National Finalist at Smart India Hackathon 2025, securing Rank 6 among 500+ teams."
                backgroundImage="/about-profile.png"
                contactInfo={{
                    website: 'github.com/chitranshu234',
                    phone: '+91 8937987102',
                    address: 'Pantnagar, Uttarakhand',
                }}
                className="min-h-[85vh]"
            />
        </section>
    );
}
