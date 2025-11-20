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
        { label: 'Problem', id: 'future' },
        { label: 'Product', id: 'product' },
        { label: 'Partners', id: 'partners' },
        { label: 'Team', id: 'team' },
        { label: 'Impact', id: 'impact' },
    ];

    return (
        <motion.nav className="fixed top-0 z-[200] w-full max-w-full overflow-x-hidden">
            {/* Desktop Navigation */}
            <motion.div className="hidden w-full justify-center px-3 pt-3 md:flex md:px-4 md:pt-4 lg:px-6">
                <motion.div
                    className="flex items-center gap-2 rounded-2xl border px-3 py-2 shadow-2xl backdrop-blur-2xl md:gap-4 md:px-4 md:py-2.5 lg:gap-6 lg:px-6 lg:py-3"
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
                        className="mr-2 h-6 cursor-pointer md:mr-4 md:h-7 lg:mr-8 lg:h-8"
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
                            className="cursor-pointer rounded-xl px-2 py-1.5 text-xs font-medium text-white/95 transition-all duration-100 hover:bg-white/15 hover:text-white md:px-2.5 md:py-2 md:text-sm lg:px-3"
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}

                    <motion.div className="ml-2 flex items-center gap-2 md:ml-4 md:gap-3 lg:ml-8">
                        <motion.a
                            onClick={() => scrollToSection('contact')}
                            className="cursor-pointer rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl md:px-4 md:py-2 md:text-sm lg:px-6 lg:py-2.5"
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
                className="mx-2 mt-2 max-w-[calc(100vw-1rem)] rounded-2xl border shadow-2xl backdrop-blur-2xl sm:mx-3 sm:max-w-[calc(100vw-1.5rem)] md:hidden"
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
                <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5">
                    <motion.img
                        src={RoboCodeLogo}
                        className="h-6 cursor-pointer sm:h-7"
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
                    <motion.div className="flex flex-col space-y-1 px-3 py-3 sm:px-4 sm:py-4">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.label}
                                onClick={() => scrollToSection(item.id)}
                                className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-white/95 transition-all duration-300 hover:bg-white/15 hover:text-white sm:px-4 sm:py-3 sm:text-base"
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
                                className="block cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-lg sm:px-4 sm:py-3 sm:text-base"
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
