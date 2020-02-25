const QuizRepository = require('../repositories/QuizRepository');

const QuestionBusiness = require('./QuestionBusiness');

class QuizBusiness {

    constructor() {
        this._repository = new QuizRepository();
    }

    async list() {
        return await this._repository.list();
    }

    async findById(id) {
        return await this._repository.findById(id);
    }

    // async create(quiz, userId) {
    async create(data) {
        // var userBusiness = new UserBusiness();
        // var owner = await userBusiness.findById(userId);
        return await this._repository.create(data);
    }

    async update(id, data) {
        return await this._repository.update(id, data);
    }

    async nextQuestion(id) {
        var quiz = await this.findById(id);

        var questionBusiness = new QuestionBusiness();
        var newQuestion = await questionBusiness.nextQuestion(quiz.category_ids, quiz.question_ids);
        if (newQuestion != null) {
            quiz.result.quantityOfQuestions++;
            var newQuestionId = newQuestion._id.toString();
            quiz.question_ids.push(newQuestionId);
        }

        return await this.update(quiz.id, quiz);
    }
}

module.exports = QuizBusiness;