import { test, expect } from "@playwright/test";

test("Lms", async ({ page }) => {
  await page.goto("https://auragxp-dev.eastus.cloudapp.azure.com/login");

  const btn = page.getByRole("button", { name: "Continue with Credentials" });

  await btn.click();

  await page.fill("#username", "auragxp_admin@auragxp.com");
  await page.fill("#password", "admin");
  await page.getByRole("button", { name: "Sign In" }).click();

  await page.waitForLoadState("networkidle");
  //Learning Tab
  const btn1 = page.getByRole("button", { name: "Learning" });
  await expect(btn1).toBeVisible();
  await btn1.click();

  await page.waitForLoadState("networkidle");

  await expect(
    page.locator(
      "//div[@class='divide-border flex flex-col divide-y']//a[normalize-space()='My Learning Dashboard']"
    )
  ).toBeVisible();
  await expect(
    page.locator(
      "//div[@class='divide-border flex flex-col divide-y']//a[normalize-space()='Learner Management']"
    )
  ).toBeVisible();
  await expect(
    page.locator(
      "//div[@class='divide-border flex flex-col divide-y']//a[normalize-space()='Certification']"
    )
  ).toBeVisible();

  //locating My Learning DashBoard

  await page
    .locator(
      "//div[@class='divide-border flex flex-col divide-y']//a[normalize-space()='My Learning Dashboard']"
    )
    .click();

  await expect(page).toHaveURL(
    "https://auragxp-dev.eastus.cloudapp.azure.com/lms"
  );
  await page.waitForLoadState('networkidle');
//Dashboard
  await page.locator("//div[@class='flex items-center gap-6']//span[@class='flex items-center']").click()
await expect(page.locator("//div[@class='flex justify-between gap-4 px-6 py-8']")).toBeVisible();

//My Learning Center

});

