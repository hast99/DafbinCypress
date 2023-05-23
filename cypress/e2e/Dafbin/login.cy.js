describe('Valid Data', () => {
  it('Visits the Dafbin Website', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('input[name="Email"]').type('seleketep7@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('.border-2').click()
    cy.wait(2000)
  })
})

describe('Invalid Data', () => {
  it('Wrong Password', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('input[name="Email"]').type('seleketep7@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345')
    cy.get('.border-2').click()
    cy.wait(2000)
  })
})

describe('Invalid Data', () => {
  it('Wrong Email', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('input[name="Email"]').type('hastbro99@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345')
    cy.get('.border-2').click()
    cy.wait(2000)
  })
})

describe('Invalid Data', () => {
  it('Email not register', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('input[name="Email"]').type('seleketep10@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('.border-2').click()
  })
})

// Testing menggunakan iphone-8, ipad-2, dan 1366x768 screen
// const sizes = ['iphone-8', 'ipad-2', [1366, 768]]

// describe('Website Dafbin', () => {
//   sizes.forEach((size) => {
//     it(`Should display logo on ${size} screen`, () => {
//       if (Cypress._.isArray(size)) {
//         cy.viewport(size[0], size[1])
//       } else {
//         cy.viewport(size)
//       }

//       cy.visit('https://dafbinikiki.netlify.app/')
//       cy.get('input[name="Email"]').type('seleketep5@yopmail.com')
//       cy.get('input[name="Kata sandi"]').type('Staging12345*')
//       cy.get('.border-2').click()
//       cy.contains('Ahli Data').click()
//       cy.get('.text-semibold-heading4')      
//     })
//   })
// })