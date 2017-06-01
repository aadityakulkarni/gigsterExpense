import { GigsterExpensePage } from './app.po';

describe('gigster-expense App', () => {
  let page: GigsterExpensePage;

  beforeEach(() => {
    page = new GigsterExpensePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
