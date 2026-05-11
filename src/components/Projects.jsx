import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A modern, fully-featured e-commerce platform with real-time inventory management and payment processing',
            image: '🛒',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Full-Stack',
            link: '#',
            github: '#',
        },
        {
            id: 2,
            title: 'Social Media App',
            description: 'Interactive social platform with real-time notifications, messaging, and content sharing capabilities',
            image: '👥',
            tags: ['React', 'Firebase', 'WebSocket', 'Tailwind'],
            category: 'Frontend',
            link: '#',
            github: '#',
        },
        {
            id: 3,
            title: 'Design System UI Kit',
            description: 'Comprehensive design system and component library with documentation and Storybook integration',
            image: '🎨',
            tags: ['React', 'Storybook', 'TypeScript', 'Figma'],
            category: 'Design',
            link: '#',
            github: '#',
        },
        {
            id: 4,
            title: 'Analytics Dashboard',
            description: 'Real-time analytics dashboard with data visualization, filtering, and export capabilities',
            image: '📊',
            tags: ['React', 'D3.js', 'GraphQL', 'PostgreSQL'],
            category: 'Full-Stack',
            link: '#',
            github: '#',
        },
        {
            id: 5,
            title: 'AI Chat Application',
            description: 'Smart chatbot application with AI-powered responses and conversation history management',
            image: '🤖',
            tags: ['React', 'OpenAI API', 'Node.js', 'Express'],
            category: 'Full-Stack',
            link: '#',
            github: '#',
        },
        {
            id: 6,
            title: 'Web Performance Tool',
            description: 'Performance analysis and optimization tool for websites with detailed metrics and recommendations',
            image: '⚡',
            tags: ['React', 'Web APIs', 'Chart.js', 'Python'],
            category: 'Frontend',
            link: '#',
            github: '#',
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

    return (
        <section id="projects" className="section bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800">
            <div className="container-max">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="gradient-text mb-4">My Projects</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Showcasing some of my latest work and creative projects
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="group h-full"
                        >
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="glass-effect rounded-2xl overflow-hidden border border-accent-blue/20 hover:border-accent-cyan/50 transition-all duration-300 h-full flex flex-col"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 overflow-hidden flex items-center justify-center">
                                    <motion.div
                                        animate={hoveredProject === project.id ? { scale: 1.2, rotate: 10 } : { scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-8xl"
                                    >
                                        {project.image}
                                    </motion.div>

                                    {/* Overlay */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={hoveredProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                                        className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4"
                                    >
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.github}
                                            className="bg-white text-dark-900 p-3 rounded-full hover:bg-accent-cyan"
                                        >
                                            <Github size={24} />
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={project.link}
                                            className="bg-gradient-to-r from-accent-blue to-accent-purple p-3 rounded-full"
                                        >
                                            <ExternalLink size={24} />
                                        </motion.a>
                                    </motion.div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs font-semibold text-accent-cyan px-3 py-1 bg-accent-cyan/10 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-accent-blue/20">
                                        {project.tags.map((tag, i) => (
                                            <motion.span
                                                key={i}
                                                whileHover={{ scale: 1.05 }}
                                                className="text-xs px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary px-12"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
