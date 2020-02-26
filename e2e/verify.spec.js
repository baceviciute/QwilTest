import {by, element, device} from 'detox';
import {errorMessages, logIn, verify} from './reusableActions';
import {testIDs} from './testIDs';

describe('Login', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should successfully log in and see error message due to wrong passcode', async () => {
    await logIn('user1', 'letmein');
    await verify('12344');
    await expect(element(by.text(errorMessages.invalidPasscode))).toBeVisible();
  });

  it('should successfully log in and see error message due to wrong passcode', async () => {
    await logIn('user1', 'letmein');
    await verify('123456');
    await expect(element(by.id(testIDs.SUCCESSFUL_LOGIN_SCREEN))).toBeVisible();
  });
});
