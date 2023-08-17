import NoResults from "@/components/ui/no-results";
import BlogCard from "@/components/ui/blog-card";
import { Blog } from "@/types";

interface BlogListProps {
    title: string
    blogs: Blog[]
}

const BlogList: React.FC<BlogListProps> = ({ title, blogs }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-bold text-3xl">{title}</h3>
            {blogs?.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {blogs?.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

export default BlogList;