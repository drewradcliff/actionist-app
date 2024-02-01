import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <div className="absolute w-full py-4 px-8 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="actionist logo" width={50} height={50} />
        </Link>
        <Link href="mailto:actionist.app@gmail.com">Contact</Link>
      </div>
      <main className="h-full flex justify-center items-center">
        <div className="px-4">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-6xl font-bold tracking-tighter">Actionist</h1>
            <p className="text-gray-500 dark:text-gray-400 text-xl">
              A doing app
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
