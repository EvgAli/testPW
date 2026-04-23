import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    headless: true,
    // Добавляем для Allure полезные вложения при падении
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "retain-on-failure",
  },
  // 👇 Добавляем Allure репортер
  reporter: [
    ["html"], // стандартный отчёт Playwright (опционально)
    ["allure-playwright"], // Allure отчёт
  ],
});
