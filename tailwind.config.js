/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "my-background-image": "url('/path/to/your/background-image.jpg')",
      },
    },
    screens: {
      xs: "325px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      black: {
        main: "#000000",
        off: " #434343",
        cool: "#1f1f1f",
      },
      white: {
        main: "#FFFFFF",
        off: "#dbdbdb",
      },
      blue: {
        main: "#007de3",
      },
    },
  },
  plugins: [],
};

// #434343
