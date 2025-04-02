# Coin Flip Web Component

![image](https://github.com/user-attachments/assets/e49d11e9-de6e-4ba0-a7a1-7f57ceefe0fe)


## Introduction
Welcome to the Coin Flip Web Component! This component is a reusable custom element that simulates a coin flip. With a click of a button, users can experience a realistic 3D coin flip animation and see the result, either "Heads" or "Tails". The component is lightweight, easy to integrate, and visually appealing.

## Key Features
Interactive Coin Flip: Simulate flipping a coin with a smooth animation.

User-Friendly Design: A clean and modern design with a clickable coin element.

Custom Web Component: Fully encapsulated as a reusable HTML custom element (<coin-flip>).

Simple Integration: Easily add the coin flip component to any web application.

## Content
The project consists of the following files:

index.html: Example usage of the component.

coin-flip.js: The JavaScript file that implements the custom <coin-flip> element.

styles.css: The CSS file that handles the appearance and animation of the coin.

## Implementation Details

HTML
The CoinFlip component uses HTML to define its structure. It consists of a clickable coin element, which will trigger the animation and display the result of the coin flip (Heads or Tails).

CSS Styling
Custom CSS is used to create the appearance of the coin and animate the flip. The @keyframes animation provides a 3D flip effect, while the styles ensure the coin is centered on the page and has a visually appealing look.

JavaScript
The CoinFlip component is implemented in JavaScript as a custom HTML element (<coin-flip>). JavaScript handles the coin flip logic, the random generation of "Heads" or "Tails", and triggering the animation when the user clicks the coin.

## Usage
To use the Coin Flip component, simply insert the <coin-flip> tag in your HTML file where you want the coin flip to appear. The component is fully functional with default behavior. Optionally, you can customize the styles via styles.css.

### Example 1:

`<coin-flip></coin-flip>`

In this example, the default behavior is used. The coin will flip and show either "Heads" or "Tails" when clicked.

### Full Example Usage:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coin Flip</title>
  <script src="coin-flip.js" defer></script>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Flip a Coin!</h1>
  <coin-flip></coin-flip>
</body>
</html>
```
In this example:

coin-flip.js contains the JavaScript logic for the coin flip functionality.

styles.css is used for styling the coin and providing the flip animation.

The component is placed within the body and will display a clickable coin that triggers the flip on click.
