import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default async function BlogList() {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts");
  const fileNames = await fs.readdir(postsDirectory);
  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
      };
    }),
  ).then((posts) =>
    posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    ),
  );

  return (
    <div className="prose mx-auto px-8 py-32 sm:py-52">
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
