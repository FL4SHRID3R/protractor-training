/*
Initial conditions:
    Website running on proper url, prepared validated todos as todos{} (at least 4 different), prepare page object for main page of application
TC1
1.as a user i would like to open website
2.as a user i would like to see proper url
3.as a user i should see proper elements (basing on page object's elements) on a page
TC2
1.as a user i should be able to open website
2.as a user i should be able to add 3 elements from todos{}
3.and do not see them after clearing of local storage
TC3
1.as a user i should be able to open website
2.as a user i should be able to add 4 new elements from todos{} and ensure they are active
3.and should be able to see all the todos after reload of the page
4.mark todos as completed and see the result of the action
*/

const env = 'local';

let url = '';

if(env === 'local') url = 'http://127.0.0.1:9000/#/';

class TodoPage {
    constructor() {
    }

    async header() {
        return await element(by.css('h1'));
    }

    async input() {
        return await element(by.css('input.new-todo'));
    }

    async todos() {
        return await element.all(by.css('div.view'));
    }

    async marks() {
        return await this.todos().element.all(by.css('.toggle'));
    }
}

let todosPage;

describe('Example test cases', () => {

    beforeAll(() => {
        todosPage = new TodoPage();
    });

    xit('should be able to see home page', () => {
        // Arrange

        // Act
        browser.get(url);

        // Assert
        expect(todosPage.header().isPresent()).toBeTruthy();
        expect(todosPage.input().isPresent()).toBeTruthy();
        expect(todosPage.todos().isPresent()).toBeTruthy();

    });

    it('should add 3 new todos, clear cache and see no todos', async () => {
        // Arrange

        // Act
        await browser.get(url);
        for(let i = 0; i < 5; i++) {
            await todosPage.input().sendKeys('Testtt');
            await browser
                .actions()
                .sendKeys(protractor.Key.ENTER)
                .perform();
        }

        // Assert
        expect(todosPage.marks().isPresent()).toBeTruthy();
    });

    xit('should add 4 new todos and ensure they are active, reload page and mark them as done', async () => {

    });
});
