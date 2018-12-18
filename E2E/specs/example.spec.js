const env = "local";
let url = "";
if (env === "local") {
  url = "http://127.0.0.1:9000/#/";
}

describe("Opis zestawu asercji", () => {
  beforeEach(() => {});
  beforeAll(() => {});
  afterEach(() => {});
  afterAll(() => {});

  it("should open website", () => {
    browser.get(url);
    const header = element(by.css("h1"));

    expect(header.getText()).toEqual("Todos");
  });
});
