describe('API Testing - Users Module', () => {

  const baseUrl = 'https://dummyjson.com'

  it('GET /users - should return list of users', () => {
    cy.request(`${baseUrl}/users`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.users).to.be.an('array')
        expect(response.body.users.length).to.be.greaterThan(0)
      })
  })

  it('GET /users/:id - should return a specific user', () => {
    cy.request(`${baseUrl}/users/1`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('email')
      })
  })

})