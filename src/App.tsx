import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { blue, green, yellow, red } from "@mui/material/colors";
import React from "react";
import ScienceIcon from "@mui/icons-material/Science";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const colors = [blue[600], green[600], yellow[800], red[600]];
const labels = ["科学", "文化"];

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        {colors.map((color) => (
          <Box
            key={color}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {labels.map((label) => (
              <Counter key={label} color={color} label={label} />
            ))}
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  );
}

const Counter = ({ color, label }: { color: string; label: string }) => {
  const [count, setCount] = React.useState(0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - left;
    console.log(clickX, width);
    if (clickX < width / 2) {
      setCount(Math.max(0, count - 1));
    } else {
      setCount(count + 1);
    }
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        p: 2,
        m: 1,
        width: "45%",
        height: "22vh",
        bgcolor: color,
        borderRadius: 2,
        touchAction: "none",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/*<Box sx={{ fontsize: 16, display: "fix" }}>{label}</Box>*/}
      <Typography
        variant="h5"
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          verticalAlign: "bottom",
          fontWeight: "bold",
        }}
      >
        {label === "科学" ? (
          <ScienceIcon sx={{ transform: "scale(1.5)", mr: 1 }} />
        ) : (
          <LocalFloristIcon sx={{ transform: "scale(1.5)", mr: 1 }} />
        )}
        {label}
      </Typography>
      <Typography variant="h6">ー</Typography>
      <Box sx={{ typography: "h1", fontWeight: "bold", fontSize: "16vh" }}>
        {count}
      </Box>
      <Typography variant="h6">＋</Typography>
    </Box>
  );
};
