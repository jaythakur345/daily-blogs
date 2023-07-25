import connect from "../../../utils/db";
import MyPosts from "../../../model/post";

const { NextResponse } = require("next/server");

export const GET = async (req) => {
  try {
    await connect();
    const posts = await MyPosts.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};

