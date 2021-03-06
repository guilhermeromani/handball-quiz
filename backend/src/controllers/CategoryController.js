const CategoryBusiness = require('../business/CategoryBusiness');

module.exports =  {

    async list(req, res) {
        var business = new CategoryBusiness();

        const result = await business.list();
        return res.json(result);
    },

    async findById(req, res) {
        var business = new CategoryBusiness();

        const result = await business.findById(req.params.id);
        return res.json(result);
    },

    async create(req, res) {
        var business = new CategoryBusiness();

        const result = await business.create(req.body);
        return res.json(result);
    }
}