module.exports = {

  /**
   * Showcase of ArangoDB neighbors query.
  */
  graph: function(req, res) {
    res.locals.scripts = [
      '/specific-js/graph.js',
    ];

    User.find({username:'Gabriel'}).exec(function(err, r){
      User.neighbors(r[0]._id, 'knows_graph', function(err, neighbors){
        return res.view({user: r[0], neighbors: neighbors});
      });
    });
  },

  /**
   * Showcase of ArangoDB "create edge".
  */
  createEdge: function(req, res) {
    var data = req.body;
    var id1 = req.body.id1;
    var id2 = req.body.id2;
    delete data.id1;
    delete data.id2;

    User.createEdge('knows', req.body.id1, req.body.id2, function(err, r){
      return res.json(r);
    });
  },

  /**
   * Showcase of ArangoDB "delete edge".
  */
  deleteEdge: function(req, res) {
    User.deleteEdge('knows', req.params.edge_id, function(err, r){
      return res.json(r);
    });
  },

  /**
   * Find all users
   * All query params will be taken and given to the query
   * e.g: /users?username=Mikael
   *      /users?id=13405571826  ==  /users/13405571826
  */
  all: function(req, res) {
    User.find(req.query).exec(function(err, r){
      return res.json(r);
    });
  },

  /**
   * Find the user with the given user id
   * The `_key` in ArangoDB or `{id: "13405571826", ...}` when converting
   * a user to json.
  */
  find: function(req, res) {
    User.find(req.params.user_id).exec(function(err, r){
      return res.json(r);
    });
  },

  /**
   * Create a user with the given JSON.
   * Create a profile for the user @WIP
   * E.g, POST /users
   * {
   *    "username": "John",
   *    "age": 27,
   *    "email": "john@ipsum.com",
   *    "password": "secret"
   * }
  */
  create: function(req, res) {
    User.create(req.body).exec(function(err, r){
      Profile.create({user: r}).exec(function(err, rr){
        return res.json(r);
      });
    });
  },

  /**
   * Delete the user.
   * Also delete it's profile via `beforeDestroy` lifecycle callback
  */
  delete: function(req, res) {
    User.destroy(req.params.user_id).exec(function(err, r){
      return res.json(r);
    });
  },
};
