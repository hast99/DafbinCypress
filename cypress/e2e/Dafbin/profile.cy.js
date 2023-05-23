describe('Edit Data', () => {
    it('Visits the Dafbin Website', () => {
      cy.viewport(1366, 768)
      cy.visit('https://dafbinikiki.netlify.app/')
      cy.get('input[name="Email"]').type('seleketep7@yopmail.com')
      cy.get('input[name="Kata sandi"]').type('Staging12345*')
      cy.get('.border-2').click()
      cy.get('.px-2 > .relative').click()
      cy.get('.absolute > [href="/profile"]').click()
      cy.get('.px-2 > .relative').click()
      cy.get('.rounded-md > .text-start').click()
      cy.get('.z-10 > :nth-child(1)').click()
      cy.get('input[name="phone number"]').type('14045')
      cy.get('input[name="job"]').type('CEO')
      cy.get('.mt-6 > .border-2').click()
    })
  })
  