 import mainPage from "./pages/main.page.js"
// import { searchInput } from "./pages/main.page.js"

describe('Few tests for Telnyx mainpage', () => {
  beforeEach(()=>{
    cy.viewport(1280, 720)
    cy.visit('https://telnyx.com/')
    //cy.get('button[aria-label="close and deny"]').click()
  })
  xit('Сheck header for sections', () => {    
    cy.get(mainPage.getHeaderSections()).should(($lis) => {      
      expect($lis).to.have.length(6)
      expect($lis.eq(0)).to.contain('Products')
      expect($lis.eq(1)).to.contain('Solutions')
      expect($lis.eq(2)).to.contain('Network')
      expect($lis.eq(3)).to.contain('Resources')
      expect($lis.eq(4)).to.contain('Company')
      expect($lis.eq(5)).to.contain('Pricing')
    })
  })
  
  xit('Header should contain some text', () => {
    cy.get(mainPage.getHeader()).should('contain.text', 'INTRODUCING TELNYX STORAGE: BETTER CLOUD STORAGE, FOR LESS. ')
  })

  xit('Title should have some text', () => {
    cy.get(mainPage.getTitle()).should('have.text', 'Telnyx | Communication APIs for Seamless Connectivity ')    
  })

  xit('Should add value to email field', () => {
    cy.get(mainPage.getEmail()).type('test123@gmail.com') 
      .should('have.value', 'test123@gmail.com')        
  })

  xit('Should redirect to sign-up page', () => {
    cy.get(mainPage.getEmail()).type('{enter}')      
    cy.url().should('include', '/sign-up')     
  })

  xit('Should add value to email field & redirect to sign-up page', () => {
    cy.get(mainPage.getEmail()).type('test123@gmail.com') 
      .type('{enter}')
      .should('have.value', 'test123@gmail.com')
    cy.url().should('include', '/sign-up')     
  })

  xit('Should redirect to sign-up page by header link', () => {
    cy.get(mainPage.getSignupHeader()).first().click({force: true})    
    cy.url().should('include', '/sign-up')     
  })

  xit('Should redirect to sign-up page by footer link', () => {
    cy.xpath(mainPage.getSignupFooter()).first().click()    
    cy.url().should('include', '/sign-up')     
  })

  xit('Should redirect to login page by header link', () => {
    cy.xpath(mainPage.getLoginHeader()).first().click()    
    cy.url().should('include', '/login/sign-in')     
  })
})

