const bcrypt = require("bcrypt");

const UserRepository = require("../repositories/UserRepository");

class UserBusiness {
  constructor() {
    this._repository = new UserRepository();
  }

  async findById(id) {
    return await this._repository.findById(id);
  }

  async findByEmail(email) {
    return await this._repository.findByEmail(email);
  }

  async checkPassword(receivedPassword, currentPassword) {
      return bcrypt.compare(receivedPassword, currentPassword)
  }
    
  async create(user) {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    return await this._repository.create(user);
  }
}

module.exports = UserBusiness;
