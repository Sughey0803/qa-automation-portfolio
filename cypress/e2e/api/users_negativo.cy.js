
it('GET invalid endpoint - should return 404', () => {
  cy.request({
    url: 'https://dummyjson.com/invalid',
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(404)
  })
})
