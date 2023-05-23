describe('MYSQL', () => {
  it('Visits the Dafbin Website', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('input[name="Email"]').type('seleketep6@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('.border-2').click()
    cy.contains('Database').click()
    cy.get('.max-w-6xl > .border-2').click()
    cy.get('[href="/new/mysql"] > .flex').click()
    cy.get('input[name="Nama Koneksi"]').type('test1')
    cy.get('input[name="Nama host"]').type('sql.freedb.tech')
    cy.get('input[name="Port (Opsional)"]').type('3306')
    cy.get('input[name="Nama Database"]').type('freedb_dafbin')
    cy.get('input[name="Nama Pengguna"]').type('freedb_afanokta')
    cy.get('input[name="Kata Sandi"]').type('Qx%8xN@gw3mpMZ#')
    cy.get('form > .border-2').click()
    cy.wait(2000)
    cy.contains('Hubungkan').click()
  })
})

describe('POSTGRESQL', () => {
  it('Visits the Dafbin Website', () => {
    cy.viewport(1366, 768)
    cy.visit('https://dafbinikiki.netlify.app/')
    cy.get('input[name="Email"]').type('seleketep6@yopmail.com')
    cy.get('input[name="Kata sandi"]').type('Staging12345*')
    cy.get('.border-2').click()
    cy.contains('Database').click()
    cy.get('.max-w-6xl > .border-2').click()
    cy.get('[href="/new/pgsql"] > .flex').click()
    cy.get('input[name="Nama Koneksi"]').type('test1')
    cy.get('input[name="Nama host"]').type('db.kaxzpnmqjzuubvsaaxfy.supabase.co')
    cy.get('input[name="Port (Opsional)"]').type('5432')
    cy.get('input[name="Nama Database"]').type('postgres')
    cy.get('input[name="Nama Pengguna"]').type('postgres')
    cy.get('input[name="Kata Sandi"]').type('iCrnJOzAaNWHCd9D')
    cy.get('form > .border-2').click()
    cy.wait(2000)
    cy.contains('Hubungkan').click()
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