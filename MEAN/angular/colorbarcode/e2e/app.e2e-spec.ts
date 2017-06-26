import { ColorbarcodePage } from './app.po';

describe('colorbarcode App', () => {
  let page: ColorbarcodePage;

  beforeEach(() => {
    page = new ColorbarcodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
