import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			bodyColor: '#0c1810',
  			lightSkey: '#00ff99',
  			hoverColor: '#00e187',
  			textColor: '#E0E0E0',
  			darkGray: '#1c1f1f ',
  			softOrange: '#FF5722 ',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		fontFamily: {
  			Garamond: [
  				'EB Garamond',
  				' serif'
  			],
  			Pacifico: [
  				'Pacifico',
  				'serif'
  			],
  			JetBrains: [
  				'JetBrains Mono',
  				'serif'
  			]
  		},
  		animation: {
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			}
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
