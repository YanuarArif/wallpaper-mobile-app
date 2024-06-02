// const tintColorLight = '#2f95dc';
// const tintColorDark = '#fff';

// export default {
//   light: {
//     text: '#000',
//     background: '#fff',
//     tint: tintColorLight,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorLight,
//   },
//   dark: {
//     text: '#fff',
//     background: '#000',
//     tint: tintColorDark,
//     tabIconDefault: '#ccc',
//     tabIconSelected: tintColorDark,
//   },
// };

const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    grayBG: "#e5e5e5",
    // neutral
    neutral: (opacity: number) => `rgba(10,10,10, ${opacity})`,
  },
  fontWeight: {
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  radius: {
    xs: 10,
    snm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
};
