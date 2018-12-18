describe("test set", () => {
  const url = "http://10.0.75.1:9000/#/";
  it("should open website", () => {
    browser.get(url);
    const toDoInput = element(by.css(".new-todo"));
    const header = element(by.css("h1"));
    const headerText = header.getText();
    expect("Todos").toEqual(headerText);
    toDoInput.sendKeys("Test", protractor.Key.ENTER);
    toDoInput.clear();
    toDoInput.sendKeys("Test2", protractor.Key.ENTER);
    toDoInput.clear();
  });
});
