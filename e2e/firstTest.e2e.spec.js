describe('App screen', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should count to 1 if pressed once startButton', async () => {
    await expect(
      element(by.id('counter').withAncestor(by.id('containerCounter'))),
    ).toHaveLabel('0');
    await element(by.id('startButton')).tap();
    await expect(
      element(by.id('counter').withAncestor(by.id('containerCounter'))),
    ).toHaveLabel('1');
  });

  it('should count to 4 if pressed 4 times startButton', async () => {
    await device.reloadReactNative();
    await expect(
      element(by.id('counter').withAncestor(by.id('containerCounter'))),
    ).toHaveLabel('0');
    await element(by.id('startButton')).multiTap(4);
    await expect(
      element(by.id('counter').withAncestor(by.id('containerCounter'))),
    ).toHaveLabel('4');
  });

  it('should write in text input', async () => {
    await element(by.id('input')).replaceText('Hello world');
    await element(by.id('input')).clearText();
    await element(by.id('input')).typeText('Bye!');
  });

  it('should scroll list', async () => {
    await element(by.id('list')).scroll(100, 'down');
  });

  it('should scroll to list end', async () => {
    await element(by.id('list')).scrollTo('bottom', 'slow');
  });
});
