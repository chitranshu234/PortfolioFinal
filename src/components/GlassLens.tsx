import { useEffect, useRef, useState } from 'react';

/**
 * A glass lens that follows the cursor across the entire website.
 * Uses backdrop-filter for a frosted/refractive glass look.
 */
export default function GlassLens() {
    const lensRef = useRef<HTMLDivElement>(null);
    const posRef = useRef({ x: -200, y: -200 });
    const currentRef = useRef({ x: -200, y: -200 });
    const rafRef = useRef<number>(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            if (!visible) setVisible(true);
        };

        const handleLeave = () => {
            setVisible(false);
        };

        const animate = () => {
            const curr = currentRef.current;
            const target = posRef.current;

            // Smooth interpolation
            curr.x += (target.x - curr.x) * 0.15;
            curr.y += (target.y - curr.y) * 0.15;

            if (lensRef.current) {
                lensRef.current.style.transform = `translate(${curr.x - 27}px, ${curr.y - 27}px)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseleave', handleLeave);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseleave', handleLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, [visible]);

    return (
        <div
            ref={lensRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 55,
                height: 55,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 9999,
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.3s ease',
                backdropFilter: 'blur(2px) brightness(1.4) saturate(1.8) contrast(1.1)',
                WebkitBackdropFilter: 'blur(2px) brightness(1.4) saturate(1.8) contrast(1.1)',
                border: '1px solid rgba(200, 194, 180, 0.25)',
                boxShadow: `
                    0 0 30px rgba(200, 194, 180, 0.12),
                    inset 0 0 20px rgba(200, 194, 180, 0.08),
                    0 0 0 1px rgba(200, 194, 180, 0.1)
                `,
                background: `
                    radial-gradient(circle at 30% 30%, rgba(200, 194, 180, 0.15), transparent 50%),
                    radial-gradient(circle at 70% 70%, rgba(58, 53, 48, 0.1), transparent 50%)
                `,
                willChange: 'transform',
            }}
        />
    );
}
