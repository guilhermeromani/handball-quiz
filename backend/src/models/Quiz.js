const moongose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const QuizSchema = new moongose.Schema({
  category_ids: [moongose.Schema.Types.ObjectId], //null for all the categories
  question_ids: [moongose.Schema.Types.ObjectId],
  user_id : moongose.Schema.Types.ObjectId,
  result: {
    maxQuestions: { type: Number, default: 0 },
    answeredQuantityQuestions: { type: Number, default: 0 },
    sumOfAlternatives: { type: Number, default: 0 },
    currentScore: { type: Number, default: 0 },
  },
  finished: { type: Boolean, default: false },
  answers_log: {
    type: [
      {
        question_id: { type: moongose.Schema.Types.ObjectId },
        answers: { type: [String] },
      },
    ],
  },
});

QuizSchema.plugin(mongoosePaginate);

moongose.model("Quiz", QuizSchema);