/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSansBold: "work_sans_bold",
        WorkSansSemiBold: "work_sans_semibold",
        WorkSansRegular: "work_sans_regular",
        WorkSansItalic: "work_sans_italic",
        WorkSansVar: "work_sans_var",
      },

      backgroundImage: {
        'backgroundDesktop': "url('./assets/images/background-pattern-desktop.svg')",
        'backgroundMobile': "url('./assets/images/background-pattern-mobile.svg')",
      },

      colors: {
        White: '#ffffff',
        Lightpink: '#f9f0ff',
        Grayishpurple: '#8c6991',
        Darkpurple: '#2f1533',
      },
    },
  },
  plugins: [],
}

