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

  await page.locator(
      "//div[@class='divide-border flex flex-col divide-y']//a[normalize-space()='My Learning Dashboard']"
    ).click();

await expect(page).toHaveURL("https://auragxp-dev.eastus.cloudapp.azure.com/lms")

// await page.locator("//div[@class='flex items-center gap-6']//button[]")
await page.locator("//class[]")
// await expect(
// page.locator('div.flex.justify-between.gap-4.px-6.py-8')
// ).toBeVisible();



});

//page.locator("//a[normalize-space()='My Learning Dashboard']")
//Certification
//flex items-center gap-6
//<div class="flex cursor-pointer select-none items-center justify-between border-b border-gray-300 px-6 py-4" role="button" aria-expanded="false"><div class="text-lg font-semibold text-black">Dashboard</div><div class="flex items-center gap-6"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-button-color text-button-content shadow-xs hover:bg-button-color/90 h-7 px-3 has-[&gt;svg]:px-3 cursor-pointer">Analytics</button><span class="flex items-center" aria-hidden="true"><div style="transform: none;"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></div></span></div></div>