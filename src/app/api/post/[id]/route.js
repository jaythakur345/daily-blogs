import connect from "../../../../utils/db"
import  MyPosts from "../../../../model/post"
const { NextResponse } = require("next/server");


export const GET = async (req, { params }) => {
    const { id } = params;
    try {
        await connect(); // Assuming connect() establishes a connection to your database

        // Find the post by its slug
        const post = await MyPosts.findById(id);

        if (!post) {
            return new NextResponse('Post not found', { status: 404 });
        }

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
};

