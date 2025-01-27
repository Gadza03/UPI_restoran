# UPI - Restaurant

## Description
"Restaurant" is a web application that serves as a platform for customers to view and order food from a restaurant. The application allows customers to view the
menu, add items to their cart, and place an order. The restaurant owner can manage the menu, view orders, and update the order status.

## Installation

### Prerequisites
- Node.js (version >= 20)
- PostgreSQL (version >= 15)

### Steps to Set Up the Project

1. **Environment Configuration:**
    - Locate the `.env.example` files in the root and `frontend` directories.
    - Create new `.env` files in both locations by copying the contents of the `.env.example` files.
    - Fill in the following fields with your own data:
      ```markdown
      DB_NAME=yourDatabaseName
      DB_USER=yourDatabaseUser
      DB_PASSWORD=yourDatabasePassword
 
      ACCESS_TOKEN_SECRET=yourRandomAccessTokenSecret
      REFRESH_TOKEN_SECRET=yourRandomRefreshTokenSecret
      ```
    - Ensure the secrets are strong and secure. Optionally you can follow the instructions inside the example file.

2. **Database Setup:**
    - Open PgAdmin or your preferred PostgreSQL management tool.
    - Create an empty database with the name specified in your `.env` file (`DB_NAME`).
    - Execute the `database_schema.sql` script located at:
      ```markdown
      backend/src/database/
      ```
    - Then, execute the `database_seed.sql` script from the same directory to populate the database with initial data.

3. **Install Dependencies:**
    - Navigate to the `backend` folder and install dependencies:
      ```bash
      cd backend
      npm install
      ```
    - Return to the root directory:
      ```bash
      cd ..
      ```
    - Navigate to the `frontend` folder and install dependencies:
      ```bash
      cd frontend
      npm install
      ```
    - Return to the root directory:
      ```bash
      cd ..
      ```

4. **Run the Application:**
    - Start the development server:
      ```bash
      npm run dev
      ```
    - The application will now be running locally. Check your terminal or console for the URL to access it in your browser.

## Technologies Used
- **Frontend:** React/TypeScript
- **Backend:** Node.js/TypeScript
- **Database:** PostgreSQL
