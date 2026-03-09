import { test, expect, Page } from "@playwright/test";
import { questions } from "../src/data/questions";

// Gives correct answer, but stops before feedback disappears. Used for testing feedback for correct answer.
async function answerCorrectly(page: Page) {

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
}

// Used when simply checking for the correct answer.
async function giveCorrectAnswer(page: Page) {
  await answerCorrectly(page);
  await page.locator(".feedback").waitFor({ state: "hidden" });
}

// Picks wrong answer for test purposes.
async function giveWrongAnswer(page: Page) {
   const questionText = await page.locator(".question-text").innerText();
   const q = questions.find((q) => q.question === questionText)!;

  if (q.type === "single") {
    const wrongOption = q.options.find((o) => o !== q.correct)!;
    await page.getByRole("button", { name: wrongOption }).click();
  } else if (q.type === "multiple") {
    await page.getByLabel(q.correct[0]).check();
    await page.getByRole("button", { name: "Vasta" }).click();
  } else {
    await page.getByRole("button", { name: q.correct ? "Vale" : "Tõene" }).click();
  }

  await page.locator(".feedback").waitFor({ state: "visible" });
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
}); 

test.describe("App startup", () => {
  test("opens the app and shows a question", async ({ page }) => {
    await expect(page.locator(".question-card")).toBeVisible();
    await expect(page.locator(".progress")).toContainText("Küsimus 1 / 10");
  });
});

test.describe("Answering questions", () => {
  test("can answer a question and progress to the next", async ({ page }) => {
    await giveCorrectAnswer(page);
    await expect(page.locator(".progress")).toContainText("Küsimus 2 / 10");
  });
});

test.describe("Score behaviour", () => {
  test("score increases after a correct answer", async ({ page }) => {
    await expect(page.locator('[data-testid="score"]')).toContainText("0 / 10");
    await giveCorrectAnswer(page);
    await expect(page.locator('[data-testid="score"]')).toContainText("1 / 10");
  });

  test("score does not increase after a wrong answer", async ({ page }) => {
    await expect(page.locator('[data-testid="score"]')).toContainText("0 / 10");
    await giveWrongAnswer(page);
    await page.locator(".feedback").waitFor({ state: "hidden" });
    await expect(page.locator('[data-testid="score"]')).toContainText("0 / 10");
  });
});

test.describe("Answer feedback", () => {
  test("wrong answer shows negative feedback", async ({ page }) => {
    await giveWrongAnswer(page);
    await expect(page.locator(".feedback")).toBeVisible();
    await expect(page.locator(".feedback")).toHaveClass(/wrong/);
  });

  test("right answer shows positive feedback", async ({ page }) => {
    await answerCorrectly(page);
    await expect(page.locator(".feedback")).toBeVisible();
    await expect(page.locator(".feedback")).toHaveClass(/correct/);
  });
});
 
test.describe("Result screen", () => {
  test("shows final result screen with score, table and personal message", async ({ page }) => {
    for (let i = 0; i < 10; i++) {
      await giveCorrectAnswer(page);
    }
    await expect(page.getByText("Lõpptulemus")).toBeVisible();
    await expect(page.locator(".score")).toContainText("10 / 10");
    await expect(page.locator(".results-table")).toBeVisible();
    await expect(page.locator(".personal-msg")).toContainText("Suurepärane");
  });

  test("restart button resets quiz to beginning", async ({ page }) => {
    for (let i = 0; i < 10; i++) {
      await giveCorrectAnswer(page);
    }
    await page.getByRole("button", { name: "Proovi uuesti" }).click();
    await expect(page.locator(".progress")).toContainText("Küsimus 1 / 10");
    await expect(page.locator('[data-testid="score"]')).toContainText("0 / 10");
  });
});