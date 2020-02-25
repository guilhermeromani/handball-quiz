const mongoose = require('mongoose');

class QuizRepository {

    constructor() {
        this.model = mongoose.model("Quiz");
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

    update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true });
    }

    delete(id) {
        this.model.findByIdAndRemove(id);
    }
}

module.exports = QuizRepository;