describe('Signup on the trymima app', () => {
   it('Can sign up sucessfully without a referral code', () => {
   cy.visit('/')
   //cy.get('.Header2_header__nav__btn__wRKfY>:nth-child(2)>button').click()
   // cy.get('.Header2_header _nav__btn _wRKfY>:nth-of-type(2)>button').should('be.visible').cLick() 
cy.get('.Header2_header__nav__btn__wRKfY').within(() => { 
  cy.get('div:nth-of-type(2)>button').should('be.visible').click() 

//cy.get('.Login_logintext_center_DbD-L>h3').invoke('text').then((text)=>{
     expect(text).to.be.eq('Sign Up')

  })
})
})











/*describe('template spec', () => {
  it('should load the homepage successfully', () => {
    cy.request('https://automationexercise.com/')
      .its('status')
      .should('eq', 200); 

    cy.visit('https://automationexercise.com/');

    cy.url().should('include', 'automationexercise'); 
    cy.title().should('not.be.empty');
  });
});*/


















/* describe(" Michael's Shopping Spree on Automation Exercise", () => {

  beforeEach(() => {
    // Start fresh before every test
    cy.visit("https://automationexercise.com/")
  })

   it(" Navigates to the products page and searches for an outfit", () => {
    cy.log(" Heading to the Products section...")
    cy.get('a[href="/products"]').click()
    cy.url().should('include', '/products')

    cy.log(" Searching for 'Tshirt' because why not?")
    cy.get('#search_product').type('Tshirt')
    cy.get('#submit_search').click()

    cy.log(" Verifying that search results appear")
    cy.get('.productinfo.text-center').should('be.visible')
  })

  it(" Adds the first product to cart and checks it out", () => {
    cy.log(" Scrolling down to the featured items")
    cy.scrollTo('bottom')

    cy.log(" Adding the first product to the cart")
    cy.get('.features_items .product-image-wrapper').first().trigger('mouseover')
    cy.contains('Add to cart').first().click()

    cy.log(" Product added! Let’s view the cart now")
    cy.contains('View Cart').click()
    cy.url().should('include', '/view_cart')

    cy.get('#cart_info_table').should('be.visible')
    cy.log(" Confirmed — item is in the cart!")
  })

  it(" Sends a lovely message to customer support", () => {
    cy.log(" Navigating to Contact Us page")
    cy.contains('Contact us').click()

    cy.log(" Filling out the contact form")
    cy.get('[data-qa="name"]').type('Michael QA')
    cy.get('[data-qa="email"]').type('michael@testmail.com')
    cy.get('[data-qa="subject"]').type('Just testing my charm ')
    cy.get('[data-qa="message"]').type("Hi team, just checking in to say your site rocks!")

    cy.log(" Sending message...")
    cy.get('[data-qa="submit-button"]').click()

    cy.log(" Expecting success message")
    cy.get('.status.alert.alert-success').should('contain', 'Success')
  })

  it(" Plays around with navigation and validates footer links", () => {
    cy.log("Scrolling to the bottom of the page")
    cy.scrollTo('bottom')

    cy.get('footer').within(() => {
      cy.contains('Subscription').should('exist')
      cy.get('#susbscribe_email').type('qa_rocks@testmail.com')
      cy.get('#subscribe').click()
    })

    cy.get('.alert-success').should('contain', 'You have been successfully subscribed')
    cy.log(" Subscription success confirmed!")
  })

})

*/
