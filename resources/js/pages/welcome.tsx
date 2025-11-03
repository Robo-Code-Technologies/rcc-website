import { useState } from 'react';

import ContactUs from '@/components/rcc/ContactUs';
import { Ecosystem } from '@/components/rcc/Ecosystem';
import { Footer } from '@/components/rcc/Footer';
import InAction from '@/components/rcc/InAction';
import { TargetAudience } from '@/components/rcc/TargetAudience';
import { DocumentHead } from '../components/rcc/DocumentHead';
import { HeroSection } from '../components/rcc/HeroSection';
import { Navigation } from '../components/rcc/Navigation';
import { SubHero } from '../components/rcc/SubHero';

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
            <div className="bg-white p-16">
                <hr className="h-[1px] border-none bg-gray-200" />
            </div>
            <InAction />
            <div className="bg-white py-16"></div>
            <ContactUs />
            <Footer />
        </>
    );
}
