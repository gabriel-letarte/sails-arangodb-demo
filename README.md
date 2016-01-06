# Sails ArangoDB Demo

[Sails](http://sailsjs.org) application showcasing the usage of [ArangoDB](https://www.arangodb.com/) being used via <a href="https://github.com/gabriel-letarte/sails-arangodb">Waterline ArangoDB adapter</a>

## Running

Once SailsJS is (installed)[http://sailsjs.org/get-started],

```
npm install
sails lift
```

The following endpoints are available:

```
  get    /users/graph     # To see in the browser
  get    /users
  get    /users/:user_id
  post   /users
  delete /users/:user_id
```

## Database

@TODO: Currently, the database has to be created and filled manually.

Using the ArangoDB ui at http://localhost:8529/ create a database with the name, user and password given by the `/config/connections.js`.

If not, you will get this error:

```
  getEdgeCollections:: []
  /home/gabriel/brane/thebrane-demo/node_modules/sails-arangodb/lib/connection.js:78
              var docCollection = cols.filter(function(c){
                                      ^
  TypeError: Cannot read property 'filter' of undefined
      at /home/gabriel/brane/thebrane-demo/node_modules/sails-arangodb/lib/connection.js:78:37
      at /home/gabriel/brane/thebrane-demo/node_modules/sails-arangodb/node_modules/arangojs/lib/database.js:157:22
      at /home/gabriel/brane/thebrane-demo/node_modules/sails-arangodb/node_modules/arangojs/lib/connection.js:128:13
      at callback (/home/gabriel/brane/thebrane-demo/node_modules/sails-arangodb/node_modules/arangojs/lib/util/request.js:90:12)
      at IncomingMessage.<anonymous> (/home/gabriel/brane/thebrane-demo/node_modules/sails-arangodb/node_modules/arangojs/lib/util/request.js:98:11)
      at IncomingMessage.emit (events.js:129:20)
      at _stream_readable.js:908:16
      at process._tickDomainCallback (node.js:381:11)
```
