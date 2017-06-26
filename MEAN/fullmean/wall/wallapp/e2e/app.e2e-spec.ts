import { WallappPage } from './app.po';

describe('wallapp App', () => {
  let page: WallappPage;

  beforeEach(() => {
    page = new WallappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
