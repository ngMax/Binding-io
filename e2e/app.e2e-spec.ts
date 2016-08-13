import { MaxAppFinalPage } from './app.po';

describe('max-app-final App', function() {
  let page: MaxAppFinalPage;

  beforeEach(() => {
    page = new MaxAppFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
