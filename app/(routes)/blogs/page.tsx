import getBlogs from '@/actions/get-blogs'
import BlogList from '@/components/blog-list'
import Container from '@/components/ui/container'
import { NextPage } from 'next'
import React from 'react'

const Blog: NextPage = async () => {
    const blogs = await getBlogs()

    return (
        <Container>
            <div className="mt-5 min-h-[calc(100vh-84px)] px-4 sm:px-6 lg:px-8">
                <BlogList title="All Blogs" blogs={blogs} />
            </div>
        </Container>
    )
}

export default Blog