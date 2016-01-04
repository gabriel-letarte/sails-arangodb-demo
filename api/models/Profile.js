module.exports = {
  tableName: 'profile',

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      columnName: '_key'
    },
    user: {
      model: "User",
      required: true
    },
    age: {
      type: 'string'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    }
  }
};
