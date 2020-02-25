const QuestionRepository = require('../repositories/QuestionRepository');

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
        var result = await this._repository.nextQuestion(category_ids, question_ids);
        if (result != null)
            result = result[0];
        return result;
    }
}

module.exports = QuestionBusiness;