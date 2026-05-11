import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            category: 'Frontend',
            skills: [
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Tailwind CSS', level: 95 },
                { name: 'JavaScript', level: 95 },
                { name: 'Vue.js', level: 80 },
                { name: 'Next.js', level: 85 },
            ],
        },
        {
            category: 'Design',
            skills: [
                { name: 'Figma', level: 92 },
                { name: 'UI/UX Design', level: 90 },
                { name: 'Prototyping', level: 88 },
                { name: 'Design Systems', level: 85 },
                { name: 'Adobe XD', level: 80 },
                { name: 'Animation Design', level: 85 },
            ],
        },
        {
            category: 'Backend & Tools',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'GraphQL', level: 80 },
                { name: 'MongoDB', level: 82 },
                { name: 'Git', level: 95 },
                { name: 'Docker', level: 75 },
                { name: 'AWS', level: 78 },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const SkillBar = ({ name, level }) => (
        <motion.div
            variants={itemVariants}
            className="mb-6"
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{name}</span>
                <span className="text-accent-cyan text-sm font-semibold">{level}%</span>
            </div>
            <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden border border-accent-blue/20">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-full"
                    style={{
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                    }}
                />
            </div>
        </motion.div>
    );

    return (
        <section id="skills" className="section bg-gradient-to-b from-dark-900 via-dark-700 to-dark-800">
            <div className="container-max">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="gradient-text mb-4">My Skills</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive set of technical and design skills to bring your projects to life
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-12"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="glass-effect p-8 rounded-2xl border border-accent-blue/20 hover:border-accent-cyan/50 transition-all duration-300"
                        >
                            <motion.h3
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold gradient-text mb-8"
                            >
                                {category.category}
                            </motion.h3>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill, skillIdx) => (
                                    <SkillBar
                                        key={skillIdx}
                                        name={skill.name}
                                        level={skill.level}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 glass-effect p-8 rounded-2xl border border-accent-blue/20"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Other Expertise</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'SEO Optimization',
                            'Performance Tuning',
                            'Accessibility',
                            'Web Security',
                            'DevOps',
                            'Agile Methodology',
                            'Project Management',
                            'Leadership',
                        ].map((skill) => (
                            <motion.div
                                key={skill}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-effect p-4 rounded-lg border border-accent-blue/10 text-center hover:border-accent-cyan/30 transition-all"
                            >
                                <p className="text-white font-medium">{skill}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
