const env = "local";
url = "";
if (env === "local") {
  url = "http://localhost:9000/#/";
}
describe("opis zestawu assercji", () => {
  // beforeEach(()=>{});
  // beforeAll(() => {});
  // afterEach(() => {});
  // afterAll(() => {});

  // it("should open website", () => {

  // })

  // it("should open website", () => {

  // })

  // it("should open website", () => {

  // })
  it("should open website", () => {
    browser.get(url);

    const header = browser.element(by.css("h1"));
    expect(header.getText()).toEqual("Todos");
  });
});
