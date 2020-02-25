const RuleBusiness = require('../business/RuleBusiness');

module.exports =  {

    async list(req, res) {
        var business = new RuleBusiness();

        const result = await business.list();
        return res.json(result);
    },

    async findById(req, res) {
        var business = new RuleBusiness();

        const result = await business.findById(req.params.id);
        return res.json(result);
    },

    async create(req, res) {
        var business = new RuleBusiness();

        const result = await business.create(req.body);
        return res.json(result);
    }
}