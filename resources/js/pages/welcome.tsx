import { useState } from 'react';

import { SubHero } from '../components/SubHero';
import { DocumentHead } from '../components/DocumentHead';
import { HeroSection } from '../components/HeroSection';
import { Navigation } from '../components/Navigation';
import { Ecosystem } from '@/components/Ecosystem';
import { TargetAudience } from '@/components/TargetAudience';
import { Footer } from '@/components/Footer';

export default function Welcome() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <DocumentHead />
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <HeroSection />
            <SubHero />
            <Ecosystem />
            <TargetAudience />
            <div className="py-12 bg-white"></div>
            <Footer />
        </>
    );
}
