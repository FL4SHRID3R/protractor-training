const env = 'local';

let url = '';

if(env === 'local') url = 'http://127.0.0.1:9000/#/';

describe('Description', () => {
    beforeAll(() => {
        browser.get(url);
    });

    it('should open website', () => {
        const header = browser.element(by.css('h1'));
        expect(header.getText()).toEqual('Todos');
    });

    it('should add TODO to list', () => {
        const input = browser.element(by.css('input'));
        input.sendKeys('Testing todo');
        browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .perform();
        let todosCssSelector = 'label';
        expect($(todosCssSelector).isPresent()).toBeTruthy();
        expect($(todosCssSelector).getText()).toEqual('Testing todo');
    });
});
