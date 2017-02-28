import { RecruitmentApplicationPage } from './app.po';

describe('recruitment-application App', () => {
  let page: RecruitmentApplicationPage;

  beforeEach(() => {
    page = new RecruitmentApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
