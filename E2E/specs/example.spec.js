const env = "local";
let url = "";
if (env === "local")
    url = "http://127.0.0.1:9000/#/";
describe("opis zestawu asercji", () => {
  /* isIterable("should open website",()=>{

    }) */

    describe("opisu zestawu assercji", () => {
        it("should open website", () => {
            browser.get(url);
            var header = element(
                by.css(
                    "h1"
                )
            );
            var headerText = header.getText();
            expect("Todos").toEqual(headerText);
        });
    });

});
