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
        familyName: {
            type: 'string'
        },
        givenName: {
            type: 'string'
        },
        profilePic: {
            type: 'string'
        }
    }
};
