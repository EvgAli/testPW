# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: form.spec.ts >> fill form
- Location: tests/form.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded while setting up "formPage".
```

```
Error: page.goto: net::ERR_TIMED_OUT at https://demoqa.com/automation-practice-form
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

```

# Test source

```ts
  1  | import { Page } from "@playwright/test";
  2  | 
  3  | export class FormPage {
  4  |   constructor(private page: Page) {}
  5  | 
  6  |   async open() {
> 7  |     await this.page.goto("https://demoqa.com/automation-practice-form");
     |                     ^ Error: page.goto: net::ERR_TIMED_OUT at https://demoqa.com/automation-practice-form
  8  |   }
  9  | 
  10 |   async fillForm() {
  11 |     await this.page.fill("#firstName", "Ivan");
  12 |     await this.page.fill("#lastName", "Petrov");
  13 |     await this.page.fill("#userEmail", "ivan@test.com");
  14 |     await this.page.fill("#userNumber", "1234567890");
  15 |     await this.page.click("#submit");
  16 |   }
  17 | }
  18 | 
```