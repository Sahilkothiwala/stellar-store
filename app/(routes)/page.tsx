import { NextPage } from "next";

import getBlogs from "@/actions/get-blogs";
import BlogList from "@/components/blog-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage: NextPage = async () => {
    const blogs = await getBlogs({ isFeatured: true });

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard
                    imageUrl='https://res.cloudinary.com/dng5bb2ma/image/upload/v1690199864/sz4tmmqcyj4ifwjjppbx.jpg'
                    title="Explore our blogs"
                />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <BlogList title="Featured Blogs" blogs={blogs} />
                </div>
            </div>
        </Container>
    )
};

export default HomePage;