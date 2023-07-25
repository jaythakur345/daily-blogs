import getServerUrl from '@/utils/serverUrl'
import trimToLength from '@/utils/trimToLength'
import Link from 'next/link'
import React from 'react'
import { TPost } from '../types'

async function getData() {
    const apiUrl = process.env.API_URL; 
    const res = await fetch(`${apiUrl}/api/post`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const FeaturedPosts = async () => {
    const allPosts: TPost[] = await getData()
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="lg:text-2xl font-extrabold text-lg py-5 text-black">All Posts</h2>
                <div className="flex flex-wrap -m-4">
                    {allPosts?.map((post) => {
                        return <div className="p-4 md:w-1/3">
                            <Link href={`post/${post?._id}`}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.img || "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post?.category}</h2>
                                        <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{trimToLength(post?.title as string, 20)}</h2>
                                        <p className="leading-relaxed mb-3">{trimToLength(post?.content as string, 100)}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    })}

                </div>
            </div>
        </section >
    )
}

export default FeaturedPosts