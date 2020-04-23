const mongoose = require("mongoose");

class UserRepository {
  constructor() {
    this.model = mongoose.model("User");
  }

  findById(id) {
    return this.model.findById(id);
  }

  findByEmail(email) {
    return this.model.findOne({ email });
  }

  create(data) {
    return this.model.create(data);
  }
}

module.exports = UserRepository;
