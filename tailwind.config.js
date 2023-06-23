/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      red1: "#E1171E",
      red2: "#B40117",
      green1: "#88A91E",
      blue1: "#26A4FF",
      orange1: "#FF6B00",
      yellow2: "#FBD92B",
      green4: "#6B7A3B",
      green5: "#f3F6E9",
      gray0: "#FCFAF9",
      gray1: "#F8F5F2",
      gray2: "#C9C6C3",
      gray3: "#84817D",
      gray4: "#5B534E",
      gray5: "#333333",
      black: "#000000",
      biege: '#F8F5EF',
      offwhite: '#FAF9F6',
      greenish: '#88A91E',
      graylink: '#5b534e'
    },
    dropShadow: {
      DEFAULT: "0px 2px 8px rgba(0, 0, 0, 0.12)",
      straight: "0px 0px 4px rgba(0, 0, 0, 0.12)",
      none: "0px",
    },
 
    borderRadius: {
      DEFAULT: "8px",
      small: "4px",
      none: "0px",
      full: "9999px",
    },
    borderColor: {
      'gray': '#e2e8f0',
    },

    fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '2rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '3rem' }],
        '4xl': ['2.25rem', {
          letterSpacing: '3em',
          lineHeight: '40px',
        }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }]
      },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function groupPeer({ addVariant }) {
      // Very cool solution for children accessing peers I found at https://github.com/tailwindlabs/tailwindcss/pull/4556
      let pseudoVariants = ["checked"].map((variant) =>
        Array.isArray(variant) ? variant : [variant, `&:${variant}`]
      );
      for (let [variantName, state] of pseudoVariants) {
        addVariant(`group-peer-${variantName}`, (ctx) => {
          let result = typeof state === "function" ? state(ctx) : state;
          return result.replace(/&(\S+)/, ":merge(.peer)$1 ~ .group &");
        });
      }
    }),
  ],
};
