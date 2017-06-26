import { DojoappPage } from './app.po';

describe('dojoapp App', () => {
  let page: DojoappPage;

  beforeEach(() => {
    page = new DojoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
