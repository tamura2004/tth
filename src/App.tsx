import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ScorePage } from "./components/ScorePage.tsx";
import { Box } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          typography: "h5",
          fontWeight: "bold",
          m: 2,
        }}
      >
        スルー・ジ・エイジズ得点計算
      </Box>
      <ScorePage />
    </ThemeProvider>
  );
}
