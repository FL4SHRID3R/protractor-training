const env = "local";
let url = "";
if (env === "local") {
  url = "http://localhost:9000/#/";
}

describe("opis zestawu assercji", () => {
  it("should open website", () => {
    browser.get(url);
    expect(element(by.css("h1")).getText()).toEqual("Todos");
  });
});
