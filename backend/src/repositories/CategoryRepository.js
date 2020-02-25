const mongoose = require('mongoose');

class CategoryRepository {

    constructor() {
        this.model = mongoose.model("Category");
    }

    list() {
        return this.model.find();
    }

    findById(id) {
        return this.model.findById(id);
    }

    create(data) {
        return this.model.create(data);
    }
}

module.exports = CategoryRepository;