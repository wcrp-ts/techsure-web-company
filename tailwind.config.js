/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { 
      colors: {
        text: {
          title: '#292c30',
          subtitle: '#A2ABB5',
          body: '#292c30',
          caption: '#8b96a2',
          brand: '#1C80EA',
          'brand-light':'#D2E6FB',
        },
        background: {
          default: '#00001A',
          brand: '#1C80EA',
          disable: '#B1CDFB',
          'brand-light':'#E8F2FD',
          gradient: "var(--Techsure-Gradient, linear-gradient(90deg, #8F1BE8 0%, #72F5FD 100%))",
        },
        border: {
          default: '#d1d5da',
          brand: '#1C80EA',
          'brand-light':'#D2E6FB',
        },
        icon: {
          brand: '#1C80EA',
          'brand-light':'#D2E6FB',
        },
        disable: {
          text: '#727c86',
          'bg-light': '#e8eaec',
          'bg-dark': '#e8eaec',
          border: '#d1d5da',
          icon: '#a2abb5',
        },
        success: {
          text: '#22a119',
          'bg-light': '#e9f6e8',
          'bg-dark': '#146110',
          border: '#22a119',
          icon: '#22a119',
        },
        info: {
          text: '#22a119',
          'bg-light': '#e9f6e8',
          'bg-dark': '#06B6D4',
          border: '#22a119',
          icon: '#22a119',
        },
        error: {
          text: '#e32526',
          'bg-light': '#fce9e9',
          'bg-dark': '#881617',
          border: '#e32526',
          icon: '#e32526',
        },
        warning: {
          text: '#f5be0c',
          'bg-light': '#fef8e7',
          'bg-dark': '#937207',
          border: '#f5be0c',
          icon: '#f5be0c',
        },
      },
      borderRadius: {
        none: '0px',
        s: '4px',
        m: '8px',
        l: '16px',
        round: '999px',
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['72px', { lineHeight: '80px' }],
        'hero-l': ['52px', { lineHeight: '60px' }],
        'hero-m': ['40px', { lineHeight: '48px' }],
        'hero-s': ['38px', { lineHeight: '46px' }],
        'hero-xs': ['36px', { lineHeight: '44px' }],

        'heading-xl': ['32px', { lineHeight: '40px' }],
        'heading-l': ['28px', { lineHeight: '36px' }],
        'heading-m': ['24px', { lineHeight: '32px' }],
        'heading-s': ['20px', { lineHeight: '28px' }],
        'heading-xs': ['16px', { lineHeight: '24px' }],

        'subheading-l': ['18px', { lineHeight: '28px' }],
        'subheading-m': ['16px', { lineHeight: '24px' }],
        'subheading-s': ['14px', { lineHeight: '20px' }],

        'label-l': ['20px', { lineHeight: '28px' }],
        'label-m': ['16px', { lineHeight: '24px' }],
        'label-s': ['14px', { lineHeight: '20px' }],
        'label-xs': ['12px', { lineHeight: '16px' }],

        'body-l': ['18px', { lineHeight: '28px' }],
        'body-m': ['16px', { lineHeight: '24px' }],
        'body-s': ['14px', { lineHeight: '20px' }],

        'table-m': ['13px', { lineHeight: '20px' }],
        'table-s': ['12px', { lineHeight: '20px' }],
        
        'caption-l': ['14px', { lineHeight: '20px' }],
        'caption-m': ['12px', { lineHeight: '16px' }],
        'caption-s': ['10px', { lineHeight: '14px' }],
      },
       fontWeight: {
        regular: '400',
        semibold: '550',
        bold: '700',
      },
      boxShadow : {
        s: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        m: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        l: '0px 4px 8px rgba(0, 0, 0, 0.15)',
        xl: '0px 8px 16px rgba(0, 0, 0, 0.2)',
      },
    },
  },
}
