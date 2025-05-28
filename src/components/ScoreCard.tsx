import { Box, Chip, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label: string;
  chip?: string;
  size: number;
  addScore?: (score: number) => void;
};

export const ScoreCard = ({ children, label, size, addScore, chip }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { top, height } = event.currentTarget.getBoundingClientRect();
    const clickY = event.clientY - top;
    if (clickY < height / 2) {
      addScore?.(1);
    } else {
      addScore?.(-1);
    }
  };
  return (
    <Grid
      size={size}
      sx={{
        bgcolor: blue[500],
        borderRadius: 2,
        touchAction: "none",
        p: 1,
        height: "20vh",
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          typography: "h6",
          position: "absolute",
          top: 8,
          left: 8,
          fontWeight: "bold",
        }}
      >
        {label}
      </Box>
      {chip && (
        <Chip
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
          label={chip}
        />
      )}
      {children}
    </Grid>
  );
};
