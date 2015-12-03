module.exports = {
  graph: function(req, res) {
    User.find().exec(function(err, r){
      console.log(r)
      res.locals.scripts = [
        '/js/graph.js',
      ];
      return res.view({users: r});
    });
  }
};
