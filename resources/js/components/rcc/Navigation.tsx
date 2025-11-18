import { motion } from 'framer-motion';
import { useEffect } from 'react';
import RoboCodeLogo from '../../assets/rcc_logo.svg';

interface NavigationProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
    showDebug: boolean;
    setShowDebug: (show: boolean) => void;
}

export function Navigation({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    showDebug,
    setShowDebug,
}: NavigationProps) {
    useEffect(() => {
        // Toggle the 'hide-guides' class on body to hide CSS guide lines
        if (showDebug) {
            document.body.classList.remove('hide-guides');
        } else {
            document.body.classList.add('hide-guides');
        }
    }, [showDebug]);

    const toggleDebug = () => {
        setShowDebug(!showDebug);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'Future', id: 'future' },
        { label: 'Product', id: 'product' },
        { label: 'Partners', id: 'partners' },
        { label: 'Team', id: 'team' },
        { label: 'Impact', id: 'impact' },
    ];

    return (
        <motion.nav className="fixed top-0 z-[200] w-full">
            {/* Desktop Navigation */}
            <motion.div className="hidden w-full justify-center px-6 pt-4 md:flex">
                <motion.div
                    className="flex items-center gap-8 rounded-2xl border px-6 py-3 shadow-2xl backdrop-blur-2xl"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
                        backdropFilter: 'blur(25px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                        border: '1px solid rgba(255,255,255,0.125)',
                        boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.05)',
                    }}
                >
                    <motion.img
                        src={RoboCodeLogo}
                        className="mr-8 h-8 cursor-pointer"
                        onClick={toggleDebug}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        title="Toggle Debug Guides"
                    />

                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.label}
                            onClick={() => scrollToSection(item.id)}
                            className="cursor-pointer rounded-xl px-3 py-2 text-sm font-medium text-white/95 transition-all duration-100 hover:bg-white/15 hover:text-white"
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}

                    <motion.div className="ml-8 flex items-center gap-3">
                        <motion.a
                            onClick={() => scrollToSection('contact')}
                            className="cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    '0 20px 40px rgba(0,0,0,0.15), 0 0 20px rgba(99, 102, 241, 0.3)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background:
                                    'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                boxShadow:
                                    '0 10px 25px rgba(99, 102, 241, 0.2)',
                            }}
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Mobile Navigation */}
            <motion.div
                className="mx-4 mt-4 rounded-2xl border shadow-2xl backdrop-blur-2xl md:hidden"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
                    backdropFilter: 'blur(25px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.125)',
                    boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
            >
                <div className="flex items-center justify-between px-6 py-4">
                    <motion.img
                        src={RoboCodeLogo}
                        className="h-7 cursor-pointer"
                        onClick={toggleDebug}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        title="Toggle Debug Guides"
                    />
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="rounded-xl p-2 text-white/95 transition-all duration-300 hover:bg-white/15 hover:text-white"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: 'rgba(255,255,255,0.15)',
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu Dropdown */}
                <motion.div
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-white/20`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        y: isMobileMenuOpen ? 0 : -20,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <motion.div className="flex flex-col space-y-1 px-4 py-4">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className="cursor-pointer rounded-xl px-4 py-3 text-white/95 transition-all duration-300 hover:bg-white/15 hover:text-white"
                                whileHover={{
                                    x: 4,
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isMobileMenuOpen ? 1 : 0,
                                    x: isMobileMenuOpen ? 0 : -20,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                            >
                                {item.label}
                            </motion.a>
                        ))}

                        <div className="space-y-2 pt-2">
                            <motion.a
                                onClick={() => scrollToSection('contact')}
                                className="block cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-center font-semibold text-white shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    background:
                                        'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    boxShadow:
                                        '0 10px 25px rgba(99, 102, 241, 0.2)',
                                }}
                            >
                                Contact Us
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.nav>
    );
}
