'use strict'
const {describe, it} = require('mocha')

describe('Blog App', function () {
  it('should do stuff', () => {

    cy.visit('http://applitools.com/helloworld')

    cy.eyesOpen({appName: 'cypress play around', testName: 'cypress play around', viewportSize: [
      // {width: 800, height: 600},
      {width: 1024, height: 768}
    ]})

    cy.eyesCheckWindow('first') // visual snapshot

    cy.eyesClose()
  })
})
