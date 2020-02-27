const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class QuestionRepository {

    constructor() {
        this.model = mongoose.model("Question");
    }

    list() {
        return this.model.find();
    }

    async findById(id) {
        var element = await this.model.aggregate([
            { $match: { _id: new ObjectId(id) } },
            {
                $lookup: {
                    from: "categories",
                    localField: "category_id",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: {
                    path: "$category",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: "rules",
                    localField: "rule_ids",
                    foreignField: "_id",
                    as: "rules"
                }
            },
            {
                $unwind: "$rules"
            }
        ]);

        if (element != null && element.length > 0)
            return element[0];
        return element;
    }

    create(data) {
        return this.model.create(data);
    }

    nextQuestion(category_ids, question_ids) {
        return this.model.aggregate([
            { $match: { category_id: { $in: category_ids }, _id: { $nin: question_ids } } },
            { $sample: { size: 1 } }
        ]);
    }

    nextQuestionForAllCategories(question_ids) {
        return this.model.aggregate([
            { $match: { _id: { $nin: question_ids } } },
            { $sample: { size: 1 } },
        ]);
    }
}

module.exports = QuestionRepository;