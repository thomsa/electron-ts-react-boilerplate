# Electron TypeScript & React Boilerplate

Another boilerplate for electron and react. This time [Electron](https://www.electronjs.org/) uses [TypeScript](https://www.typescriptlang.org/) with the latest available TS. The client app is created with [create-react-app](https://github.com/facebook/create-react-app) (CRA). 

> What is cool about this boilerplate?

**You need 2 npm commands work with it!**
 (as for now...)

`npm|yarn start` runs the whole application in development mode, which means you get hot-reload both for the react client AND for the electron application! 
If you change the client the CRA hot-reload fires, if the electron app, nodemon makes sure that you'll see your changes instantly!

`npm|yarn electron-package-all` creates builds for all available platforms, after creating a production build of both the CRA and the Electron app.

Easy as 1-2-3!

> What is included besides Electron, React and TS?

 - [Prettier](https://prettier.io/) with [Husky](https://github.com/typicode/husky)! All your code is instantly formatted on every commit!
 - [Dotenv](https://github.com/motdotla/dotenv) for production settings! Use the `electron/config.ts` file to wrap your configuration!
 - [Electron Builder](https://www.electron.build/)  to quickly build distributable packages!
 - [typedi](https://github.com/typestack/typedi)! Yes... Cause everyone needs some dependency injection sometimes.
 - [Webpack](https://webpack.js.org/)! Well, obviously. Webpack builds both Electron and CRA. 


What will you need to run the solution?

 - Node v13.x

> What else is coming?

 - Electron Autoupdate!
 - Wrapper for Window and Modal handling!
 - react-router!
 - Boilerplate for communicating between Electron and React!
 - Testing Framework for Electron.
 - Something else will come to my mind later for sure...
