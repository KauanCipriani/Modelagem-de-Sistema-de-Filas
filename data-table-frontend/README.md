# Data Table Frontend

This project is a simple React application that allows users to input data and display it in a table format. The application consists of a form for data entry and a table to display the submitted data.

## Project Structure

```
data-table-frontend
├── public
│   └── index.html        # Main HTML file
├── src
│   ├── index.js          # Entry point for the React application
│   ├── App.js            # Main App component
│   ├── components
│   │   ├── DataForm.js   # Component for data input form
│   │   └── DataTable.js   # Component for displaying data in a table
│   ├── styles
│   │   └── main.css      # CSS styles for the application
│   └── utils
│       └── storage.js    # Utility functions for local storage
├── package.json           # npm configuration file
├── .gitignore             # Files to ignore by Git
└── README.md              # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd data-table-frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the form to input data.
- Submit the form to see the data displayed in the table below.
- The application uses local storage to persist data between sessions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.