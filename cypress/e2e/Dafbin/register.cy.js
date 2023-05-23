describe('Valid Register', () => {
  it('Visits the Dafbin Website', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('.justify-center.mt-4 > .text-medium-base').click()
    cy.get('input[name="Nama"]').type('seleketep')
    cy.get('input[name="Email"]').type('seleketep8@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('input[name="Konfirmasi kata sandi"]').type('Staging12345*')
    cy.get('#agreement').click()
    cy.contains('Daftar').click()
    //pause 5 seconds
    cy.wait(2000)
  })
})

describe('Invalid Register', () => {
  it('Invalid Register min 5 char', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('.justify-center.mt-4 > .text-medium-base').click()
    cy.get('input[name="Nama"]').type('sele')
    cy.get('input[name="Email"]').type('seleketep8@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('input[name="Konfirmasi kata sandi"]').type('Staging12345*')
    cy.get('#agreement').click()
    cy.contains('Daftar').click()
    cy.wait(2000)
  })
})

describe('Invalid Register', () => {
  it('Invalid Register Name All Number', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('.justify-center.mt-4 > .text-medium-base').click()
    cy.get('input[name="Nama"]').type('12345')
    cy.get('input[name="Email"]').type('seleketep8@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('input[name="Konfirmasi kata sandi"]').type('Staging12345*')
    cy.get('#agreement').click()
    cy.contains('Daftar').click()
    cy.wait(2000)
  })
})

describe('Invalid Register', () => {
  it('Invalid Register Name All Symbol', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('.justify-center.mt-4 > .text-medium-base').click()
    cy.get('input[name="Nama"]').type('!@#$%')
    cy.get('input[name="Email"]').type('seleketep8@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('input[name="Konfirmasi kata sandi"]').type('Staging12345*')
    cy.get('#agreement').click()
    cy.contains('Daftar').click()
    cy.wait(2000)
  })
})

describe('Invalid Register', () => {
  it('Invalid Register Name same email', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('.justify-center.mt-4 > .text-medium-base').click()
    cy.get('input[name="Nama"]').type('seleketep8@yopmail.com')
    cy.get('input[name="Email"]').type('seleketep8@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('input[name="Konfirmasi kata sandi"]').type('Staging12345*')
    cy.get('#agreement').click()
    cy.contains('Daftar').click()
    cy.wait(2000)
  })
})

describe('Invalid Register', () => {
  it('Invalid Register Name same password', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('.justify-center.mt-4 > .text-medium-base').click()
    cy.get('input[name="Nama"]').type('Staging12345*')
    cy.get('input[name="Email"]').type('seleketep8@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('input[name="Konfirmasi kata sandi"]').type('Staging12345*')
    cy.get('#agreement').click()
    cy.contains('Daftar').click()
    cy.wait(2000)
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