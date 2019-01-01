## Setup steps and notes

- setup `~/.npmrc` to automatically save and install exact packages (installed per user or per project)
- npm init
- npm install --save express
- npm install chalk
- create app.js or server.js 
- we will be using commonjs pattern
- debugging : `npm install debug`
- node app.js
- DEBUG =* node app.js => DEBUG =app node app.js
- install morgan package to log requests and responses to the console
- We make use of path to join the path and select files
- creating the static files and tell express to use by using `app.use(express.static(path.join(__dirname, 'path/to/resources')));
- setting up scripts 
    -   start script => DEBUG=app node app.js
- ESLint -install global to allow us to run it in the cli
    - eslint --init
    - using popular style guide
    - using airbnb
- since ESLINT is installed globally and our packages are installed locally, it can't find the packages, so we have to run it locally using
    `./node_modules/.bin/eslint app.js`
    - but installing it globally will limit us from using newer versions with other projects
     so uninstall `npm uninstall -g eslint`, add the script to run the local version
- to run any other script besides `test` and `start`, use `npm run` eg `npm run lint`
- install a package ESLINT [VERSION] to help underline in red errors and blue underline for warnings
- Setup nodemon and change our start script to use nodemon i.e. `DEBUG=app node app.js` to `DEBUG=app nodemon app.js` and on windows add `set DEBUG=app & nodemon app.js`
- add nodemon configuration in our packagejson
    - nodemon ignore is an array of things we want nodemon to ignore
    - NODEMON  also allows us set our ports in env and pass to our app

- install ejs templating engine `npm install ejs` and set express to use it.
