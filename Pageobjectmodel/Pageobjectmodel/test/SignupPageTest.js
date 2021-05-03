import { ClientFunction } from 'testcafe'
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/SignupPage'

const url = 'https://app-demo.novemberfirst.com/#/public/signup'


fixture("Signup Page")
    .page(url)

test('Login link exists', async t => {
    await t
        .expect(SignupPage.loginButton).ok();


});

test('Validate Success Message ', async t => {

    SignupPage.languageDropdown();
    SignupPage.selectEnglish();
    SignupPage.setcompRegno('30534638');
    SignupPage.setFirstName('Barsa');
    SignupPage.setLastName('Upadhyaya');
    SignupPage.setWorkEmail('barsa.bbsr@gmail.com');
    SignupPage.setEmailConfirmation('barsa.bbsr@gmail.com');
    SignupPage.setPhoneno('90000000000');
    
    SignupPage.checkbox();
    SignupPage.createAccount();


    await t
        .wait(5000)
        .expect(SignupPage.successfulMessage.innerText).contains('Please confirm your email');

});