import { AngularCiPage } from './app.po';

describe('angular-ci App', () => {
  let page: AngularCiPage;

  beforeEach(() => {
    page = new AngularCiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
