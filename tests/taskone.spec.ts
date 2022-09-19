import { test, expect } from '@playwright/test';
import { MainPage } from './pages/main-page';
import { RegistryPage } from './pages/registry-page';


test('Open Redmine main page, homepage has Redmine in title and get started link linking to the intro page', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();
 
  await expect(page).toHaveTitle(/Overview - Redmine/);
 
  await expect(mainPage.getStarted).not.toHaveAttribute('href', '//www.redmine.org');
  
});

test('Should check "Download" function', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await mainPage.goto();

  await mainPage.getDownload.click();

  await expect(page).toHaveURL(/Download/);  
  
});

test('Should check "Search" function', async ({ page }) => {

  const mainPage = new MainPage(page);

  await mainPage.goto();
  
  await mainPage.getSearch.click();

  await mainPage.getSearch.fill('Browser');

  await mainPage.getSearch.press('Enter');

  await expect(page).toHaveURL(/Browser/);
  
});

test('Should Registry in to Redmine with not valid credentials', async ({ page }) => {

  const mainPage = new MainPage(page);
    
  await mainPage.goto();
  
  await mainPage.getRegistrationForm();

  await mainPage.submitClick();

  await expect(mainPage.getErrorMessage).toBeVisible();  
  
});

test('Should Registry in to Redmine', async ({ page }) => {

  const mainPage = new MainPage(page);
  const registryPage = new RegistryPage(page);
  
  await mainPage.goto();

  await mainPage.getRegistrationForm();

  await registryPage.fillUserLogin();
  await registryPage.fillUserPassword();
  await registryPage.fillUserName();
  await registryPage.fillUserLastname();
  await registryPage.fillUserEmail();

  await mainPage.submitClick();

  await expect(page).toHaveURL(/login/);  
  
});