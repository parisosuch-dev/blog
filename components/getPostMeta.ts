import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMeta = (): PostMetadata[] => {
    /* returns all post metadata */
    const folder = "/posts/";
    const files = fs.readdirSync(folder);
    // get all markdown posts through filter
    const mdPosts = files.filter((file) => file.endsWith(".md"));
    // get gray matter metadata from each file
    const posts = mdPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`/posts/${fileName}`, "utf-8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      }
    });
    return posts;
  };

  export default getPostMeta;