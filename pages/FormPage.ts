import { Page } from "@playwright/test";

export class FormPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto("https://demoqa.com/automation-practice-form");
  }

  async fillForm() {
    await this.page.fill("#firstName", "Ivan");
    await this.page.fill("#lastName", "Petrov");
    await this.page.fill("#userEmail", "ivan@test.com");
    await this.page.fill("#userNumber", "1234567890");
    await this.page.click("#submit");
  }
}
