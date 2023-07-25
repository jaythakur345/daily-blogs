import connect from "../../../utils/db"
import Contacts from "../../../model/contact"
const { NextResponse } = require("next/server");


export const POST = async (req) => {
    const { name, email, message } = await res.json();
    await connect(); // Assuming connect() establishes a connection to your database
    const newContact = new Contacts({
        name,
        email,
        message
    })
    try {
        await newContact.save();
        return new NextResponse("Message Sent successfully", { status: 201 });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
};

