import { useScore } from "../hooks/useScore.ts";
import { Box, Grid } from "@mui/material";
import { Category, getScoreMultiplier } from "../types/Category.ts";
import { ScoreCard } from "./ScoreCard.tsx";

export const ScorePage = () => {
  const { getScore, totalScore, addScore } = useScore();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        m: 2,
      }}
    >
      {Object.values(Category).map((category) => (
        <ScoreCard
          label={category}
          chip={`x ${getScoreMultiplier(category)}`}
          size={4}
          key={category}
          addScore={(score: number) => addScore(category, score)}
        >
          <Box sx={{ typography: "h1", fontWeight: "bold" }}>
            {getScore(category)}
          </Box>
        </ScoreCard>
      ))}
      <ScoreCard label="勝利点合計" size={8}>
        <Box sx={{ typography: "h1", fontWeight: "bold" }}>{totalScore}</Box>
      </ScoreCard>
    </Grid>
  );
};
