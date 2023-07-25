import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
        },
        slug: {
            type: String,
            required:true
        },
        category: {
            type: String,
        },
        img: {
            type: String,
            default:"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    },
    { timestamps: true }
);

const Posts = mongoose.models.Posts
  ? mongoose.models.Posts
  : mongoose.model("Posts", postSchema);

export default Posts;