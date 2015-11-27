module.exports = {
    tableName: 'user',
    attributes: {
        // id: {
        //     type: 'string',
        //     primaryKey: true,
        //     columnName: '_key'
        // },
        username: {
            type: 'string'
        },
        profile: {
            collection: 'profile',
            via: 'user',
            edge: 'profileOf'
        }
    }
};
