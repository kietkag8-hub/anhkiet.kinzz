module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0f0f1e",
          800: "#1a1a2e",
          700: "#16213e",
        },
        accent: {
          blue: "#00d4ff",
          purple: "#b537f2",
          pink: "#ff006e",
          cyan: "#00f0ff",
        }
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 212, 255, 0.3)",
        "glow-purple": "0 0 30px rgba(181, 55, 242, 0.3)",
        "glow-pink": "0 0 30px rgba(255, 0, 110, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": "url('/mesh-gradient.svg')",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" },
        }
      }
    },
  },
  plugins: [],
}
