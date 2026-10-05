import { test, expect } from '@playwright/test';

interface GlobalWithImages {
  imageUrls: Set<string>;
}

const SERVICE_PAGES = [
  { path: '/services', name: 'Services Overview' },
  { path: '/services/hvac/heating', name: 'Heating' },
  { path: '/services/hvac/cooling', name: 'Cooling' },
  { path: '/services/hvac/air-quality', name: 'Air Quality' },
  { path: '/services/plumbing', name: 'Plumbing' },
  { path: '/services/plumbing/emergency', name: 'Emergency Plumbing' },
  { path: '/services/plumbing/kitchen', name: 'Kitchen Plumbing' },
  { path: '/services/plumbing/backflow', name: 'Backflow Testing' },
  { path: '/services/plumbing/water-line', name: 'Water Line' },
  { path: '/services/plumbing/gas-line', name: 'Gas Line' },
  { path: '/services/plumbing/sump-pumps', name: 'Sump Pumps' },
  { path: '/services/plumbing/slab-leaks', name: 'Slab Leaks' },
  { path: '/services/plumbing/water-heaters', name: 'Water Heaters' },
  { path: '/services/plumbing/water-treatment', name: 'Water Treatment' },
  { path: '/services/sewer-drains', name: 'Sewer & Drains' },
  { path: '/services/sewer-drains/camera-inspection', name: 'Camera Inspection' },
  { path: '/services/sewer-drains/catch-basins', name: 'Catch Basins' },
  { path: '/services/sewer-drains/drain-cleaning', name: 'Drain Cleaning' },
  { path: '/services/sewer-drains/hydrojetting', name: 'Hydrojetting' },
  { path: '/services/sewer-drains/pipe-lining', name: 'Pipe Lining' },
  { path: '/services/sewer-drains/sewer-line', name: 'Sewer Line' },
  { path: '/services/sewer-drains/toilet-repair', name: 'Toilet Repair' },
  { path: '/services/commercial', name: 'Commercial' },
  { path: '/services/commercial-hvac', name: 'Commercial HVAC' },
  { path: '/services/commercial-plumbing', name: 'Commercial Plumbing' },
];

test.describe('Service Page Background Images', () => {
  test.beforeAll(() => {
    (globalThis as unknown as GlobalWithImages).imageUrls = new Set<string>();
  });

  for (const pageInfo of [
    { path: '/services', name: 'Services Overview', titleSelector: '#hero-heading' },
    { path: '/services/hvac/heating', name: 'Heating', titleSelector: '#service-title' },
    { path: '/services/hvac/cooling', name: 'Cooling', titleSelector: '#service-title' },
    { path: '/services/hvac/air-quality', name: 'Air Quality', titleSelector: '#service-title' },
    { path: '/services/plumbing', name: 'Plumbing', titleSelector: '#service-title' },
    { path: '/services/plumbing/emergency', name: 'Emergency Plumbing', titleSelector: '#service-title' },
    { path: '/services/plumbing/kitchen', name: 'Kitchen Plumbing', titleSelector: '#service-title' },
    { path: '/services/plumbing/backflow', name: 'Backflow Testing', titleSelector: '#service-title' },
    { path: '/services/plumbing/water-line', name: 'Water Line', titleSelector: '#service-title' },
    { path: '/services/plumbing/gas-line', name: 'Gas Line', titleSelector: '#service-title' },
    { path: '/services/plumbing/sump-pumps', name: 'Sump Pumps', titleSelector: '#service-title' },
    { path: '/services/plumbing/slab-leaks', name: 'Slab Leaks', titleSelector: '#service-title' },
    { path: '/services/plumbing/water-heaters', name: 'Water Heaters', titleSelector: '#service-title' },
    { path: '/services/plumbing/water-treatment', name: 'Water Treatment', titleSelector: '#service-title' },
    { path: '/services/sewer-drains', name: 'Sewer & Drains', titleSelector: '#service-title' },
    { path: '/services/sewer-drains/camera-inspection', name: 'Camera Inspection', titleSelector: '#service-title' },
    { path: '/services/sewer-drains/catch-basins', name: 'Catch Basins', titleSelector: '#service-title' },
    { path: '/services/sewer-drains/drain-cleaning', name: 'Drain Cleaning', titleSelector: '#service-title' },
    { path: '/services/sewer-drains/hydrojetting', name: 'Hydrojetting', titleSelector: '#service-title' },
    { path: '/services/sewer-drains/pipe-lining', name: 'Pipe Lining', titleSelector: '#service-title' },
    { path: '/services/sewer-drains/sewer-line', name: 'Sewer Line', titleSelector: '#service-title' },
    { path: '/services/sewer-drains/toilet-repair', name: 'Toilet Repair', titleSelector: '#service-title' },
    { path: '/services/commercial', name: 'Commercial', titleSelector: '#service-title' },
    { path: '/services/commercial-hvac', name: 'Commercial HVAC', titleSelector: '#service-title' },
    { path: '/services/commercial-plumbing', name: 'Commercial Plumbing', titleSelector: '#service-title' },
  ]) {
    test(`${pageInfo.path} has background image`, async ({ page }) => {
      await page.goto(pageInfo.path);

      // Find the hero section - it could be either ServiceHero (aria-labelledby="service-title") or Hero (aria-labelledby="hero-heading")
      const heroSection = page.locator('section[aria-labelledby="service-title"], section[aria-labelledby="hero-heading"]').first();
      await expect(heroSection).toBeVisible({ timeout: 15000 });

      const bgImage = await heroSection.locator('img').first().getAttribute('src');

      expect(bgImage).toBeTruthy();
      expect(bgImage).toContain('/pics/');
      expect(bgImage).toContain('.jpg');

      const globalWithImages = globalThis as unknown as GlobalWithImages;
      if (bgImage) {
        globalWithImages.imageUrls.add(bgImage);
      }

      // Check title is centered and white
      await expect(page.locator(pageInfo.titleSelector)).toHaveCSS('text-align', 'center');
      await expect(page.locator(pageInfo.titleSelector)).toHaveCSS('color', 'rgb(255, 255, 255)');
    });
  }

  test('At least one background image is tracked', () => {
    const globalWithImages = globalThis as unknown as GlobalWithImages;
    expect(globalWithImages.imageUrls.size).toBeGreaterThan(0);
  });
});