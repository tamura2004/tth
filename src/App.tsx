import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography } from "@mui/material";
import { blue, green, yellow, red } from "@mui/material/colors";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const colors = [blue[600], green[600], yellow[800], red[400]];

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {colors.map((color) => (
        <Box
          key={color}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Counter color={color} label="科学点" />
          <Counter color={color} label="文化点" />
        </Box>
      ))}
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
        m: 2,
        width: "45%",
        height: "22vh",
        bgcolor: color,
        borderRadius: 2,
        touchAction: "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">{label}</Typography>
      <Box
        sx={{
          m: 3,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">ー</Typography>
        <Typography variant="h1">{count}</Typography>
        <Typography variant="h4">＋</Typography>
      </Box>
    </Box>
  );
};
