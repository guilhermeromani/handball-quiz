const mongoose = require("mongoose");

class QuizRepository {
  constructor() {
    this.model = mongoose.model("Quiz");
  }

  list(page) {
    return this.model.paginate({}, { page, limit: 10 });
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
