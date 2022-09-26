class SignupPage {
    
    getEmail() {
        return 'input[type="email"]';
    }

    getSignupHeader() {
        return '[href="/sign-up"';
    }

    getName() {
        return 'input[id="full_name"]';
    }

    getPassword() {
        return 'input[id="password"]';
    }

    getTermsCheckbox() {
        return 'input[id="terms_and_conditions"]';
    }

    getSubmitButton() {
        return 'button[type="submit"]';
    }

    getErrorMessage() {
        return '[id="signup-form_error"]';
    }

    fakeEmail() {
        return 'test123@gmail.com';
    }

    fakeName() {
        return 'test123';
    }

    fakePassword() {
        return 'Test1234fake/';
    }

    
}
require("cypress-xpath")
module.exports = new SignupPage()