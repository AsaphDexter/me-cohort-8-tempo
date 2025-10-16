describe('Signup on the trymima app', () => {
  it('Can sign up successfully without a referral code', () => {
    cy.visit('/');

    // (use text; classes are dynamic)
cy.get('button')
  .contains('Sign up')
  .should('be.visible')
  .and('exist')
  .click();

  

// Assert we’re on the signup page
cy.get('.Login_logintext__center__DbD-L > h3')
  .should('contain.text', 'Sign Up');

    cy.contains('h3', 'Sign Up', { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .then(text => {
        expect(text.trim()).to.equal('Sign Up');
      });

    const fullName = 'Gudd Bandi';
    const businessName = 'Banki Bandi';
    const email = `Bandi${Date.now()}@mailinator.com`; 
    const phone = '08031234567';
    const regNumber = 'RC1234567';

    cy.get('#fullname').should('be.visible').type(fullName);
    cy.get('#businessname').should('be.visible').type(businessName);
    cy.get('#businessemail').should('be.visible').type(email);
    cy.get('#businessphonenumber').should('be.visible').type(phone);
    cy.get('#businessRegNum').should('be.visible').type(regNumber);

    cy.get('#businessemail')
      .invoke('val')
      .then(val => {
        expect(val).to.equal(email);
      });

    cy.get('#businessphonenumber')
      .invoke('val')
      .then(val => {
        expect(val).to.match(/^0\d{10}$/);
      });

    cy.contains('button', 'Next')
      .should('be.visible')
      .click();

    // Confirm we are on step 2 by checking for the "Go Back" button and assert
 cy.contains('Go Back', { timeout: 10000 }).should('be.visible')
      .should('be.visible')
      .invoke('text')
      .then(text => {
        expect(text.trim()).to.equal('Go Back');
      });

    
    cy.get('input[placeholder="Enter your website url"]').should('be.visible')
      .type('https://bandi.com');

    cy.get('input[placeholder="Enter your instagram handle"]').should('be.visible')
      .type('goodBandi');

    cy.get('input[placeholder="Enter your twitter handle"]').should('be.visible')
      .type('goodBandi');


cy.contains('label', 'How did you hear about mima?')
  .parent()
  .find('div[role="combobox"], [placeholder]')
  .click();

cy.contains('div', 'Instagram').click();


cy.contains(/^Instagram$/, { timeout: 8000 })
  .should('be.visible')
  .click();

// Assert the dropdown now shows the selected value 
cy.contains('label', 'How did you hear about mima?')
  .parent()
  .within(() => {
    cy.get('div[placeholder], .sc-cPiKLX, .iafYdr').first()
      .invoke('text')
      .then(t => expect(t.trim()).to.equal('Instagram'));
  });


    const password = 'Test1234!';
    cy.get('input[placeholder="Enter your password"]').should('be.visible').type(password);

cy.contains('Got a referral code?')
  .should('be.visible')
  .click();

// Wait for the revealed referral input
cy.get('#referredBy', { timeout: 8000 })
  .should('be.visible')
  .type('BANKIKEES88')
  .invoke('val')
  .then(val => {
    expect(val).to.equal('BANKIKEES88');
  });

    cy.get('input[placeholder="Enter your password"]')
      .invoke('val')
      .then(val => {
        expect(val.length).to.be.at.least(8);
      });

cy.contains('button', 'Sign Up').should('be.visible').click();


cy.document()
  .then((doc) => {
    const signUpButton = doc.querySelector('#root > div:nth-child(1) > div > div.Login_rightside__nhkW7 > div:nth-child(2) > div > div.sc-jXbUNg.fvamil > button');
    if (signUpButton) signUpButton.click();
  });

/*cy.get('#root > div:nth-child(1) > div > div.Login_rightside__nhkW7 > div:nth-child(2) > div > div.sc-jXbUNg.fvamil > button')
  .scrollIntoView()
  .should('be.visible')
  .click();*/

 });
});





