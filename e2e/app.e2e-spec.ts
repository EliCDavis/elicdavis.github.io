import { CliExamplePage } from './app.po';

describe('cli-example App', () => {
  let page: CliExamplePage;

  beforeEach(() => {
    page = new CliExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
