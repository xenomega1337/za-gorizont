import { test, expect } from "@playwright/test";
const base = "http://127.0.0.1:5173";
test("все страницы доступны, ссылки работают", async ({ page }) => {
  for (const [path, title] of [
    ["/", "Самое интересное"],
    ["/destinations", "Место найдётся"],
    ["/routes", "Меньше планов"],
    ["/about", "Любопытство"],
    ["/contacts", "Давайте знакомиться"],
  ]) {
    await page.goto(base + path);
    await expect(page.locator("h1")).toContainText(title);
  }
  await page.goto(base);
  await page.getByRole("link", { name: "Начать путешествие" }).click();
  await expect(page).toHaveURL(/destinations/);
});
test("поиск, фильтры и описание направления", async ({ page }) => {
  await page.goto(base + "/destinations");
  await page.getByRole("button", { name: "Горы", exact: true }).click();
  await expect(page.locator(".destination-card")).toHaveCount(2);
  await page.getByLabel("Поиск по названию или региону").fill("Алтай");
  await expect(page.locator(".destination-card")).toHaveCount(1);
  await page.locator(".destination-card").click();
  await expect(page.locator(".destination-detail")).toContainText(
    "Лучший сезон",
  );
  await page.getByLabel("Поиск по названию или региону").fill("Неизвестно");
  await expect(page.getByText("Пока ничего не нашлось")).toBeVisible();
  await page.getByRole("button", { name: "Сбросить фильтры" }).click();
  await expect(page.locator(".destination-card")).toHaveCount(6);
});
test("программа маршрута раскрывается", async ({ page }) => {
  await page.goto(base + "/routes");
  await page.locator("summary").first().click();
  await expect(page.locator(".itinerary").first()).toBeVisible();
  await expect(page.locator(".itinerary").first().locator("li")).toHaveCount(7);
});
test("форма проверяет обязательные поля и показывает честный результат", async ({
  page,
}) => {
  await page.goto(base + "/contacts");
  await page.getByRole("button", { name: "Проверить сообщение" }).click();
  await expect(page.locator(".success-state")).toHaveCount(0);
  await page.getByLabel("Ваше имя").fill("Анна");
  await page.getByLabel("Электронная почта").fill("anna@example.com");
  await page
    .getByLabel("Сообщение", { exact: true })
    .fill("Хочу предложить новое направление.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Проверить сообщение" }).click();
  await expect(page.getByRole("status")).toContainText("не сохранено");
});
test("мобильная навигация и отсутствие горизонтального скролла", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.getByRole("button", { name: "Открыть меню" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "О нас", exact: true })
    .click();
  await expect(page.locator("h1")).toContainText("Любопытство");
  for (const path of ["/", "/destinations", "/routes", "/about", "/contacts"]) {
    await page.goto(base + path);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
  }
});
test("локальные изображения загружаются и ошибок JavaScript нет", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const path of ["/", "/destinations", "/routes", "/about", "/contacts"]) {
    await page.goto(base + path);
    await page.locator("img").evaluateAll((images) =>
      Promise.all(
        images.map((img) => {
          img.loading = "eager";
          return img.decode();
        }),
      ),
    );
    expect(
      await page
        .locator("img")
        .evaluateAll((images) => images.every((img) => img.naturalWidth > 0)),
    ).toBeTruthy();
  }
  expect(errors).toEqual([]);
});
