const usersData = require('../data/users.json');

module.exports = class UserService {
    static getFakeUserList(count) {
        if (count > usersData.length) {
            return [...usersData];
        }
        if (count <= usersData.length) {
            return usersData.slice(0, count);
        }
        const [firstElement] = usersData;

        return firstElement;
    }
};
