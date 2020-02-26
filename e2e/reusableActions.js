import {testIDs} from './testIDs';
import {element, by, device, expect, waitFor} from 'detox';

export const errorMessages = {
  wrongCredentials: 'Invalid credentials. Please check and try again.',
  blockedAccount:
    'Your account has been blocked due to too many failed login attempts.',
  invalidPasscode: 'Invalid passcode. Please try again',
};

export const logIn = async (userName, password) => {
  await expect(element(by.id('username-input'))).toBeVisible();
  await expect(element(by.id('password-input'))).toBeVisible();
  await expect(element(by.id('login-btn'))).toBeVisible();
  await element(by.id(testIDs.USER_NAME)).typeText(userName);
  await element(by.id(testIDs.USER_PASSWORD)).typeText(password);
  await element(by.id(testIDs.LOGIN_BTN)).tap();
};

export const verify = async passCode => {
  await expect(element(by.id(testIDs.VERIFICATION_CODE))).toBeVisible();
  await expect(element(by.id(testIDs.VERIFICATION_BTN))).toBeVisible();
  await element(by.id(testIDs.VERIFICATION_CODE)).typeText(passCode);
  await element(by.id(testIDs.VERIFICATION_BTN)).tap();
};
