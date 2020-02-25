const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryBusiness {

    constructor() {
        this._repository = new CategoryRepository();
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

module.exports = CategoryBusiness;