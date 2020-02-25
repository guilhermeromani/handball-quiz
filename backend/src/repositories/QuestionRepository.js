const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

class QuestionRepository {

    constructor() {
        this.model = mongoose.model("Question");
    }

    list() {
        return this.model.find();
    }

    findById(id) {
        return this.model.aggregate([
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
                $unwind: "$category"
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
    }

    create(data) {
        return this.model.create(data);
    }

    nextQuestion(category_ids, question_ids) {
        if (category_ids == null)
            return this.model.aggregate([
                { $match: { _id: { $nin: question_ids } } },
                { $sample: { size: 1 } },
            ]);
        else
            return this.model.aggregate([
                { $match: { category_id: { $in: category_ids }, _id: { $nin: question_ids } } },
                { $sample: { size: 1 } }
            ]);

        // if(category_ids == null)
        //     return this.model.findOne({ _id: { $nin: question_ids } });
        // else
        //     return this.model.findOne({ category_id: { $in: category_ids }, _id: { $nin: question_ids } });
    }
}

module.exports = QuestionRepository;