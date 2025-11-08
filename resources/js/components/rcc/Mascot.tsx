import { useEffect, useRef, useState } from 'react';

export function Mascot() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isBlinking, setIsBlinking] = useState(false);
    const leftEyeRef = useRef<HTMLDivElement>(null);
    const rightEyeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Blink effect every 5 seconds
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150); // Blink duration: 150ms
        }, 5000); // Blink every 5 seconds

        return () => clearInterval(blinkInterval);
    }, []);

    const calculateEyePosition = (eyeRef: React.RefObject<HTMLDivElement>) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const eyeBox = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eyeBox.left + eyeBox.width / 2;
        const eyeCenterY = eyeBox.top + eyeBox.height / 2;

        const angle = Math.atan2(
            mousePos.y - eyeCenterY,
            mousePos.x - eyeCenterX,
        );
        const distance = Math.min(
            eyeBox.width / 4, // Max distance the pupil can move (25% of box size)
            Math.hypot(mousePos.x - eyeCenterX, mousePos.y - eyeCenterY) / 10,
        );

        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
        };
    };

    const leftEyePos = calculateEyePosition(leftEyeRef);
    const rightEyePos = calculateEyePosition(rightEyeRef);

    return (
        <div
            className="relative mr-[168px] w-full max-w-md"
            style={{ transform: 'scale(1.05)' }}
        >
            <img src="/mascot.png" alt="Mascot" className="w-full rounded-lg" />

            {/* Left Eye */}
            <div
                ref={leftEyeRef}
                className="absolute flex items-center justify-center"
                style={{
                    width: '10%',
                    aspectRatio: '1',
                    top: '27%',
                    left: '40%',
                }}
            >
                <div
                    className="h-1/2 w-1/2 rounded-full bg-white transition-transform duration-100"
                    style={{
                        transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px) scaleY(${isBlinking ? 0.1 : 1})`,
                    }}
                />
            </div>

            {/* Right Eye */}
            <div
                ref={rightEyeRef}
                className="absolute flex items-center justify-center"
                style={{
                    width: '10%',
                    aspectRatio: '1',
                    top: '27%',
                    right: '38%',
                }}
            >
                <div
                    className="h-1/2 w-1/2 rounded-full bg-white transition-transform duration-100"
                    style={{
                        transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px) scaleY(${isBlinking ? 0.1 : 1})`,
                    }}
                />
            </div>
        </div>
    );
}
