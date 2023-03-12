//jest is automatically set up as the default testing framework, and a setupTests.js file is created in the src directory.
//the extend-expect function is imported from the @testing-library/jest-dom library,
// which provides additional matchers and utility functions for testing React components.
//The setupTests.js file is automatically run by Jest before any tests are executed, so any setup code or dependencies defined in this file will be available to all tests in the project.
import '@testing-library/jest-dom/extend-expect';
