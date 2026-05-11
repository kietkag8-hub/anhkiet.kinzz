import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const socialLinks = [
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            url: 'https://linkedin.com',
        },
        {
            icon: <Github size={24} />,
            label: 'GitHub',
            url: 'https://github.com',
        },
        {
            icon: <Twitter size={24} />,
            label: 'Twitter',
            url: 'https://twitter.com',
        },
        {
            icon: <Mail size={24} />,
            label: 'Email',
            url: 'mailto:hello@example.com',
        },
    ];

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: 'Email',
            content: 'hello@example.com',
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone',
            content: '+1 (555) 123-4567',
        },
        {
            icon: <MapPin size={24} />,
            title: 'Location',
            content: 'San Francisco, USA',
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus(null), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="section bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900">
            <div className="container-max">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="gradient-text mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Let's collaborate and create something amazing together
                    </p>
                </motion.div>

                {/* Main Contact Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full glass-effect px-4 py-3 rounded-lg border border-accent-blue/20 focus:border-accent-cyan/50 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="Your name"
                                />
                            </motion.div>

                            {/* Email */}
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full glass-effect px-4 py-3 rounded-lg border border-accent-blue/20 focus:border-accent-cyan/50 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="your.email@example.com"
                                />
                            </motion.div>

                            {/* Subject */}
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full glass-effect px-4 py-3 rounded-lg border border-accent-blue/20 focus:border-accent-cyan/50 focus:outline-none transition-all text-white placeholder-gray-500"
                                    placeholder="What is this about?"
                                />
                            </motion.div>

                            {/* Message */}
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <label className="block text-sm font-medium text-white mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full glass-effect px-4 py-3 rounded-lg border border-accent-blue/20 focus:border-accent-cyan/50 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                                    placeholder="Your message..."
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary py-3 font-semibold"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>

                            {/* Success Message */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={submitStatus === 'success' ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                                className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm"
                            >
                                ✓ Message sent successfully! I'll get back to you soon.
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Contact Details */}
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 glass-effect p-6 rounded-lg border border-accent-blue/20 hover:border-accent-cyan/50 transition-all"
                                >
                                    <div className="text-accent-cyan mt-1">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                                        <p className="text-gray-400">{info.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="glass-effect p-4 rounded-lg border border-accent-blue/20 text-accent-cyan hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all"
                                        title={link.label}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center glass-effect p-8 rounded-2xl border border-accent-blue/20"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to start a project?
                    </h3>
                    <p className="text-gray-400 mb-6">
                        Let me know what you're working on, and I'll get back to you within 24 hours.
                    </p>
                    <motion.a
                        href="mailto:hello@example.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block btn-primary"
                    >
                        Send Me an Email
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
