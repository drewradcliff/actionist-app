import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "app/blog/posts");
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const fullPath = path.join(
    process.cwd(),
    "app/blog/posts",
    `${params.slug}.md`,
  );
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { content, data } = matter(fileContents);
  const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="prose mx-auto px-8 py-32 sm:py-52">
      <h1 className="text-5xl">{data.title}</h1>
      <h2 className="pb-14 text-base font-light text-gray-600">
        {formattedDate}
      </h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
