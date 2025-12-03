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
  await page.waitForLoadState("networkidle");

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
  await page.waitForLoadState("networkidle");

  //Path
  await expect(
    page.locator(
      "//div[@class='mb-2 mt-4 flex items-center justify-between border border-gray-300 p-4 text-base font-medium text-slate-500 shadow-md']"
    )
  ).toBeVisible();
  //Dashboard
  await page
    .locator(
      "//div[@class='flex items-center gap-6']//span[@class='flex items-center']"
    )
    .click();
  await expect(
    page.locator("//div[@class='flex justify-between gap-4 px-6 py-8']")
  ).toBeVisible();

  // locating My Learning Center nav abr
  await expect(
    page.locator(
      "//nav[@aria-label='Tabs']//button[normalize-space()='Courses']"
    )
  ).toBeVisible();
  await expect(
    page.locator(
      "//nav[@aria-label='Tabs']//button[normalize-space()='My Learning Center']"
    )
  ).toBeVisible();
  await expect(
    page.locator(
      "//nav[@aria-label='Tabs']//button[normalize-space()='Curriculum']"
    )
  ).toBeVisible();

  //verify URL
  await page
    .locator("//nav[@aria-label='Tabs']//button[normalize-space()='Courses']")
    .click();
  await expect(page).toHaveURL(
    "https://auragxp-dev.eastus.cloudapp.azure.com/lms?tab=Courses"
  );

  await page
    .locator(
      "//nav[@aria-label='Tabs']//button[normalize-space()='My Learning Center']"
    )
    .click();
  await expect(page).toHaveURL(
    "https://auragxp-dev.eastus.cloudapp.azure.com/lms?tab=My+Learning+Center"
  );

  await page
    .locator(
      "//nav[@aria-label='Tabs']//button[normalize-space()='Curriculum']"
    )
    .click();
  await expect(page).toHaveURL(
    "https://auragxp-dev.eastus.cloudapp.azure.com/lms?tab=Curriculum"
  );
  
// await expect(
//   page.locator("//a[@href='/lms/courses/new-course']//button[normalize-space()='+ New Course']")
// ).toBeVisible();
// await expect(
//   page.getByRole("link", { name: /New Course/i })
// ).toBeVisible();
await expect(
  page.getByRole("button", { name: /\+?\s*New Course/i })
).toBeVisible();




});
//<div class="ml-auto flex flex-wrap items-center gap-2"><a href="/lms/courses/new-course"><button data-slot="button" class="inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-button-color text-button-content shadow-xs hover:bg-button-color/90 h-7 px-3 has-[&gt;svg]:px-3">+ New Course</button></a></div>Z
