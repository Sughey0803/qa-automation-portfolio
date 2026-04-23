it('POST user using fixture', () => {

  cy.fixture('user').then((userData) => {

    const randomId = Math.floor(Math.random() * 1000)
    userData.email = `fixture${randomId}@mail.com`

    cy.request({
      method: 'POST',
      url: 'https://dummyjson.com/users/add',
      body: userData
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.email).to.include('fixture')
    })

  })

})