import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Link from "next/link";

export default function Header({
  onClick,
  showNav,
}: {
  onClick?: () => void;
  showNav?: boolean;
}) {
  return (
    <div className="absolute w-full">
      <div className="flex w-full items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-2xl tracking-tighter">Actionist</h1>
        </Link>
        <div
          className={clsx(
            "hidden flex-row gap-6 text-sm sm:text-lg",
            !showNav && "sm:flex",
          )}
        >
          <Link href="/blog">Blog</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <a href="mailto:actionist.app@gmail.com">Contact</a>
        </div>
        <button onClick={onClick} className={clsx(!showNav && "sm:hidden")}>
          {showNav ? (
            <Cross1Icon height={20} width={20} />
          ) : (
            <HamburgerMenuIcon height={20} width={20} />
          )}
        </button>
      </div>
      {showNav && (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
          <div className="flex flex-col items-center space-y-8 text-xl">
            <Link href="/blog">Blog</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <a href="mailto:actionist.app@gmail.com">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
}
