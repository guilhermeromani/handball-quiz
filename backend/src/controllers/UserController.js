const UserBusiness = require('../business/UserBusiness');

module.exports =  {

    async findById(req, res) {
        var business = new UserBusiness();

        const result = await business.findById(req.params.id);
        return res.json(result);
    },

    async create(req, res) {
        var business = new UserBusiness();

        const result = await business.create(req.body);
        return res.json(result);
    }
}