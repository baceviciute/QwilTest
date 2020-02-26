import {device, element, by} from 'detox';
import {errorMessages, logIn} from './reusableActions';
import {testIDs} from './testIDs';

describe('Login', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show error message with wrong username', async () => {
    await logIn('test', 'letmein');
    await expect(element(by.text(errorMessages.wrongCredentials))).toBeVisible();
  });

  it('should show error message with wrong password', async () => {
    await logIn('user1', '123456');
    await expect(element(by.text(errorMessages.wrongCredentials))).toBeVisible();
  });

  it('should show error message with blocked user', async () => {
    await logIn('user2', 'blocked');
    await expect(element(by.text(errorMessages.blockedAccount))).toBeVisible();
  });

  it('should do nothing due to Login button cannot be tapped', async () => {
    await logIn('user2', '');
    await expect(element(by.id(testIDs.VERIFICATION_SCREEN_TITLE))).toBeNotVisible();
  });

  it('should successfully log in and verification screen should be visible', async () => {
    await logIn('user1', 'letmein');
    await expect(element(by.id(testIDs.VERIFICATION_SCREEN_TITLE))).toBeVisible();
    await expect(element(by.id(testIDs.VERIFICATION_SCREEN_DESC))).toBeVisible();
  });
});
