import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63", // Pink/reddish main color
      light: "#f8bbd9", // Light pink
      dark: "#c2185b", // Darker pink/red
    },
    secondary: {
      main: "#fce4ec", // Very light pink
    },
    background: {
      default: "#fef9ff", // Very light pink background
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily:
      '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    body1: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    body2: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    button: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    caption: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    overline: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily:
        '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontFamily:
              '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 700,
          },
          "& .MuiInputLabel-root": {
            fontFamily:
              '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 700,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily:
            '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 700,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily:
            '"Providence Sans Regular", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          fontWeight: 700,
        },
      },
    },
  },
});
