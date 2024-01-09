import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        brandon: ['var(--font-brandon)'],
      },
      backgroundImage: {
        'formas_01': "url('/images/bg-site.svg')",
      },
      maxWidth: {
        "8xl": "1408px",
      },
      dropShadow:{
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)',
          ],
          'vts': '6px 8px 6px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        vtsBrand: {
          blue_light: "rgb(var(--blue-light)/ <alpha-value>)",
          blue_medium: "rgb(var(--blue-medium)/ <alpha-value>)",
          blue_heavy: "rgb(var(--blue-heavy)/ <alpha-value>)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secundary: {
          DEFAULT: "hsl(var(--secundary))",
          foreground: "hsl(var(--secundary-foreground))",
        },
        desctructive: {
          DEFAULT: "hsl(var(--desctructive))",
          foreground: "hsl(var(--desctructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) -2px)",
        sm: "calc(var(--radius) -4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
      },
      tilted:{
        hero: 'tiltedHero',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
};
export default config;
