const QuizBusiness = require("../business/QuizBusiness");

module.exports = {
  async create(req, res) {
    var business = new QuizBusiness();

    const result = await business.create(req);
    if (result) {
      return res.json(result);
    }
    return res.status(400).json({ error: "Something bad happened." });
  },

  async list(req, res) {
    var business = new QuizBusiness();

    const { finished = false, page = 1 } = req.query;
    const result = await business.list(finished, req.userId, page);
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
  },
};
