const QuizBusiness = require('../business/QuizBusiness');

module.exports = {

    async create(req, res) {
        var business = new QuizBusiness();

        const result = await business.create(req.body);
        return res.json(result);
    },

    async list(req, res) {
        var business = new QuizBusiness();

        const { page = 1} = req.query;
        const result = await business.list(page);
        return res.json(result);
    },

    async findById(req, res) {
        var business = new QuizBusiness();

        const result = await business.findById(req.params.id);
        return res.json(result);
    },    

    async sendAnswer(req, res) {
        var business = new QuizBusiness();
        
        const result = await business.sendAnswer(req.params.quiz_id, req.body);
        return res.json(result);
    },

    async nextQuestion(req, res) {
        var business = new QuizBusiness();

        const result = await business.nextQuestion(req.params.quiz_id);
        return res.json(result);
    }
}