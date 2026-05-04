/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-container": "#8f6d62",
        "surface-container": "#f1ede8",
        "primary": "#93452b",
        "on-background": "#1c1c19",
        "primary-fixed": "#ffdbd0",
        "on-error": "#ffffff",
        "secondary-container": "#d7e8ca",
        "secondary-fixed": "#d7e8ca",
        "outline-variant": "#dbc1ba",
        "on-primary-fixed": "#3a0b00",
        "on-tertiary-fixed-variant": "#5d4037",
        "background": "#fdf9f4",
        "tertiary": "#74554b",
        "surface-container-highest": "#e6e2dd",
        "inverse-on-surface": "#f4f0eb",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "surface-bright": "#fdf9f4",
        "primary-container": "#b25d41",
        "secondary": "#54634c",
        "on-surface-variant": "#55433d",
        "tertiary-fixed": "#ffdbd0",
        "surface-container-low": "#f7f3ee",
        "secondary-fixed-dim": "#bbccaf",
        "on-surface": "#1c1c19",
        "error": "#ba1a1a",
        "tertiary-fixed-dim": "#e7bdb1",
        "surface-variant": "#e6e2dd",
        "on-tertiary-container": "#fffbff",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#ddd9d5",
        "outline": "#88726c",
        "surface-tint": "#96472d",
        "on-tertiary-fixed": "#2c160e",
        "on-secondary-container": "#5a6951",
        "on-primary-fixed-variant": "#783118",
        "on-error-container": "#93000a",
        "on-secondary": "#ffffff",
        "inverse-surface": "#31302d",
        "on-secondary-fixed": "#121f0d",
        "surface-container-high": "#ebe8e3",
        "surface": "#fdf9f4",
        "primary-fixed-dim": "#ffb59e",
        "inverse-primary": "#ffb59e",
        "on-secondary-fixed-variant": "#3c4b35",
        "on-tertiary": "#ffffff",
        "on-primary-container": "#fffbff"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
        "card": "24px",
        "button": "24px",
        "tactile": "24px",
        "2xl": "1.5rem"
      },
      spacing: {
        "stack-sm": "12px",
        "stack-lg": "48px",
        "gutter": "32px",
        "section-padding": "80px",
        "container-max": "960px",
        "unit": "8px",
        "stack-md": "24px"
      },
      fontFamily: {
        "headline-md": ["Noto Serif", "serif"],
        "caption": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg": ["Noto Serif", "serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Noto Serif", "serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "caption": ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.01em", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "1.2", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }]
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-slower': 'float-slower 8s ease-in-out infinite',
        'pulse-gentle': 'pulse-gentle 5s ease-in-out infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 30s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
