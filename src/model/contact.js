import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        message: {
            type: String,
            required:true
        },
    },
    { timestamps: true }
);

const Contact = mongoose.models.Contacts
  ? mongoose.models.Contacts
  : mongoose.model("Contacts", contactSchema);

export default Contact;