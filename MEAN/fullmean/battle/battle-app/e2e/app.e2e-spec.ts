import { BattleAppPage } from './app.po';

describe('battle-app App', () => {
  let page: BattleAppPage;

  beforeEach(() => {
    page = new BattleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
