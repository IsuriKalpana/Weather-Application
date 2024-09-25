module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      }, 
    },
    FontFamily:{
      Roboto : ["Roboto, sans-serif"],
    },
    container:{
      padding : "640px",
      center : "768px",
    },
    screens:{
      sm : "2rem",
      md : true,
    },
  },
  plugins: [],
}

