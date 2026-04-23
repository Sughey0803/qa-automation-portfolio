Cypress.Commands.add('getUsers', () => {
  return cy.request('https://dummyjson.com/users')
})

Cypress.Commands.add('getUserById', (id) => {
  return cy.request(`https://dummyjson.com/users/${id}`)
})
