# Sails ArangoDB Demo

[Sails](http://sailsjs.org) application showcasing the usage of [ArangoDB](https://www.arangodb.com/) being used via <a href="https://github.com/gabriel-letarte/sails-arangodb">Waterline ArangoDB adapter</a>

## Running

Once SailsJS is installed (http://sailsjs.org/get-started),

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
