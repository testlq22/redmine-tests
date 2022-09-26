import signupPage from "../e2e/pages/signup.page.js"
// import { searchInput } from "./pages/main.page.js"

describe('Test for Telnyx Sign-up page', () => {
  beforeEach(()=>{
    cy.viewport(1280, 720)
    cy.visit('https://telnyx.com/')
    //cy.get('button[aria-label="close and deny"]').click()
  }) 

  it('Sign-up with not valid credentials, some error message should be visible', () => {
    cy.get(signupPage.getSignupHeader()).first().click({force: true})    
    cy.get(signupPage.getEmail()).type(signupPage.fakeEmail())
    cy.get(signupPage.getName()).type(signupPage.fakeName())
    cy.get(signupPage.getPassword()).type(signupPage.fakePassword())
    cy.get(signupPage.getTermsCheckbox()).click({force: true})
    cy.get(signupPage.getSubmitButton()).click()    
    cy.wait(7000)
    cy.get(signupPage.getErrorMessage()).should('be.visible')     
  })
})