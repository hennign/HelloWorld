// https://howtonode.org/hello-node
// NOTE: This uses a different node-router module than the npm default
// npm install https://github.com/creationix/node-router
// Load the node-router library by creationix
var server = require('node-router').getServer();

// Configure our HTTP server to respond with Hello World the root request
server.get("/", function (request, response) {
  response.simpleText(200, "Hello World!");
});

// Listen on port 8080 on localhost
server.listen(8080, "localhost");