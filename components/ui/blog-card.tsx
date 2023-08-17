"use client";

import { Blog } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogCardProps {
    blog: Blog
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/blog/${blog?.id}`)} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    src={blog.imageUrl}
                    alt=""
                    fill
                    className="aspect-square object-cover rounded-md"
                />
            </div>

            <div className="flex flex-col">
                <p className="font-semibold text-lg truncate">{blog.title}</p>
                <p className="text-gray-500 text-sm">{blog.author}</p>
            </div>
        </div>
    );
}

export default BlogCard;