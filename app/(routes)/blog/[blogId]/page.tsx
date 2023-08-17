import getBlog from '@/actions/get-blog'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const Blog = async ({ params }: { params: { blogId: string } }) => {
    const blog = await getBlog(params.blogId)

    return (
        <Container>
            <Billboard imageUrl={blog.imageUrl} />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className=" font-bold text-3xl sm:text-5xl lg:text-6xl">
                    {blog.title}
                </div>

                <div className="my-5">
                    {blog.content}
                </div>

                <div className="text-center text-base text-gray-500 my-10">
                    WRITTEN BY
                    <p className='text-lg font-bold text-black'>
                        {blog.author}
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Blog