/* eslint-disable no-undef */
describe('Expenses page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a new expense to the table', () => {
    // Add an expense to the form
    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="expense-input"]').type('50');
    cy.get('[data-testid="add-expense-button"]').click();

    // Verify that the expense was added to the table
    cy.get('[data-testid="expense-row"]').should('have.length', 1);
    cy.get('[data-testid="expense-row"] td:first').should('contain', 'John Doe');
    cy.get('[data-testid="expense-row"] td:last').should('contain', '$50.00');
  });

  it('should settle up expenses and display summary', () => {
    // Add some expenses to the form
    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="expense-input"]').type('50');
    cy.get('[data-testid="add-expense-button"]').click();
    cy.get('[data-testid="name-input"]').type('Jane Doe');
    cy.get('[data-testid="expense-input"]').type('100');
    cy.get('[data-testid="add-expense-button"]').click();

    // Click the "Settle Up" button
    cy.get('[data-testid="settle-up-button"]').click();

    // Verify that the summary table is displayed
    cy.get('[data-testid="summary-table"]').should('exist');
    cy.get('[data-testid="summary-row"]').should('have.length', 2);
    cy.get('[data-testid="summary-row"] td:first').should('contain', 'John Doe');
    cy.get('[data-testid="summary-row"] td:last').should('contain', '$25.00');
  });
});
