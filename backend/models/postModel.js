const {Schema, model} = require("mongoose")
const { post } = require("../routes/userRoutes")

const postSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, enum: ["India", "World", "Education","Economy", "Technology", "Weather", "Uncategorized", "Sports" ], message: "{VALUE is not supported}"},
    description: {type: String, required: true},
    thumbnail: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref: "User"},
    thumbnail: {type: String, required: true},

},{timestamps: true})

module.exports = model("Post", postSchema)