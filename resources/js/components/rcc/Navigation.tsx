import { motion } from 'framer-motion';
import RoboCodeLogo from '../../assets/rcc_logo.svg';

interface NavigationProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) {
    return (
        <motion.nav className="fixed top-0 z-50 w-full">
            {/* Desktop Navigation */}
            <motion.div className="hidden md:flex w-full justify-center px-6 pt-4">
                <motion.div 
                    className="flex items-center gap-8 backdrop-blur-2xl rounded-2xl border shadow-2xl px-6 py-3"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
                        backdropFilter: 'blur(25px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                        border: '1px solid rgba(255,255,255,0.125)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.05)'
                    }}
                >
                    <motion.img 
                        src={RoboCodeLogo} 
                        className="h-8 mr-8"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    
                    {['Home', 'Future', 'Product', 'Partners', 'Team', 'Impact'].map((item, index) => (
                        <motion.a
                            key={item}
                            className="text-white/95 hover:text-white text-sm font-medium px-3 py-2 rounded-xl transition-all duration-100 hover:bg-white/15 cursor-pointer"
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                    
                    <motion.div className="ml-8 flex items-center gap-3">
                        <motion.a 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 20px rgba(99, 102, 241, 0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                boxShadow: '0 10px 25px rgba(99, 102, 241, 0.2)'
                            }}
                        >
                            Contact Us
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Mobile Navigation */}
            <motion.div 
                className="md:hidden mx-4 mt-4 backdrop-blur-2xl rounded-2xl border shadow-2xl"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
                    backdropFilter: 'blur(25px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(25px) saturate(180%)',
                    border: '1px solid rgba(255,255,255,0.125)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.05)'
                }}
            >
                <div className="flex items-center justify-between px-6 py-4">
                    <motion.img 
                        src={RoboCodeLogo} 
                        className="h-7"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white/95 hover:text-white hover:bg-white/15 rounded-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Menu Dropdown */}
                <motion.div 
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-white/20`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <motion.div className="flex flex-col space-y-1 px-4 py-4">
                        {['Product', 'Pricing', 'Resources', 'Company', 'Contact'].map((item, index) => (
                            <motion.a 
                                key={item}
                                className="text-white/95 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/15 cursor-pointer"
                                whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.15)' }}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : -20 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                        
                        <div className="pt-2 space-y-2">
                            <motion.a 
                                className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 px-4 rounded-xl font-semibold shadow-lg cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    boxShadow: '0 10px 25px rgba(99, 102, 241, 0.2)'
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