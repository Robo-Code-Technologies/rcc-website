import { motion } from 'framer-motion';

import Logo from '../assets/rcc_logo.svg';

export function Footer() {
    return (
        <motion.div className="bg-white px-32 py-16">
            <motion.div className="flex items-end">
                <motion.img
                    className="w-24"
                    src={Logo}
                    alt="Robocode Club Logo"
                />
                <div className="flex-1"></div>
                <motion.a
                    className="text-gray-500"
                    href="mailto:contact@robocodeclub.com"
                >
                    contact@robocodeclub.com
                </motion.a>
                <motion.p className="mx-2 text-lg text-gray-500">|</motion.p>
                <motion.p className="text-gray-500">
                    Panay, Capiz, Philippines 5800
                </motion.p>
            </motion.div>
            <hr className="my-3 h-[1px] border-none bg-gray-300" />
            <motion.div className="flex">
                <motion.p className="text-gray-500">
                    Copyright @2025 Robo Code Technologies. All Rights Reserved.
                </motion.p>

                <div className="flex-1"></div>

                <motion.a className="text-gray-500">
                    Terms & Conditions
                </motion.a>
                <motion.p className="text-gray-500 mx-2">-</motion.p>
                <motion.a className="text-gray-500">
                    Privacy Policy
                </motion.a>
            </motion.div>
        </motion.div>
    );
}
