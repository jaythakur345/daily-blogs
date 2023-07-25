import Image from 'next/image'
import React from 'react'

const About = () => {
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
                            src={"https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            unoptimized
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex flex-col gap-4">
                            <h1 className="text-xl text-black font-extrabold">About us</h1>
                            <p className="leading-relaxed text-lg mb-4">
                                Welcome to Daily Blog!

                                At Blog, we believe that every day is an opportunity to learn, explore, and grow. Our mission is to provide you with a daily dose of inspiration, knowledge, and entertainment that enriches your life and brightens your day.

                                Who We Are:
                                We are a passionate team of writers, thinkers, and dreamers who came together with a shared vision: to create a platform where people can find a little something special each day. Our diverse backgrounds and interests enable us to cover a wide range of topics, ensuring that there's always something for everyone.

                                What We Do:
                                At Daily Blog, we strive to bring you the best of the best, carefully curating content that matters to you. From the latest trends and thought-provoking insights to heartwarming stories and creative ideas, we aim to be your one-stop destination for daily inspiration.

                                Our Values:
                                Integrity and Authenticity: We believe in presenting information with honesty and accuracy, respecting the trust you place in us.

                                Passion for Learning: We are avid learners ourselves, and this passion drives us to share knowledge and discoveries with our readers.

                                Community Engagement: We cherish our readers and value the sense of community that flourishes here. We encourage open dialogue, feedback, and the exchange of ideas.

                                Creativity and Innovation: We embrace creativity in all its forms, celebrating uniqueness and thinking outside the box.

                                Quality Over Quantity: Rather than overwhelming you with a deluge of content, we focus on delivering high-quality articles that leave a lasting impact.

                                Our Commitment:
                                We understand that life can be hectic, and finding time for leisure reading may seem like a luxury. That's why we strive to create content that is easy to digest, yet meaningful enough to make your day a little brighter. Whether you have a few minutes to spare during your morning coffee or need a quick pick-me-up during a break, Daily Blog is here to brighten your day.

                                Join Us on this Journey:
                                We invite you to be a part of this exciting journey with us. Subscribe to our newsletter to receive daily updates directly to your inbox. Follow us on social media to engage with our vibrant community and participate in interesting discussions. Your feedback, ideas, and support are what motivate us to keep pushing the boundaries of creativity and excellence.

                                Thank you for visiting Daily Blog. Together, let's make every day extraordinary!

                                [Optional: Insert a brief bio of the founders or key team members, along with their passion for creating the blog. Add contact information if you wish to encourage direct
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About