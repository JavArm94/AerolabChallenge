# Aerolab Challenge 

## [Online site](https://aerolab-challenge-som.vercel.app/)

This project is a response to the challenge offered by Aerolab at https://aerolab.co/coding-challenge. Develovep with redux y styled-components. It fulfills the following requested features in the challenge.
-	Each product should have a visible price in points.
-	The user should be able to sort products by price, from highest to lowest, and vice-versa.
-	The user should be able to see how many points they have in their account.
-	There should be a clear way for the user to distinguish those products that they can redeem from those they cannot.
-	A “Redeem” button should be available for those products that the user has enough points to claim.
-	A “Redeem now” option should appear when the user interacts with a product that they have enough points to claim.
-	When the user doesn’t have enough points for a product, they should be able to see how many more points they need to claim it.
-	The user should not be able to redeem a product for which they don’t have enough points.
-	When the user clicks on the Redeem now button, the system should automatically deduct the item’s price from the users’ points.

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

To use the application in a local environment, you'll need an API key, which can be obtained [here]( https://aerolab.co/coding-challenge).
After this, you need to create a .env file in the root directory of your project and add the following line followed by your API key:

### `REACT_APP_API_KEY=your_api_key_here`

Make sure to replace your_api_key_here with your actual challenge API key.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

