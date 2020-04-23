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
    
  async create(user) {
    return await this._repository.create(user);
  }
}

module.exports = UserBusiness;
