import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Dribbble', url: '#' },
    ];

    return (
        <footer className="bg-dark-900 border-t border-accent-blue/10 py-16">
            <div className="container-max px-4">
                {/* Footer Content */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold gradient-text mb-4">Anh Kiệt</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Creative developer and designer crafting beautiful digital experiences.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const target = document.querySelector(link.href);
                                            target?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-semibold mb-4">Social</h4>
                        <ul className="space-y-2">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-3">
                            Subscribe for updates about my latest projects
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 glass-effect px-3 py-2 rounded-lg border border-accent-blue/20 focus:border-accent-cyan/50 focus:outline-none text-sm text-white placeholder-gray-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-semibold text-white text-sm"
                            >
                                →
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent mb-8 origin-left"
                />

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    {/* Copyright */}
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        © {currentYear} Anh Kiệt. All rights reserved.
                    </p>

                    {/* Made with Love */}
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart size={16} className="text-accent-pink fill-accent-pink" />
                        </motion.div>
                        <span>from Vietnam</span>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="glass-effect px-4 py-2 rounded-lg border border-accent-blue/20 text-accent-cyan hover:border-accent-cyan/50 transition-all"
                    >
                        Back to top
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
