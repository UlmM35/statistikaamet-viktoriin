import { test, expect, Page } from "@playwright/test";
import { questions } from "../src/data/questions";

async function giveCorrectAnswer(page: Page) {

  const questionText = await page.locator(".question-text").innerText();
  const q = questions.find((q) => q.question === questionText)!;

  if (q.type === "single") {
    await page.getByRole("button", { name: q.correct }).click();
  } else if (q.type === "multiple") {
    for (const answer of q.correct) {
      await page.getByLabel(answer).check();
    }
    await page.getByRole("button", { name: "Vasta" }).click();
  } else {
    await page.getByRole("button", { name: q.correct ? "Tõene" : "Vale" }).click();
  }

  await page.locator(".feedback").waitFor({ state: "visible" });
  await page.locator(".feedback").waitFor({ state: "hidden" });
}

async function giveWrongAnswer(page: Page) {

  const isMultiple = await page.locator("input[type='checkbox']").first().isVisible();
  if (isMultiple) {
    await page.locator("input[type='checkbox']").first().check();
    await page.getByRole("button", { name: "Vasta" }).click();
  } else {
    await page.locator(".option-btn").last().click();
  }

  await page.locator(".feedback").waitFor({ state: "visible" });
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("opens the app and shows a question", async ({ page }) => {
  await expect(page.locator(".question-card")).toBeVisible();
  await expect(page.locator(".progress")).toContainText("Küsimus 1 / 10");
});

test("can answer a question", async ({ page }) => {
  await giveCorrectAnswer(page);
  await expect(page.locator(".progress")).toContainText("Küsimus 2 / 10");
});

test("score increases after a correct answer", async ({ page }) => {
  await expect(page.locator('[data-testid="score"]')).toContainText("0 / 10");
  await giveCorrectAnswer(page);
  await expect(page.locator('[data-testid="score"]')).toContainText("1 / 10");
});

test("wrong answer shows negative feedback", async ({ page }) => {
  await giveWrongAnswer(page);
  await expect(page.locator(".feedback")).toBeVisible();
  const text = await page.locator(".feedback").innerText();
  expect(["Õige!", "Vale — proovi järgmist"]).toContain(text);
});
 
test("shows final result screen with score, table and personal message", async ({ page }) => {
  for (let i = 0; i < 10; i++) {
    await giveCorrectAnswer(page);
  }
  await expect(page.getByText("Lõpptulemus")).toBeVisible();
  await expect(page.locator(".score")).toContainText("10 / 10");
  await expect(page.locator(".results-table")).toBeVisible();
  await expect(page.locator(".personal-msg")).toContainText("Suurepärane");
});