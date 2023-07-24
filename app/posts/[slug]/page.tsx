import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMeta from "@/components/getPostMeta";

const getPostContent = (slug: string) => {
    /* get post content from slug */
    const folder = path.join(process.cwd(), 'posts/');
    // get the file via the path and slug name being passed in params
    const file = `${folder}${slug}.md`;
    // decode the file content to utf-8
    const content = fs.readFileSync(file, "utf-8");
    // get matter content 
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMeta();
    return posts.map((post) => {
        slug: post.slug;
    });
};

const postPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <div>
            <h1>{post.data.title}</h1>
            <article className="prose lg:prose-xl">
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </div>
    );
};

export default postPage;