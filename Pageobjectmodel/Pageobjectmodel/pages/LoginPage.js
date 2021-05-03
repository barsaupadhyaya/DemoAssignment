import { Selector, t } from 'testcafe'

class LoginPage {

    constructor() {

        this.languageArrow = Selector('div.locale-language>mat-select>div>div:nth-of-type(2)');
        this.chooselanguage = Selector('div[role="listbox"]>mat-option:nth-of-type(2)>span');
        this.customerNumberInput = Selector('input[name="customer-number"]');
        this.usernameInput = Selector('input[name="email"]');
        this.passwordInput = Selector('input[name = "password"]');
        this.loginButton = Selector('button[type="submit"]');
        this.signUpLink = Selector('a[text="Sign up"]');
        this.forgotPasswordLink = Selector('a[text="Forgot password?"');
        this.unsuccessfulErrormessage = Selector('div.alert>n1-auth-errors');


    }

    async changelanguage() {
        await t
            .click(this.languageArrow);
    }

    async selectEnglish() {
        await t
            .click(this.chooselanguage);
    }

    async setCustomerNumber(customerNumber) {
        await t

            .typeText(this.customerNumberInput, customerNumber);
    }
    
    async setUsername(username) {
        await t

            .typeText(this.usernameInput, username);
    }

    async setPassword(password) {
        await t
            .typeText(this.passwordInput, password);
    }

    async clickLogin() {
        await t
            .click(this.loginButton);
    }

    async signuplink_exists() {
        await t
        click(this.signUpLink); 
    }

    async forgotpassword_exists() {
        await t
        click(this.forgotPasswordLink);
    }

}

export default new LoginPage();