const UsersData = require('../data/users.json');

module.exports = class UserService {
    static getFakeUserList(count) {
        if (count <= UsersData.length) {
            return UsersData.slice(0, count);
        }
        const [firstElement] = UsersData;

        return firstElement;
    }
};
