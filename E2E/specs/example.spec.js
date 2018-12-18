const env = "local";
let url = "";
if (env === "local") {
  url = "http://10.0.75.1:9000/#/";
}

describe("opis zestawu asercji", () => {
  it("should open wepsite", () => {
    browser.get(url);
    const header = browser.element(by.css("h1"));
    expect(header.getText()).toEqual("Todos");
  });
});
