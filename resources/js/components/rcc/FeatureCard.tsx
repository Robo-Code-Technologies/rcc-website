import { motion } from 'framer-motion';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
    isFirst?: boolean;
    isLast?: boolean;
}

export function FeatureCard({ title, description, icon, isFirst = false, isLast = false }: FeatureCardProps) {
    return (
        <>
            <motion.li className={isFirst ? '' : 'mt-6'}>
                <motion.div className="flex list-none items-center gap-3 sm:gap-5">
                    <motion.div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-yellow-300 shadow flex-shrink-0">
                        <motion.img
                            className="w-3 sm:w-4"
                            src={icon}
                        />
                    </motion.div>
                    <motion.p className="text-base font-semibold text-blue-950 sm:text-lg">
                        {title}
                    </motion.p>
                </motion.div>
                <motion.p className="mb-4 ml-11 text-xs text-gray-500 sm:ml-15 sm:text-sm">
                    {description}
                </motion.p>
            </motion.li>
            {!isLast && <hr className="h-[1px] border-none bg-black/10" />}
        </>
    );
}