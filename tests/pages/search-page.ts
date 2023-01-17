import { expect, Locator, Page } from '@playwright/test';

export class SearchPage {
  readonly page: Page;  
  readonly searchResult: Locator;
  

  constructor(page: Page) {
    this.page = page;    
    this.searchResult = page.locator('[id="search-results"]');    
  }
  
}