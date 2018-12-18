const env = "local";
let url = "";
if (env === "local") {
  url = "http://10.0.75.1:9000/#/";
}
//describe("opis zestawu asercji", "callback")
describe("opis zestawu asercji", () => {
  //    beforeEach(()=>{});
  //    beforeAll(()=>{});
  //    afterEach(()=>{});
  //    afterAll(()=>{});

  //     it("should open wepsite", ()=> {

  //     })
  // it("should open wepsite", ()=> {
  //   //tych asercji może być wiele
  // })

  it("should open wepsite", () => {
    //Arrange
    browser.get(url);
    const header = browser.element(by.css("h1"));
    //Action and Assert
    expect(header.getText()).toEqual("Todos");
  });
});
