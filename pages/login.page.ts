import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  loginLink = '#login2';
  loginModal = '#logInModal';
  usernameInput = '#loginusername';
  passwordInput = '#loginpassword';
  loginButton = '#logInModal button:has-text("Log in")';
  logoutButton = '#logout2';

  async openLogin() {
    await this.page.click(this.loginLink);
    await expect(this.page.locator(this.loginModal)).toBeVisible();
  }

  async login(username: string, password: string) {

    const modal = this.page.locator('#logInModal');

    // Wait modal fully visible AND active
    await expect(modal).toHaveClass(/show/);

    const usernameInput = modal.locator('#loginusername');
    const passwordInput = modal.locator('#loginpassword');

    await usernameInput.fill(username);
    await passwordInput.fill(password);

    const loginBtn = modal.locator('button.btn-primary');

    await expect(loginBtn).toBeVisible();
    await expect(loginBtn).toBeEnabled();

    // Handle possible alert safely
    await Promise.all([
        this.page.waitForEvent('dialog').then(dialog => dialog.accept()).catch(() => {}),
        loginBtn.click()
    ]);
    }

  async verifyLoginSuccess() {
    await expect(this.page.locator(this.logoutButton)).toBeVisible();
  }
}