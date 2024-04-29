const UserService = require('../services/user.service.js');

module.exports = class UserController {
    static getUserList = (req, res) => {
        let { count } = req.query;
        count = Number(count);
        if (Number.isNaN(count)) {
            console.log(`🚀 count is NaN, execute by default 1`);
        }

        const users = UserService.getFakeUserList(count);
        res.status(200).json({ status: 200, data: users });
    };
};
