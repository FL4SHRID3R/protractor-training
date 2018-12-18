const env = "local";
let url = "";
if (env === "local") {
  url = "http://127.0.0.1:9000/#/";
}

describe("opisu zestawu assercji", () => {
  it("should open website", () => {
    browser.get(url);
    var header = element(
      by.css(
        "body > todo-app > todo-list > section > todo-header > header > h1"
      )
    );
    var headerText = header.getText();
    expect(headerText).toEqual("Todos");
  });
});
