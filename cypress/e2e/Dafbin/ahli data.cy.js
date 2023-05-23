describe('Ahli Data Premium', () => {
  it('Visits the Dafbin Website', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('input[name="Email"]').type('seleketep6@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('.border-2').click()
    cy.contains('Ahli Data').click()
    cy.contains('Pilih Paket Anda!')
    cy.contains('Premium')
    cy.get(':nth-child(3) > .border-2').click()
    cy.get('input[name="Permintaan 1"]').type('Untung')
    cy.get('input[name="Permintaan 2"]').type('Rugi')
    cy.get('input[name="Permintaan 3"]').type('Penjualan')
    cy.get('input[name="Permintaan 4"]').type('Pembelian')
    cy.get('input[name="Permintaan 5"]').type('Auuahh')
    cy.get('input[name="Permintaan 6"]').type('Auuahh')
    cy.get('input[name="Permintaan 7"]').type('Auuahh')
    cy.get('input[name="Permintaan 8"]').type('Auuahh')
    cy.get('input[name="Permintaan 9"]').type('Auuahh')
    cy.get('input[name="Permintaan 10"]').type('Auuahh')
    cy.get('input[name="Permintaan 11"]').type('Auuahh')
    cy.get('input[name="Permintaan 12"]').type('Auuahh')
    cy.get('input[name="Permintaan 13"]').type('Auuahh')
    cy.get('input[name="Permintaan 14"]').type('Auuahh')
    cy.get('input[name="Permintaan 15"]').type('Auuahh')
    cy.get('input[name="Permintaan 16"]').type('Auuahh')
    cy.get('input[name="Permintaan 17"]').type('Auuahh')
    cy.get('input[name="Permintaan 18"]').type('Auuahh')
    cy.get('input[name="Permintaan 19"]').type('Auuahh')
    cy.get('input[name="Permintaan 20"]').type('Auuahh')
    cy.get(':nth-child(5) > .text-medium-base').click()
    cy.get('.max-h-40 > :nth-child(1) > .text-regular-base').click()
    cy.get('.p-\[2px\]').click()
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