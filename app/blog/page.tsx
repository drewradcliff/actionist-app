import Link from "next/link";

export default function BlogList() {
  return (
    <div className="prose mx-auto px-8 py-32 sm:py-52">
      <h2>Blog</h2>
      <ul>
        <li>
          <Link href="/blog/blog-one">Blog one</Link>
        </li>
        <li>
          <Link href="/blog/blog-two">Blog two</Link>
        </li>
      </ul>
    </div>
  );
}
