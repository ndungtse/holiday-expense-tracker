# Expense Tracker App

This is a simple web application built with Angular and Node.js (express) that allows users to track expenses and settle up with their friends. Users can add expenses for each traveler, view expenses and settle up to calculate how much each traveler needs to pay out to any other traveler.

## Technologies Used

- Angular (Frontend)
- Node.js (Backend)
- Cypress (End-to-end testing)
- Tailwind CSS (Styling)

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- Angular CLI

## Getting Started

1. Clone the repository

2. Install dependencies for the frontend and backend:

    ```bash
    cd travel-expenses-app
    cd frontend
    yarn install
    cd ../backend
    yarn install
    ```

3. Start the backend server:

    ```bash
    cd backend
    yarn run dev
    ```

4. Navigate to <http://localhost:4200> in your browser to view the app.

## Running the tests

1. Run the end-to-end tests:

    ```bash
    cd frontend
    yarn run e2e
    ```

2. Run the unit tests:

    ```bash
    cd frontend
    yarn run test
    ```

3. Run backend tests:

    ```bash
    cd backend
    yarn run test
    ```

## Deployment

1. Build the frontend:

    ```bash
    cd frontend
    yarn run build
    ```

## Built With

- [Angular](https://angular.io/) - The frontend framework used
- [Node.js](https://nodejs.org/en/) - The backend framework used
