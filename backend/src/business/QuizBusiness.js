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
            quiz.result.sumOfAlternatives += newQuestion.correct_answers.length;

            var newQuestionId = newQuestion._id.toString();
            quiz.question_ids.push(newQuestionId);
            await this.update(quiz.id, quiz);

            return await questionBusiness.findById(newQuestionId);
        }

        return null;
    }

    async sendAnswer(quiz_id, data) {
        var questionBusiness = new QuestionBusiness();

        var quiz = await this.findById(quiz_id);
        var question = await questionBusiness.findById(data.question_id);

        quiz.result.currentScore += this.calculateScore(question, data.answers);
        quiz.answers_log.push({
            question_id: question._id.toString(),
            answers: data.answers
        });
        return await this.update(quiz.id, quiz);
    }

    calculateScore(question, answers) {
        var current = 0;

        // Intersection
        let correct = question.correct_answers.filter(x => answers.includes(x));
        current += correct.length;

        // Difference
        let wrong = answers.filter(x => !question.correct_answers.includes(x));
        current -= wrong.length;

        return current < 0 ? 0 : current;
    }
}

module.exports = QuizBusiness;