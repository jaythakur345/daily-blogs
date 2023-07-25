import { TPost } from '@/components/types'
import Image from 'next/image'
import React from 'react'

async function getData(id:any) {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`${apiUrl}/api/post/${id}`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const Post = async ({ params }: any) => {
    const post : TPost = await getData(params?.id);
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="w-full mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <Image
                            alt="content"
                            width={200}
                            height={200}
                            className="object-cover object-center h-full w-full"
                            src={post?.img as string || "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col gap-4">
                            <h1 className="text-xl text-black font-extrabold">{post.title}</h1>
                            <p className="leading-relaxed text-lg mb-4">{post?.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post