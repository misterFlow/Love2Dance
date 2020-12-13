import { Love2dancePage } from './app.po';

describe('love2dance App', function() {
  let page: Love2dancePage;

  beforeEach(() => {
    page = new Love2dancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
