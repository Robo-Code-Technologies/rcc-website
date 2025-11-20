import { motion } from 'framer-motion';

import Logo from '../../assets/rcc_logo.svg';

export function Footer() {
    return (
        <motion.div className="bg-[#192f66]">
            <div className="h-[1px] w-full bg-white opacity-30"></div>
            <div className="px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16 xl:px-32">
                {/* Top section: Logo and Contact Info */}
                <motion.div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-0">
                    <motion.img
                        className="w-16 sm:w-20 md:w-24"
                        src={Logo}
                        alt="Robocode Club Logo"
                    />
                    <div className="flex-1"></div>

                    {/* Contact info - stacked on mobile, inline on desktop */}
                    <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-0 sm:text-left">
                        <motion.a
                            className="text-sm text-white opacity-70 transition-opacity hover:opacity-100 sm:text-base"
                            href="mailto:contact@robocodeclub.com"
                        >
                            contact@robocodeclub.com
                        </motion.a>
                        <motion.p className="hidden text-lg text-white opacity-70 sm:mx-2 sm:block">
                            |
                        </motion.p>
                        <motion.p className="text-sm text-white opacity-70 sm:text-base">
                            Panay, Capiz, Philippines 5800
                        </motion.p>
                    </div>
                </motion.div>

                <hr className="my-4 h-[1px] border-none bg-white opacity-30 sm:my-6 md:my-8" />

                {/* Bottom section: Copyright and Links */}
                <motion.div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
                    <motion.p className="text-xs text-white opacity-70 sm:text-sm md:text-base">
                        Copyright @2025 Robo Code Technologies. All Rights
                        Reserved.
                    </motion.p>

                    <div className="flex-1"></div>

                    {/* Legal links */}
                    <div className="flex items-center gap-2">
                        <motion.a
                            className="cursor-pointer text-xs text-white opacity-70 transition-opacity hover:opacity-100 sm:text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Terms & Conditions
                        </motion.a>
                        <motion.p className="text-xs text-white opacity-70 sm:text-sm md:text-base">
                            -
                        </motion.p>
                        <motion.a
                            className="cursor-pointer text-xs text-white opacity-70 transition-opacity hover:opacity-100 sm:text-sm md:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Privacy Policy
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
