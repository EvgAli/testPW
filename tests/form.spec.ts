import { test, expect } from "../fixtures/baseFixture";

test("fill form", async ({ formPage }) => {
  await formPage.fillForm();

  // проверим, что появилось окно подтверждения
  const modal = formPage["page"].locator(".modal-content");
  await expect(modal).toBeVisible();
});
