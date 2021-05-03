import { ClientFunction } from 'testcafe'
import LoginPage from '../pages/LoginPage'



const url = 'https://app-demo.novemberfirst.com/'


fixture("Login Page")
    .page(url)

test('Signup link exists', async t => {
    await t
        .expect(LoginPage.signuplink_exists).ok();


});



test('submit invalid credentials and login', async t => {
    await t
        .wait(5000);
    LoginPage.changelanguage();
    LoginPage.selectEnglish();
    LoginPage.setCustomerNumber('122123');
    LoginPage.setUsername('barsa.bbsr@gmaail.com');
    LoginPage.setPassword('abcde1234');
    LoginPage.clickLogin();

    await t
        .wait(5000)
        .expect(LoginPage.unsuccessfulErrormessage.innerText).contains('Your login attempt was unsuccessful.');



});

test('submit valid credentials and login', async t => {
    
    await t
        .wait(5000)
        .eval(() => location.reload(true));

    
    LoginPage.setCustomerNumber('208101444');
    LoginPage.setUsername('barsa.bbsr@gmail.com');
    LoginPage.setPassword('N0v3mb3r1st');
    LoginPage.clickLogin();
    
});



