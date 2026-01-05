# React App : Axios, Forms

Using the [JSONPlaceholder API](jsonplaceholder.typicode.com), the objective of this project is to:

*   **Use Axios** to fetch and display the returned data in a **table**.
*   **Filter** the list.
*   Add a **form** to create a new user.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 🚀 Technologies Used

*   **React.js** (or your preferred framework)
*   **Axios**: For handling HTTP requests.
*   **CSS / Tailwind CSS**: For styling the table and form UI.
*   **JSONPlaceholder**: A fake online REST API for testing and prototyping.

## 🛠️ Installation and Setup

1.  **Clone the repository**
    ```bash
    git clone git@github.com:flachheb/userreact.git
    cd userreact
    ```

2.  **Install dependencies**
    ```bash
    npm install axios
    # or
    yarn add axios
    ```
3.  **Install dependencies**
    ```bash
    npm run build
    ```

4.  **Run the application**
    ```bash
    npm start
    ```

## 📋 Key Features

### 1. Data Fetching
Uses an Axios instance to retrieve the 10 initial users from the `/users` endpoint. Data is stored in the local state and rendered dynamically.

### 2. Live Filtering
A search bar allows users to filter the list by **name** in real-time as they type.

### 3. User Creation (Form)
A controlled form captures details for a new user. 
*   **Note:** Since JSONPlaceholder is a mock API, Data is stored in the local state and rendered dynamically.

## 📂 Project Structure (Example)

```text
src/
├── components/
│   ├── UserTable.jsx    # Displays the list of users
│   ├── UserForm.jsx     # Handles new user input
│   └── UserFilter.jsx   # Search/Filter input field
├── services/
│   └── api.js           # Axios configuration and API calls
└── App.js               # Main logic and state management
