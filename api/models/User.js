module.exports = {
  tableName: 'user',

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      columnName: '_key'
    },
    username: {
      type: 'string'
    },
    email: {
      type: 'email',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    profile: {
      collection: 'profile',
      via: 'user',
      edge: 'profileOf'
    }
  },

  beforeDestroy: function(criteria, cb){
    var user_id = criteria.where.id;
    Profile.destroy({user: user_id}).exec(function(err, r){
      return cb();
    });
  }
};
