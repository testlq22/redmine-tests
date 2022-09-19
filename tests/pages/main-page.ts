// main-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly getStarted: Locator;
  readonly getDownload: Locator;
  readonly getSearch: Locator;
  readonly getErrorMessage: Locator;
  readonly getRegistration: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStarted = page.locator('//*[@id="header"]/h1 ');
    this.getDownload = page.locator('text=Download');
    this.getSearch = page.locator('//*[@id="q"]');
    this.getErrorMessage = page.locator('#errorExplanation');
    this.getRegistration = page.locator('[href="/account/register"]');
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Getting started' });
    this.pomLink = page.locator('li', { hasText: 'Playwright Test' }).locator('a', { hasText: 'Page Object Model' });
    this.tocList = page.locator('article div.markdown ul > li > a');
    this.submit = page.locator('#new_user > input[type=submit]');
  }

  async goto() {
    await this.page.goto('https://www.redmine.org/');
  }
  
  async getRegistrationForm() {
    await this.getRegistration.click();    
  }

  async pageObjectModel() {
    //await this.getStarted();
    await this.pomLink.click();
  }

  async submitClick() {
    await this.submit.click();
  }
}