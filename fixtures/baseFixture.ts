import { test as base, expect } from "@playwright/test";
import { FormPage } from "../pages/FormPage";

// 1. Описываем свои фикстуры
type MyFixtures = {
  formPage: FormPage;
};

// 2. Расширяем base test
export const test = base.extend<MyFixtures>({
  formPage: async ({ page }, use) => {
    const form = new FormPage(page);
    await form.open();

    await use(form);
  },
});

export { expect };
