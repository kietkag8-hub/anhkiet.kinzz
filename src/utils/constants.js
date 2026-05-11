/**
 * Constants and Configuration
 */

// Colors
export const COLORS = {
    primary: {
        blue: '#00d4ff',
        purple: '#b537f2',
        pink: '#ff006e',
        cyan: '#00f0ff',
    },
    dark: {
        900: '#0f0f1e',
        800: '#1a1a2e',
        700: '#16213e',
    },
    text: {
        primary: '#ffffff',
        secondary: '#a0a0a0',
        muted: '#6d6d6d',
    },
};

// Breakpoints
export const BREAKPOINTS = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
};

// Animation Durations (in seconds)
export const DURATIONS = {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    slower: 1.2,
};

// Easing Functions
export const EASING = {
    linear: 'linear',
    easeIn: 'easeIn',
    easeOut: 'easeOut',
    easeInOut: 'easeInOut',
    circIn: 'circIn',
    circOut: 'circOut',
    backIn: 'backIn',
    backOut: 'backOut',
    anticipate: 'anticipate',
};

// Navigation Items
export const NAVIGATION_ITEMS = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

// Social Links
export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        url: 'https://github.com',
        icon: 'github',
    },
    {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: 'linkedin',
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com',
        icon: 'twitter',
    },
    {
        name: 'Email',
        url: 'mailto:hello@example.com',
        icon: 'mail',
    },
];

// Contact Information
export const CONTACT_INFO = {
    email: 'hello@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, USA',
    timezone: 'PST (UTC-8)',
};

// Skills Categories
export const SKILLS_CATEGORIES = [
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

// Project Categories
export const PROJECT_CATEGORIES = [
    'All',
    'Full-Stack',
    'Frontend',
    'Design',
    'Mobile',
];

// Animation Variants (for Framer Motion)
export const VARIANTS = {
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    },
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideInLeft: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0 },
    },
    slideUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    },
    scaleUp: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
};

// Error Messages
export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error. Please try again.',
    INVALID_EMAIL: 'Please enter a valid email address.',
    REQUIRED_FIELD: 'This field is required.',
    FILE_TOO_LARGE: 'File size must be less than 5MB.',
    INVALID_FILE_TYPE: 'Invalid file type. Please use JPG, PNG, or PDF.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
    FORM_SUBMITTED: 'Thank you! Your message has been sent successfully.',
    FILE_UPLOADED: 'File uploaded successfully.',
    PROFILE_UPDATED: 'Profile updated successfully.',
};

// API Endpoints (if needed)
export const API_ENDPOINTS = {
    PROJECTS: '/api/projects',
    SKILLS: '/api/skills',
    CONTACT: '/api/contact',
    NEWSLETTER: '/api/newsletter',
};

// Local Storage Keys
export const STORAGE_KEYS = {
    THEME: 'theme',
    USER_PREFERENCES: 'userPreferences',
    RECENT_PROJECTS: 'recentProjects',
};

// Feature Flags
export const FEATURES = {
    DARK_MODE: true,
    ANIMATIONS: true,
    ANALYTICS: true,
    COMMENTS: false,
};

export default {
    COLORS,
    BREAKPOINTS,
    DURATIONS,
    EASING,
    NAVIGATION_ITEMS,
    SOCIAL_LINKS,
    CONTACT_INFO,
    SKILLS_CATEGORIES,
    PROJECT_CATEGORIES,
    VARIANTS,
    ERROR_MESSAGES,
    SUCCESS_MESSAGES,
    API_ENDPOINTS,
    STORAGE_KEYS,
    FEATURES,
};
