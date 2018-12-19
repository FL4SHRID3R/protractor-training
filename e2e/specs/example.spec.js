const env = 'local';

let url = '';

if(env === 'local') url = 'http://127.0.0.1:9000/#/';

xdescribe('Description', () => {

    const newTodo = 'Testing todo';
    const veryLongTodo = 'This is a test for length possibility in todo to check whever it allows for vefy vefy vefy' +
        ' long todos: ';

    beforeAll(async () => {
        await browser.get(url);
    });

    it('should open website', async () => {
        const header = await browser.element(by.css('h1'));
        const headerText = await header.getText();
        expect(headerText).toEqual('Todos');
    });

    xit('should add TODO to list', () => {
        const input = browser.element(by.css('input'));
        input.sendKeys(newTodo);
        browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .perform();
        const todos = browser.element(by.css('label'));
        expect(todos.isPresent()).toBeTruthy();
        expect(todos.getText()).toEqual(newTodo);
    });

    xit('should add a long TODO', () => {
        const input = browser.element(by.css('input'));
        for(let i = 0; i < 10; i++) {
            input.sendKeys(veryLongTodo);
        }
        browser
            .actions()
            .sendKeys(protractor.Key.ENTER)
            .perform();
        const todos = browser.element.all(by.css('label'));
        expect(todos[ 1 ].isPresent()).toBeTruthy();
        expect(todos[ 1 ].getText()).toEqual(veryLongTodo);
    });
});
