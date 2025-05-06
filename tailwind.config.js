module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],
 // Added on 6th may change look.

  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // tailwind blue
        accent: '#9333EA',  // violet
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  
};
