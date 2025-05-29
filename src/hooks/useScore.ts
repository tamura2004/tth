import { Category, getScoreMultiplier } from "../types/Category.ts";
import { useState } from "react";

type ScoreRecord = Record<Category, number>;

export const useScore = () => {
  const [scoreRecord, setScoreRecord] = useState<ScoreRecord>({
    [Category.TechnologyLevel]: 0,
    [Category.GovernmentLevel]: 0,
    [Category.Science]: 1,
    [Category.SciencePoint]: 0,
    [Category.Military]: 1,
    [Category.Happiness]: 0,
    [Category.FoodProduction]: 2,
    [Category.ResourceProduction]: 2,
    [Category.Colonies]: 0,
    [Category.WonderAge2]: 0,
    [Category.Culture]: 0,
  });

  const getScore = (category: Category): number => {
    return scoreRecord[category] ?? 0;
  }

  const setScore = (category: Category, value: number) => {
    setScoreRecord((prev) => ({
      ...prev,
      [category]: value,
    }));
  }

  const addScore = (category: Category, value: number) => {
    setScoreRecord((prev) => ({
      ...prev,
      [category]: (prev[category] ?? 0) + value,
    }));
  }

  const totalScore = Object.entries(scoreRecord).reduce(
    (acc, [k, v]) => acc + v * getScoreMultiplier(k as Category),
    0,
  );

  return {
    getScore,
    setScore,
    addScore,
    totalScore,
  };
};
