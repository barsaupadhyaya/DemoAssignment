import { Selector, t } from 'testcafe'

class SignupPage {

    constructor() {

        this.languageArrow = Selector('div.locale-language>mat-select>div>div:nth-of-type(2)');
        this.chooselanguage = Selector('div[role="listbox"]>mat-option:nth-of-type(2)>span');
        this.compRegnoInput = Selector('input[name="registration-number"]');
        this.firstNameInput = Selector('input[name = "first-name"]');
        this.lastNameInput = Selector('input[name = "last-name"]');
        this.workEmailInput = Selector('input[name = "email"]');
        this.EmailConfirmationInput = Selector('input[formcontrolname = "emailConfirmation"]');
        this.PhoneNumberInput = Selector('input[name = "phone-number"]');
        this.agreeCheckbox = Selector('mat-checkbox[formcontrolname="signupConsent"]>label>span.mat-checkbox-inner-container');
        this.createAnAccountButton = Selector('button[type="submit"]');       
        this.loginLink = Selector('a[text="Log in"]');
        this.successfulMessage = Selector('h1.main-title');
       


    }

    async languageDropdown() {
        await t
            .click(this.languageArrow);
    }

    async selectEnglish() {
        await t
            .click(this.chooselanguage);
    }

    async setcompRegno(cvrNo) {
        await t
            .typeText(this.compRegnoInput, cvrNo);
    }

    async setFirstName(firstname) {
        await t
            .typeText(this.firstNameInput, firstname);
    }

    async setLastName(lastname) {
        await t
            .typeText(this.lastNameInput, lastname);
    }

    async setWorkEmail(workemail) {
        await t
            .typeText(this.workEmailInput, workemail);
    }

    async setEmailConfirmation(emailconfm) {
        await t
            .typeText(this.EmailConfirmationInput, emailconfm);
    }

    async setPhoneno(number) {
        await t
            .typeText(this.PhoneNumberInput, number);
    }

    async checkbox() {
        await t
            .click(this.agreeCheckbox);
    }

    async createAccount() {
        await t
            .click(this.createAnAccountButton);
    }

    

    async loginButton() {
        await t
            .click(this.loginLink);
    }

    
}

export default new SignupPage();