const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Custom error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// Route handlers and other middleware

app.get('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
  });
});

// // Handle uncaught exceptions
// process.on("uncaughtException", (err) => {
//   console.error("Uncaught exception:", err);
//   process.exit(1);
// });

// // Handle unhandled promise rejections
// process.on("unhandledRejection", (err) => {
//   console.error("Unhandled rejection:", err);
//   // Handle the error or log it as needed
// });

module.exports = app;
