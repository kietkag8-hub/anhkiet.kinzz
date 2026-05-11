import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    // Custom cursor effect
    useEffect(() => {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-dot-outline');

        // Show cursor on desktop
        if (window.innerWidth > 768) {
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                if (cursorDot) {
                    cursorDot.style.left = posX + 'px';
                    cursorDot.style.top = posY + 'px';
                    cursorDot.style.display = 'block';
                }

                if (cursorOutline) {
                    cursorOutline.style.left = posX - 17.5 + 'px';
                    cursorOutline.style.top = posY - 17.5 + 'px';
                    cursorOutline.style.display = 'block';
                }
            });

            window.addEventListener('mouseout', () => {
                if (cursorDot) cursorDot.style.display = 'none';
                if (cursorOutline) cursorOutline.style.display = 'none';
            });
        }

        return () => {
            // Cleanup event listeners
        };
    }, []);

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
