import { SecretApiPage } from './app.po';

describe('secret-api App', () => {
  let page: SecretApiPage;

  beforeEach(() => {
    page = new SecretApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
