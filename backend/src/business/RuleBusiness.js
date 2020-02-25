const RuleRepository = require('../repositories/RuleRepository');

class RuleBusiness {

    constructor() {
        this._repository = new RuleRepository();
    }

    async list() {
        return await this._repository.list();
    }

    async findById(id) {
        return await this._repository.findById(id);
    }

    async create(data) {
        return await this._repository.create(data);
    }
}

module.exports = RuleBusiness;