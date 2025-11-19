import { motion } from 'framer-motion';

import Blob1 from '../../assets/blob_1.svg';
import Blob2 from '../../assets/blob_2.svg';
import Blob4 from '../../assets/blob_4.svg';
import EcosysBg from '../../assets/ecosys_bg_2.svg';
import TopBlob from '../../assets/ecosys_top_blob.svg';
import EmailIcon from '../../assets/email.png';
import FacebookIcon from '../../assets/facebook.png';
import LinkedinIcon from '../../assets/linkedin.png';
import Mascot2 from '../../assets/mascot_2.png';
import PhoneIcon from '../../assets/phone.png';

interface EcosystemBannerProps {
    showDebug?: boolean;
}

export function EcosystemBanner({ showDebug = false }: EcosystemBannerProps) {
    return (
        <motion.div className="relative w-full">
            {/* Blob backgrounds for desktop only */}
            <motion.div className="relative z-0 hidden w-full bg-white lg:block">
                <motion.img
                    className="absolute -top-4 z-0 w-full object-cover"
                    src={TopBlob}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.img
                    className="relative z-10 w-full object-cover"
                    src={EcosysBg}
                />
            </motion.div>

            {/* Contact Section */}
            {/* <div className="absolute top-[calc(50%+50px)] right-24 left-24 z-20 flex -translate-y-1/2 lg:right-60 lg:left-60">
                Left half - Mascot and Links
                <div className="flex w-1/2 flex-col">
                    Upper section
                    <div className="relative h-1/2 overflow-hidden pr-24">
                        Mascot - center
                        <motion.img
                            src={Mascot2}
                            alt="Mascot"
                            className="absolute top-1/2 left-[45%] w-72 -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        Blob 1 - top right
                        <motion.img
                            src={Blob1}
                            alt="Blob"
                            className="absolute top-8 right-24 w-12"
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 5, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                },
                                x: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                },
                            }}
                        />

                        Blob 4 - top left
                        <motion.img
                            src={Blob4}
                            alt="Blob"
                            className="absolute top-4 left-4 w-10"
                            animate={{
                                y: [0, 10, 0],
                                x: [0, -5, 0],
                                rotate: [0, 0, 0, 360],
                            }}
                            transition={{
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                },
                                x: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                },
                                rotate: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                },
                            }}
                        />

                        Blob 2 - bottom left
                        <motion.img
                            src={Blob2}
                            alt="Blob"
                            className="absolute bottom-6 left-12 w-14"
                            animate={{
                                y: [0, -12, 0],
                                x: [0, 8, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                },
                                x: {
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                },
                            }}
                        />
                    </div>

                    Lower section
                    <div className="flex h-1/2 flex-col justify-start space-y-4 pt-6 pr-24">
                        Divider line
                        <div className="h-px w-full bg-white opacity-30"></div>

                        LinkedIn
                        <motion.a
                            href="https://www.linkedin.com/company/robo-code-club"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 pt-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={LinkedinIcon}
                                alt="LinkedIn"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                linkedin.com/company/robo-code-club
                            </span>
                        </motion.a>

                        Facebook
                        <motion.a
                            href="https://www.facebook.com/robocodeclubph"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={FacebookIcon}
                                alt="Facebook"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                facebook.com/robocodeclubph
                            </span>
                        </motion.a>

                        Phone
                        <motion.a
                            href="tel:+639980471693"
                            className="flex items-center gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={PhoneIcon}
                                alt="Phone"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                +63 998 047 1693
                            </span>
                        </motion.a>

                        Email
                        <motion.a
                            href="mailto:contact@robocodeclub.com"
                            className="flex items-center gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={EmailIcon}
                                alt="Email"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                contact@robocodeclub.com
                            </span>
                        </motion.a>
                    </div>
                </div>

                Right half - Contact Form
                <div className="w-1/2">
                    <h1
                        id="contact"
                        className="text-5xl font-bold text-white"
                        style={{
                            fontFamily: 'Fredoka',
                            scrollMarginTop: '0',
                        }}
                    >
                        Contact Us
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Join us in building curiosity that builds the future!
                    </p>

                    <form className="mt-8 space-y-6">
                        Name Field
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-lg font-semibold text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Your Name Here"
                                className="w-full rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        Email Field
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-lg font-semibold text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email Address Here"
                                className="w-full rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        Message Field
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-lg font-semibold text-white"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Enter Your Message Here"
                                className="w-full resize-none rounded-3xl border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>

                        Submit Button
                        <div>
                            <button
                                type="submit"
                                className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-12 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}

            {/* New 75vw centered div for Contact Section */}
            <div className="relative z-20 w-full bg-blue-950 px-4 py-16 sm:px-24 lg:absolute lg:top-[calc(50%+50px)] lg:bg-transparent lg:-translate-y-1/2 lg:px-60">
                <motion.div
                    className="relative left-1/2 w-[75vw] -translate-x-1/2"
                    style={
                        showDebug
                            ? {
                                  outline: '4px solid violet',
                                  outlineOffset: '-4px',
                              }
                            : {}
                    }
                >
                    <motion.div className="flex w-full flex-col lg:flex-row">
                        {/* Left Section - 50% Mascot and Links */}
                        <motion.div
                            className="order-2 flex w-full flex-col lg:order-none lg:w-1/2"
                            style={
                                showDebug
                                    ? {
                                          outline: '2px solid red',
                                          outlineOffset: '-2px',
                                      }
                                    : {}
                            }
                        >
                            {/* Upper section - Mascot */}
                            <div className="relative h-1/2 overflow-hidden pr-24">
                                {/* Mascot - center */}
                                <motion.img
                                    src={Mascot2}
                                    alt="Mascot"
                                    className="absolute top-1/2 left-[45%] w-72 -translate-x-1/2 -translate-y-1/2"
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [-5, 5, -5],
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />

                                {/* Blob 1 - top right */}
                                <motion.img
                                    src={Blob1}
                                    alt="Blob"
                                    className="absolute top-8 right-24 w-12"
                                    animate={{
                                        y: [0, -10, 0],
                                        x: [0, 5, 0],
                                    }}
                                    transition={{
                                        y: {
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        },
                                        x: {
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        },
                                    }}
                                />

                                {/* Blob 4 - top left */}
                                <motion.img
                                    src={Blob4}
                                    alt="Blob"
                                    className="absolute top-4 left-4 w-10"
                                    animate={{
                                        y: [0, 10, 0],
                                        x: [0, -5, 0],
                                        rotate: [0, 0, 0, 360],
                                    }}
                                    transition={{
                                        y: {
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 0.5,
                                        },
                                        x: {
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 0.5,
                                        },
                                        rotate: {
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        },
                                    }}
                                />

                                {/* Blob 2 - bottom left */}
                                <motion.img
                                    src={Blob2}
                                    alt="Blob"
                                    className="absolute bottom-6 left-12 w-14"
                                    animate={{
                                        y: [0, -12, 0],
                                        x: [0, 8, 0],
                                    }}
                                    transition={{
                                        y: {
                                            duration: 7,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 1,
                                        },
                                        x: {
                                            duration: 7,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 1,
                                        },
                                    }}
                                />
                            </div>

                            {/* Lower section - Links */}
                            <div className="flex h-1/2 flex-col justify-start space-y-4 pt-6 pr-24">
                                {/* Divider line */}
                                <div className="h-px w-full bg-white opacity-30"></div>

                                {/* LinkedIn */}
                                <motion.a
                                    href="https://www.linkedin.com/company/robo-code-club"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 pt-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={LinkedinIcon}
                                        alt="LinkedIn"
                                        className="h-12 w-12"
                                    />
                                    <span className="text-lg text-white">
                                        linkedin.com/company/robo-code-club
                                    </span>
                                </motion.a>

                                {/* Facebook */}
                                <motion.a
                                    href="https://www.facebook.com/robocodeclubph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={FacebookIcon}
                                        alt="Facebook"
                                        className="h-12 w-12"
                                    />
                                    <span className="text-lg text-white">
                                        facebook.com/robocodeclubph
                                    </span>
                                </motion.a>

                                {/* Phone */}
                                <motion.a
                                    href="tel:+639980471693"
                                    className="flex items-center gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={PhoneIcon}
                                        alt="Phone"
                                        className="h-12 w-12"
                                    />
                                    <span className="text-lg text-white">
                                        +63 998 047 1693
                                    </span>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href="mailto:contact@robocodeclub.com"
                                    className="flex items-center gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={EmailIcon}
                                        alt="Email"
                                        className="h-12 w-12"
                                    />
                                    <span className="text-lg text-white">
                                        contact@robocodeclub.com
                                    </span>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Right Section - 50% Contact Form */}
                        <motion.div
                            className="order-1 w-full lg:order-none lg:w-1/2"
                            style={
                                showDebug
                                    ? {
                                          outline: '2px solid blue',
                                          outlineOffset: '-2px',
                                      }
                                    : {}
                            }
                        >
                            <h1
                                id="contact"
                                className="text-5xl font-bold text-white"
                                style={{
                                    fontFamily: 'Fredoka',
                                    scrollMarginTop: '0',
                                }}
                            >
                                Contact Us
                            </h1>
                            <p className="mt-4 text-xl text-white">
                                Join us in building curiosity that builds the future!
                            </p>

                            <form className="mt-8 space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-lg font-semibold text-white"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Your Name Here"
                                        className="w-full rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-lg font-semibold text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter Your Email Address Here"
                                        className="w-full rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-lg font-semibold text-white"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="Enter Your Message Here"
                                        className="w-full resize-none rounded-3xl border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-12 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
