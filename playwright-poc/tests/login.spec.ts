import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Login page loads and allows login', async ({ page }) => {
  const login = new LoginPage(page);
  await login.navigate();
  await login.login('admin', 'password123');
  await expect(page).toHaveURL(/.*dashboard/);
});
