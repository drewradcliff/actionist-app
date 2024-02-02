import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full py-4 px-8 flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.svg" alt="actionist logo" width={50} height={50} />
      </Link>
      <div className="gap-6 flex-row flex">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <a href="mailto:actionist.app@gmail.com">Contact</a>
      </div>
    </div>
  );
}
