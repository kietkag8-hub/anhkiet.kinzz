import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                    className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent-cyan rounded-full mix-blend-screen blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-purple rounded-full mix-blend-screen blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: 2,
                    }}
                    className="absolute top-1/2 right-1/4 w-80 h-80 bg-accent-blue rounded-full mix-blend-screen blur-3xl"
                />
            </div>

            {/* Main Content */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="container-max px-4 relative z-10 text-center"
            >
                {/* Badge */}
                <motion.div variants={item}>
                    <div className="inline-flex items-center gap-2 glass-effect px-6 py-3 rounded-full mb-8 border border-accent-blue/30">
                        <Sparkles size={18} className="text-accent-cyan" />
                        <span className="text-sm font-medium text-accent-cyan">
                            Welcome to my digital universe
                        </span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={item}
                    className="mb-6 leading-tight"
                >
                    <span className="block text-white">Hi, I'm</span>
                    <span className="gradient-text block text-5xl sm:text-6xl md:text-7xl font-bold">
                        Anh Kiệt
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl mt-4 text-gray-300">
                        Frontend Developer + UI/UX Designer
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={item}
                    className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting beautiful, interactive digital experiences with modern web technologies.
                    Passionate about turning ideas into stunning reality.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={item}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary group"
                    >
                        <span className="flex items-center justify-center gap-2">
                            View My Work
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight size={20} />
                            </motion.div>
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary"
                    >
                        Download CV
                    </motion.button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                >
                    <div className="w-6 h-10 border-2 border-accent-blue rounded-full flex items-center justify-center">
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-2 bg-accent-blue rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
                className="absolute top-20 right-10 text-4xl opacity-20"
            >
                ✨
            </motion.div>

            <motion.div
                animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: 1,
                }}
                className="absolute bottom-20 left-10 text-4xl opacity-20"
            >
                💫
            </motion.div>
        </section>
    );
};

export default Hero;
