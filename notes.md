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



