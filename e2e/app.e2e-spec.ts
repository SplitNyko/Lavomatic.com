import { Lavomatic.ComPage } from './app.po';

describe('lavomatic.com App', () => {
  let page: Lavomatic.ComPage;

  beforeEach(() => {
    page = new Lavomatic.ComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
