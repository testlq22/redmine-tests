// main-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly getStarted: Locator;
  readonly getDownload: Locator;
  readonly getSearch: Locator;
  readonly searchResult: Locator;
  readonly getErrorMessage: Locator;
  readonly getRegistration: Locator;
  readonly gettingStartedHeader: Locator;
  readonly submit: Locator;
  readonly getHelp: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStarted = page.locator('//*[@id="header"]/h1 ');
    this.getDownload = page.locator('text=Download');
    this.getSearch = page.locator('//*[@id="q"]');
    this.searchResult = page.locator('[id="search-results"]');
    this.getErrorMessage = page.locator('#errorExplanation');
    this.getRegistration = page.locator('[href="/account/register"]');
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Getting started' });
    this.submit = page.locator('#new_user > input[type=submit]');
    this.getHelp = page.locator('[href="http://www.redmine.org/guide"]');
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }
  
  async getRegistrationForm() {
    await this.getRegistration.click();    
  }

  async submitClick() {
    await this.submit.click();
  }
}