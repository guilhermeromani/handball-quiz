const QuestionRepository = require("../repositories/QuestionRepository");

class QuestionBusiness {
  constructor() {
    this._repository = new QuestionRepository();
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

  async nextQuestion(category_ids, question_ids) {
    var result = null;
    if (category_ids == null)
      result = await this._repository.nextQuestionForAllCategories(
        question_ids
      );
    else
      result = await this._repository.nextQuestion(category_ids, question_ids);

    if (result != null && result.length > 0) {
      return await this.findById(result[0]._id);
    }

    return null;
  }

  async thereArehowManyQuestions(category_ids) {
    if (category_ids == null) {
      return await this._repository.count();
    } else {
      return await this._repository.countByCategories(category_ids);
    }
  }
}

module.exports = QuestionBusiness;
