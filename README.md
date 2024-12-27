# express-demo

This is a simple web application built with Express.js and EJS (Embedded JavaScript) templating engine, following the tutorial from The Odin Project. The application serves dynamic content and includes routes for authors, books, and an index page.

## Features

- Dynamic rendering of views using EJS
- Static file serving for CSS and other assets
- Basic routing for authors, books, and home pages
- Error handling middleware

## Technologies Used

- Node.js
- Express.js
- EJS
- CSS


## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies

## Usage
1. Start the server
node app.js


2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Routes

- **Home Page:** `/` - Displays the main index page with a list of users.
- **Authors:** `/authors` - Handles author-related routes (defined in `authorRouter`).
- **Books:** `/books` - Handles book-related routes (defined in `bookRouter`).
- **About Page:** `/about` - Displays a simple about page.
- **Contact Page:** `/contact` - Handles contact form submissions.

## Error Handling

The application includes basic error handling middleware that logs errors to the console and returns a 500 status code with an error message.

## Tutorial Reference

This project is part of a tutorial from [The Odin Project](https://www.theodinproject.com/courses/nodejs/lessons/views), which provides comprehensive lessons on building web applications using Node.js and Express.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.