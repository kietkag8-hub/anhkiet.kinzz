import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const stats = [
        { number: '5+', label: 'Years Experience' },
        { number: '50+', label: 'Projects Completed' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '15+', label: 'Team Members' },
    ];

    const skills = [
        {
            icon: <Code2 size={32} />,
            title: 'Development',
            description: 'React, TypeScript, Node.js, and modern web technologies',
        },
        {
            icon: <Palette size={32} />,
            title: 'Design',
            description: 'UI/UX Design, Figma, Design Systems, and Brand Identity',
        },
        {
            icon: <Zap size={32} />,
            title: 'Performance',
            description: 'Optimization, SEO, Accessibility, and Best Practices',
        },
    ];

    return (
        <section id="about" className="section bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
            <div className="container-max">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="gradient-text mb-4">About Me</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        I'm a passionate developer and designer dedicated to creating beautiful,
                        functional, and user-centric digital products.
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center mb-16"
                >
                    {/* Left Side - Image/Visual */}
                    <motion.div variants={itemVariants} className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-2xl blur-xl opacity-20"
                        />
                        <div className="relative glass-effect p-8 rounded-2xl border border-accent-blue/20">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-6xl font-bold gradient-text text-center py-12"
                            >
                                👨‍💻
                            </motion.div>
                            <div className="text-center mt-4">
                                <p className="text-accent-cyan font-semibold">Senior Developer</p>
                                <p className="text-gray-400 text-sm">Crafting digital excellence</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Text Content */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With over 5 years of experience in web development and UI/UX design,
                            I've had the privilege to work with startups and established companies
                            to bring their visions to life.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            My approach combines technical expertise with creative problem-solving,
                            ensuring every project not only looks amazing but also performs excellently
                            and provides an exceptional user experience.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-effect p-4 rounded-lg text-center border border-accent-blue/20"
                                >
                                    <p className="text-2xl font-bold gradient-text">{stat.number}</p>
                                    <p className="text-sm text-gray-400">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Skills Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-effect p-8 rounded-2xl border border-accent-blue/20 transform transition-all duration-300 hover:border-accent-cyan/50 group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                className="text-accent-cyan mb-4 group-hover:text-accent-pink transition-colors"
                            >
                                {skill.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                            <p className="text-gray-400">{skill.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
