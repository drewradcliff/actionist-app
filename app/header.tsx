import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full py-4 px-8 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <h1 className="text-2xl tracking-tighter">Actionist</h1>
      </Link>
      <div className="gap-6 flex-row flex text-sm sm:text-lg">
        <Link href="/blog">Blog</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <a href="mailto:actionist.app@gmail.com">Contact</a>
      </div>
    </div>
  );
}
