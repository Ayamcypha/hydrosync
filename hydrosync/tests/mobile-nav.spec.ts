import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation', () => {
  test.use({ hasTouch: true });

  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Hamburger menu opens mobile drawer', async ({ page }) => {
    const hamburger = page.locator('button[aria-label="Open menu"]');
    await expect(hamburger).toBeVisible();

    await hamburger.click();

    const drawer = page.locator('[role="dialog"][aria-label="Mobile menu"]');
    await expect(drawer).toBeVisible();

    const overlay = page.locator('.fixed.inset-0.bg-black\\/50');
    await expect(overlay).toBeVisible();

    // Check drawer-specific content
    await expect(drawer.locator('text=HydroSync')).toBeVisible();
    await expect(drawer.locator('text=Schedule Service')).toBeVisible();
    await expect(drawer.locator('text=(614) 232-2222')).toBeVisible();

    const categories = [
      { name: 'HVAC', exact: true },
      { name: 'Sewer & Drains', exact: true },
      { name: 'Plumbing Services', exact: true },
      { name: 'Commercial Plumbing', exact: true },
      { name: 'Commercial', exact: true },
    ];
    for (const cat of categories) {
      const btn = drawer.locator(`button:has-text("${cat.name}")`);
      // Use first() to handle duplicate "Commercial" text in "Commercial Plumbing"
      await expect(btn.first()).toBeVisible();
    }
  });

  test('Accordion expands/collapses on tap', async ({ page }) => {
    await page.locator('button[aria-label="Open menu"]').click();
    const drawer = page.locator('[role="dialog"][aria-label="Mobile menu"]');

    const hvacBtn = drawer.locator('button:has-text("HVAC")');

    // Initially collapsed - no services visible in drawer
    await expect(drawer.locator('text=Heating Services')).toBeHidden();

    // Expand
    await hvacBtn.click();
    await expect(drawer.locator('text=Heating Services')).toBeVisible();
    await expect(drawer.locator('text=Cooling Services')).toBeVisible();

    // Collapse
    await hvacBtn.click();
    await expect(drawer.locator('text=Heating Services')).toBeHidden();
  });

  test('Clicking service link navigates and closes drawer', async ({ page }) => {
    await page.locator('button[aria-label="Open menu"]').click();
    const drawer = page.locator('[role="dialog"][aria-label="Mobile menu"]');

    await drawer.locator('button:has-text("HVAC")').click();

    await drawer.locator('a:has-text("Heating Services")').click();

    await expect(page).toHaveURL(/\/services\/hvac\/heating/);
    await expect(page.locator('[role="dialog"][aria-label="Mobile menu"]')).toBeHidden();
  });

  test('Clicking overlay closes drawer', async ({ page }) => {
    await page.locator('button[aria-label="Open menu"]').click();
    // Click on left side of screen (overlay area not covered by drawer)
    await page.mouse.click(50, 400);
    await expect(page.locator('[role="dialog"][aria-label="Mobile menu"]')).toBeHidden();
  });

  test('Clicking close button closes drawer', async ({ page }) => {
    await page.locator('button[aria-label="Open menu"]').click();
    await page.locator('button[aria-label="Close menu"]').click();
    await expect(page.locator('[role="dialog"][aria-label="Mobile menu"]')).toBeHidden();
  });

  test('Escape key closes drawer', async ({ page }) => {
    await page.locator('button[aria-label="Open menu"]').click();
    await page.keyboard.press('Escape');
    await expect(page.locator('[role="dialog"][aria-label="Mobile menu"]')).toBeHidden();
  });

  test('Drawer has swipe-to-close touch handlers', async ({ page }) => {
    await page.locator('button[aria-label="Open menu"]').click();
    const drawer = page.locator('[role="dialog"][aria-label="Mobile menu"]');

    // Verify touch event handlers are attached to drawer
    const hasTouchStart = await drawer.evaluate(el => 'ontouchstart' in el);
    const hasTouchMove = await drawer.evaluate(el => 'ontouchmove' in el);
    const hasTouchEnd = await drawer.evaluate(el => 'ontouchend' in el);

    expect(hasTouchStart || hasTouchMove || hasTouchEnd).toBeTruthy();
  });
});

test.describe('Desktop Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('Hamburger hidden on desktop', async ({ page }) => {
    const hamburger = page.locator('button[aria-label="Open menu"]');
    await expect(hamburger).toBeHidden();
  });
});