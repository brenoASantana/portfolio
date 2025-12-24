import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import RPGDashboard from "../components/RPGDashboard";
import { getGitHubStats, getRecentActivity } from "../services/github";

jest.mock("../services/github", () => ({
  getGitHubStats: jest.fn(),
  getRecentActivity: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key, opts) => {
      const dictionary = {
        "rpg.daysToLevel": ({ count }) => `Level up in ${count} days`,
        "rpg.title": "DEV STATUS",
        "rpg.characterInfo": "CHARACTER INFO",
        "rpg.class": "Full Stack Developer",
        "rpg.statistics": "STATISTICS",
        "rpg.daysStreak": "Days Streak",
        "rpg.linesOfCode": "Lines of Code",
        "rpg.coffeeCups": "Coffee Cups",
        "rpg.bugsFixed": "Bugs Fixed",
        "rpg.skillTree": "SKILL TREE",
      };

      const value = dictionary[key];
      if (typeof value === "function") {
        return value(opts || {});
      }
      return value || key;
    },
  }),
}));

describe("RPGDashboard", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-04-06T12:00:00Z"));

    getGitHubStats.mockResolvedValue({
      topLanguages: [],
      totalRepos: 10,
      totalStars: 5,
    });

    getRecentActivity.mockResolvedValue({
      activeDays: 10,
      recentCommits: 5,
    });
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("shows days until level up aligned to birthday", async () => {
    await act(async () => {
      render(<RPGDashboard />);
    });

    await act(async () => {
      jest.runAllTimers();
    });

    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), 3, 6);
    if (today > nextBirthday) {
      nextBirthday = new Date(today.getFullYear() + 1, 3, 6);
    }
    const expectedDays = Math.ceil(
      (nextBirthday - today) / (1000 * 60 * 60 * 24)
    );

    expect(
      screen.getByText(`Level up in ${expectedDays} days`)
    ).toBeInTheDocument();
  });
});
