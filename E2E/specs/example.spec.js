describe("test set", () => {
  it("should open website", () => {
    browser.get("http://10.0.75.1:9000/#/");
    const el1 = element(by.css(".new-todo"));
    const header = element(by.css("h1"));
    const headerText = header.getText();
    expect("Todos").toEqual(headerText);
    el1.sendKeys("Test", protractor.Key.ENTER);
    browser.sleep(1000);
    el1.clear();
    el1.sendKeys("Test2", protractor.Key.ENTER);
    browser.sleep(1000);
    el1.clear();
    browser.sleep(1000);
  });
});
