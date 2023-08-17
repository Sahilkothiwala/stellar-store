import { Blog } from "@/types";
import axios from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;
interface Query {
    isFeatured?: boolean;
}

const getBlogs = async (query?: Query): Promise<Blog[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            isFeatured: query?.isFeatured,
        },
    });

    const res = await axios(url);
    return res.data;
};

export default getBlogs;