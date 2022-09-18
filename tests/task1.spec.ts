import { test, expect } from '@playwright/test';
import { MainPage } from '..//pages/main-page';
import { RegistryPage } from '../pages/registry-page';

test('Open Redmine main page, homepage has Redmine in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://www.redmine.org/');
 
  await expect(page).toHaveTitle(/Overview - Redmine/);
 
  const getStarted = page.locator('//*[@id="header"]/h1 ');

  await expect(getStarted).not.toHaveAttribute('href', '//www.redmine.org');
  
});

test('Should check "Download" function', async ({ page }) => {
  await page.goto('https://www.redmine.org/');

  const getDownload = page.locator('text=Download');
 
  await getDownload.click();

  await expect(page).toHaveURL(/Download/);  
  
});

test('Should check "Search" function', async ({ page }) => {

  await page.goto('https://www.redmine.org/');

  const getSearch = page.locator('//*[@id="q"]');
 
  await getSearch.click();

  await getSearch.fill('Browser');

  await getSearch.press('Enter');

  await expect(page).toHaveURL(/Browser/);
  
});

test('Should Registry in to Redmine with not valid credentials', async ({ page }) => {

  const mainPage = new MainPage(page);
    
  await page.goto('https://www.redmine.org/');
  
  await mainPage.getRegistrationForm();

  await mainPage.submitClick();

  const locator = page.locator('#errorExplanation');

  await expect(locator).toBeVisible();  
  
});

test('Should Registry in to Redmine', async ({ page }) => {

  const mainPage = new MainPage(page);
  const registryPage = new RegistryPage(page);
  
  await page.goto('https://www.redmine.org/');

  await mainPage.getRegistrationForm();

  await registryPage.fillUserLogin();
  await registryPage.fillUserPassword();
  await registryPage.fillUserName();
  await registryPage.fillUserLastname();
  await registryPage.fillUserEmail();

  await mainPage.submitClick();

  await expect(page).toHaveURL(/login/);  
  
});