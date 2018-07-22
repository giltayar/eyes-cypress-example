'use strict'
const {describe, it} = require('mocha')

describe('Blog App', function () {
  it('should do stuff', () => {
    const url = 'https://www.theonion.com/'

    cy.visit(url)

    cy.eyesOpen({appName: 'cypress play around', testName: 'cypress play around', viewportSize: [
      // {width: 800, height: 600},
      {width: 1024, height: 768}
    ]})

    cy.eyesCheckWindow(url) // visual snapshot

    cy.eyesClose({timeout: 180000})
  })
})
