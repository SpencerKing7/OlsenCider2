// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff", // Customize the primary color
      contrastText: "#ffffff", // Customize the text color for primary buttons
    },
    secondary: {
      main: "#ff4081", // Customize the secondary color
      contrastText: "#ffffff", // Customize the text color for secondary buttons
    },
    background: {
      default: "#f4f4f9", // Customize the default background color
      paper: "#ffffff", // Customize the paper background color
    },
    text: {
      primary: "#333333", // Customize the primary text color
      secondary: "#666666", // Customize the secondary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8, // Customize spacing scale (default is 8)
  shape: {
    borderRadius: 4, // Customize default border radius
  },
});

export default theme;
