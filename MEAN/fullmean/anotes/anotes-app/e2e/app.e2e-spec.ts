import { AnotesAppPage } from './app.po';

describe('anotes-app App', () => {
  let page: AnotesAppPage;

  beforeEach(() => {
    page = new AnotesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
