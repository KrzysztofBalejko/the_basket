describe('Item', function (){

    it ("displays list items", function(){
        cy.visit('http://localhost:3000')
        cy.get('li').should('contain', 'milk')
    })

    it ("list item can be deleted", function(){
        cy.visit('http://localhost:3000')
        cy.get('li').should('contain', 'cocacola')
        cy.get('button').click({ multiple: true, force: true })
        cy.get('li').should('not.contain', 'cocacola')
    })

    it ("adds new item to the list", function(){
        cy.visit('http://localhost:3000')
        cy.get('input').type('New item')
        cy.get('button').click({ multiple: true, force: true })
        cy.get('li').should('contain', 'New item')
    })
})
