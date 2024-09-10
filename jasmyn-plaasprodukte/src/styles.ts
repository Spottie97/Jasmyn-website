import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C5E2E', // Dark green color
    },
    secondary: {
      main: '#8B4513', // Saddle brown for accent
    },
    background: {
      default: '#FFFFFF', // White background
      paper: '#F5F5F5', // Light gray for paper elements
    },
    text: {
      primary: '#333333', // Dark gray for text
      secondary: '#666666', // Medium gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontFamily: 'Georgia, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Georgia, serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Georgia, serif',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Square buttons
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#333333',
        },
      },
    },
  },
});

export default theme;
