import { useState } from 'react';

import { Ecosystem } from '@/components/rcc/Ecosystem';
import { EcosystemBanner } from '@/components/rcc/EcosystemBanner';
import { Footer } from '@/components/rcc/Footer';
import InAction from '@/components/rcc/InAction';
import { TargetAudience } from '@/components/rcc/TargetAudience';
import { DocumentHead } from '../components/rcc/DocumentHead';
import { HeroSection } from '../components/rcc/HeroSection';
import { Navigation } from '../components/rcc/Navigation';
import { SubHero } from '../components/rcc/SubHero';

export default function Welcome() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showDebug, setShowDebug] = useState(true);

    return (
        <>
            <DocumentHead />
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                showDebug={showDebug}
                setShowDebug={setShowDebug}
            />
            <HeroSection />
            <SubHero showDebug={showDebug} />
            <Ecosystem />
            <TargetAudience />
            <div className="bg-white px-24 py-16 sm:px-36 md:px-48 lg:px-60">
                <hr className="h-[1px] border-none bg-gray-200" />
            </div>
            <InAction />
            <div className="bg-white py-16"></div>
            <EcosystemBanner />
            <Footer />
        </>
    );
}
