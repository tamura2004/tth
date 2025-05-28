export const Category = {
  Science: "科学力",
  Military: "軍事力",
  Happiness: "幸福力",
  FoodProduction: "食料算出量",
  ResourceProduction: "資源算出量",
  TechnologyLevel: "技術カードlv",
  GovernmentLevel: "政体カードlv",
  Colonies: "植民地",
  WonderAge2: "時代２の驚異",
  Culture: "文化点",
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const getScoreMultiplier = (category: Category): number => {
  switch (category) {
    case Category.TechnologyLevel:
    case Category.Science:
    case Category.Military:
    case Category.Happiness:
    case Category.FoodProduction:
    case Category.ResourceProduction:
    case Category.Culture:
      return 1;
    case Category.GovernmentLevel:
      return 2;
    case Category.Colonies:
      return 3;
    case Category.WonderAge2:
      return 6;
    default:
      throw new Error(`Unknown category: ${category}`);
  }
}
