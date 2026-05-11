import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? 'glass-effect py-3 shadow-2xl'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="container-max px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold gradient-text cursor-pointer"
                    >
                        Anh Kiệt.
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-white hover:text-accent-blue transition-colors duration-300 font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector(item.href);
                                    target?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block btn-primary text-sm"
                    >
                        Get In Touch
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="flex flex-col gap-4 pt-4 border-t border-accent-blue/20">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-white hover:text-accent-blue transition-colors py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector(item.href);
                                    target?.scrollIntoView({ behavior: 'smooth' });
                                    setIsOpen(false);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary w-full"
                        >
                            Get In Touch
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
