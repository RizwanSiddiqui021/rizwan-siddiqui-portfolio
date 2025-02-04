tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "serif"],
        Ovo: ["Ovo", "serif"],
      },
      animation: {
        spin_slow: "spin 6s linear infinite",
      },
      colors: {
        lightHover: "#F0F8FF",
        darkHover: "#2a004a",
        customBg: "#F0F8FF",
        darkTheme: "#11001F",
      },
    },
  },
  darkMode: "selector",
};
