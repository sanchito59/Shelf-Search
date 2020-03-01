## [site test](https://romantic-colden-e9cd5b.netlify.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` 

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test` 

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` 

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Sample API Calls:

### [Author Events](http://www.penguinrandomhouse.biz/webservices/rest/#authorevents)

#### **Search for an Author's Events on Penguin Random House:**

GET /resources/authorevents -- search for author events

https://reststop.randomhouse.com/resources/authorevents/?start=0&max=3&expandLevel=1&isbn=0&authorid=0

The returned result can then be used to find a specific event's information, i.e.eventtype, eventdate, eventtime, eventtimeend, location, market, status, telephone, zip, etc.

#### **Search for a specific event, getting expanded details:**

GET /resources/authorevents/EVENTID -- details for a specific author event

https://reststop.randomhouse.com/resources/authorevents/86694/"

