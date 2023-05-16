describe('Expenses page', () => {
  it('should add a new expense to the table', () => {
    // Add an expense to the form
    cy.get('form').within(() => {
      cy.get('[data-testid="name-input"]').type('John Doe');
      cy.get('[data-testid="expense-input"]').type('50');
      cy.get('[data-testid="add-expense-button"]').click();
    });
    // Verify that the expense was added to the table
    cy.get('[data-testid="expense-row"]').should('have.length', 1);
    cy.get('[data-testid="expense-row"] td:first').should('contain', 'John Doe');
    cy.get('[data-testid="expense-row"] td:last').should('contain', '$50');
  });
});
