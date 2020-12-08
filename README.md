# React Messenger App

Basic messenger app have following features:
1. The user should be able to write messages in the chat window and see them appear.
2. The user should be able to select a friend and see his chat with this friend.

# Project setup steps

1. Install project dependencies

        npm i

2. Start server

        npm start  # Will start server and open the webpage [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Code structure

![Code structure](/images/structure.png)


* components
List of reuseable react components for Messenger application like Message, MessageList, SenderList, etc.
Every component folder contains an index JSX and corresponsing CSS file.

* mock
The data currently mocked in MessengerApp component state could be passed on from mock for simplicity

* styles
Contains all the common and resuable styles, CSS variables, colour themes, etc.

* utils
All utility functions/ snippets that can be used throughout the application.

* App.js
Messenger App entry JSX file.

## Improvements
- Paginating messages in the messenger application.
- Login and session management to messenger application.
- Real time message update.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
