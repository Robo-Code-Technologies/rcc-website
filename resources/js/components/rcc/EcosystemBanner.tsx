import { motion } from 'framer-motion';
import { useState } from 'react';

import Blob1 from '../../assets/blob_1.svg';
import Blob2 from '../../assets/blob_2.svg';
import Blob4 from '../../assets/blob_4.svg';
import BgMobile from '../../assets/bg-mobile.svg';
import BlobTopMobile from '../../assets/blob-top-mobile.svg';
import BlobTopMobile2 from '../../assets/blob-top-mobile-2.svg';
import EcosysBg from '../../assets/ecosys_bg_2.svg';
import TopBlob from '../../assets/ecosys_top_blob.svg';
import EmailIcon from '../../assets/email.png';
import FacebookIcon from '../../assets/facebook.png';
import LinkedinIcon from '../../assets/linkedin.png';
import Mascot2 from '../../assets/mascot_2.png';
import PhoneIcon from '../../assets/phone.png';

interface EcosystemBannerProps {
}

export function EcosystemBanner() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Email validation regex
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Validate individual field
    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) {
                    return 'Please enter your name';
                }
                if (value.trim().length < 2) {
                    return 'Name must be at least 2 characters long';
                }
                return '';
            case 'email':
                if (!value.trim()) {
                    return 'Please enter your email address';
                }
                if (!isValidEmail(value)) {
                    return 'Please enter a valid email address (e.g., [email protected])';
                }
                return '';
            case 'message':
                if (!value.trim()) {
                    return 'Please enter a message';
                }
                if (value.trim().length < 10) {
                    return 'Message must be at least 10 characters long';
                }
                return '';
            default:
                return '';
        }
    };

    // Validate all fields
    const validateForm = (): boolean => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message),
        };
        
        setErrors(newErrors);
        setTouched({ name: true, email: true, message: true });
        
        return !newErrors.name && !newErrors.email && !newErrors.message;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing (only if field was touched)
        if (touched[name as keyof typeof touched]) {
            setErrors(prev => ({
                ...prev,
                [name]: validateField(name, value),
            }));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true,
        }));
        
        // Only validate on blur if already touched (user tried to submit)
        if (touched[name as keyof typeof touched]) {
            setErrors(prev => ({
                ...prev,
                [name]: validateField(name, value),
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validate form before submitting
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('https://n8n.robocodeclub.com/webhook/92ae8fc7-ec77-4967-879e-7c81c8442f6e', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Clear form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                setErrors({
                    name: '',
                    email: '',
                    message: '',
                });
                setTouched({
                    name: false,
                    email: false,
                    message: false,
                });
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <motion.div className="relative w-full bg-white">
            {/* Mobile: Top blobs - FIRST in vertical flow */}
            <motion.div className="relative w-full xl:hidden">
                {/* Blob 2 - Behind with animation */}
                <motion.img
                    src={BlobTopMobile2}
                    alt="Top Blob 2"
                    className="absolute top-0 left-0 z-0 block w-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                {/* Blob 1 - Front */}
                <img
                    src={BlobTopMobile}
                    alt="Top Blob"
                    className="relative z-10 block w-full"
                />
            </motion.div>

            {/* Blob backgrounds for desktop only */}
            <motion.div className="relative z-0 hidden w-full bg-white xl:block">
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

            {/* New 75vw centered div for Contact Section - TOPMOST layer */}
            <div className="relative z-50 w-full px-4 py-16 pb-24 sm:px-24 sm:pb-32 xl:absolute xl:top-[calc(50%+50px)] xl:-translate-y-1/2 xl:px-60 xl:pb-16">
                {/* Mobile background image */}
                <div className="absolute inset-0 z-0 xl:hidden">
                    <img
                        src={BgMobile}
                        alt="Background"
                        className="h-full w-full object-cover"
                    />
                </div>
                
                <motion.div
                    className="relative z-10 left-1/2 w-[75vw] -translate-x-1/2"
                >
                    <motion.div className="flex w-full flex-col xl:flex-row">
                        {/* Left Section - 50% Mascot and Links */}
                        <motion.div
                            className="order-2 flex w-full flex-col xl:order-none xl:w-1/2"
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
                            <div className="flex h-1/2 flex-col justify-start space-y-4 pt-6 pr-0 xl:pr-24">
                                {/* Divider line */}
                                <div className="h-px w-full bg-white opacity-30"></div>

                                {/* LinkedIn */}
                                <motion.a
                                    href="https://www.linkedin.com/company/robo-code-club"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 pt-4 sm:gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={LinkedinIcon}
                                        alt="LinkedIn"
                                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                                    />
                                    <span className="text-sm text-white sm:text-base md:text-lg">
                                        linkedin.com/company/robo-code-club
                                    </span>
                                </motion.a>

                                {/* Facebook */}
                                <motion.a
                                    href="https://www.facebook.com/robocodeclubph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 sm:gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={FacebookIcon}
                                        alt="Facebook"
                                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                                    />
                                    <span className="text-sm text-white sm:text-base md:text-lg">
                                        facebook.com/robocodeclubph
                                    </span>
                                </motion.a>

                                {/* Phone */}
                                <motion.a
                                    href="tel:+639980471693"
                                    className="flex items-center gap-2 sm:gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={PhoneIcon}
                                        alt="Phone"
                                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                                    />
                                    <span className="text-sm text-white sm:text-base md:text-lg">
                                        +63 998 047 1693
                                    </span>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href="mailto:contact@robocodeclub.com"
                                    className="flex items-center gap-2 sm:gap-4"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img
                                        src={EmailIcon}
                                        alt="Email"
                                        className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                                    />
                                    <span className="text-sm text-white sm:text-base md:text-lg">
                                        contact@robocodeclub.com
                                    </span>
                                </motion.a>
                            </div>
                        </motion.div>

                        {/* Right Section - 50% Contact Form */}
                        <motion.div
                            className="order-1 w-full xl:order-none xl:w-1/2"
                        >
                            <h1
                                id="contact"
                                className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-[clamp(1.5rem,5vh,4rem)]"
                                style={{
                                    fontFamily: 'Fredoka',
                                    scrollMarginTop: '0',
                                }}
                            >
                                Contact Us
                            </h1>
                            <p className="mt-4 text-base text-white sm:text-lg">
                                Join us in building curiosity that builds the future!
                            </p>

                            <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-6" onSubmit={handleSubmit}>
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-white sm:text-base md:text-lg"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Your Name Here"
                                        className={`w-full rounded-full border-2 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-md outline-none transition-colors sm:px-6 sm:py-4 sm:text-base ${
                                            touched.name && errors.name
                                                ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                                                : 'border-transparent focus:ring-2 focus:ring-blue-400'
                                        }`}
                                        aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                                        aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                                    />
                                    {touched.name && errors.name && (
                                        <p
                                            id="name-error"
                                            className="mt-2 text-sm text-red-200 sm:text-base"
                                            role="alert"
                                        >
                                            ⚠ {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-white sm:text-base md:text-lg"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Your Email Address Here"
                                        className={`w-full rounded-full border-2 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-md outline-none transition-colors sm:px-6 sm:py-4 sm:text-base ${
                                            touched.email && errors.email
                                                ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                                                : 'border-transparent focus:ring-2 focus:ring-blue-400'
                                        }`}
                                        aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                                        aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                                    />
                                    {touched.email && errors.email && (
                                        <p
                                            id="email-error"
                                            className="mt-2 text-sm text-red-200 sm:text-base"
                                            role="alert"
                                        >
                                            ⚠ {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-white sm:text-base md:text-lg"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter Your Message Here"
                                        className={`w-full resize-none rounded-3xl border-2 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 shadow-md outline-none transition-colors sm:px-6 sm:py-4 sm:text-base ${
                                            touched.message && errors.message
                                                ? 'border-red-500 focus:ring-2 focus:ring-red-400'
                                                : 'border-transparent focus:ring-2 focus:ring-blue-400'
                                        }`}
                                        aria-invalid={touched.message && errors.message ? 'true' : 'false'}
                                        aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                                    ></textarea>
                                    {touched.message && errors.message && (
                                        <p
                                            id="message-error"
                                            className="mt-2 text-sm text-red-200 sm:text-base"
                                            role="alert"
                                        >
                                            ⚠ {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 sm:px-12 sm:py-4 sm:text-base md:text-lg"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                    {submitStatus === 'success' && (
                                        <p className="mt-2 text-sm text-green-300 sm:text-base" role="status">
                                            ✓ Message Sent! We'll get back to you soon.
                                        </p>
                                    )}
                                    {submitStatus === 'error' && (
                                        <p className="mt-2 text-sm text-red-200 sm:text-base" role="alert">
                                            ⚠ Failed to send message. Please try again.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}
