import { expect, Locator, Page } from '@playwright/test';
import { RandomMailPage } from '..//pages/randommail-page';

export class RegistryPage {
  readonly page: Page;
  readonly getRegistration: Locator;
  readonly userLogin: Locator;
  readonly userPassword: Locator;
  readonly userPasswordConfirmation: Locator;
  readonly userName: Locator;
  readonly userLastname: Locator;
  readonly userEmail: Locator;
  readonly submit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getRegistration = page.locator('[href="/account/register"]');
    this.userLogin = page.locator('#user_login');
    this.userPassword = page.locator('#user_password');
    this.userPasswordConfirmation = page.locator('#user_password_confirmation');
    this.userName = page.locator('#user_firstname');
    this.userLastname = page.locator('#user_lastname');
    this.userEmail = page.locator('#user_mail');
    this.submit = page.locator('#new_user > input[type=submit]');
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

  async fillUserLogin() {
    await this.userLogin.click();
    await this.userLogin.fill(RandomMailPage.randomUser());
  }

  async fillUserPassword() {
    const password = RandomMailPage.randomPassword();

    await this.userPassword.click();    
    await this.userPassword.fill(password);

    await this.userPasswordConfirmation.click();
    await this.userPasswordConfirmation.fill(password);
  }

  async fillUserName() {
    await this.userName.click();
    await this.userName.fill(RandomMailPage.randomUser());
  }

  async fillUserLastname() {
    await this.userLastname.click();
    await this.userLastname.fill(RandomMailPage.randomUser());
  }

  async fillUserEmail() {
    await this.userEmail.click();
    await this.userEmail.fill(RandomMailPage.randomEmail());
  }
}