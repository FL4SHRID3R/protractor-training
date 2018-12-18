const env = "local";
let url = "";
if (env === "local") {
  url = "http://10.0.75.1:8080/#/";
}

describe("opisu zestawu assercji", () => {
  it("should open website", () => {
    browser.get(url);
    const header = browser.element(by.css("h1"));
    expect(header.getText()).toEqual("Todos");
  });
});
