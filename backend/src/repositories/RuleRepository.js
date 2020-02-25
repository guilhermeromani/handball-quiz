const mongoose = require('mongoose');

class RuleRepository {

    constructor() {
        this.model = mongoose.model("Rule");
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

module.exports = RuleRepository;