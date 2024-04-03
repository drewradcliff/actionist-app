import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <div className="h-full">
      <main className="h-full">
        <div className="absolute w-full">
          <Header />
        </div>
        <div className="flex flex-col items-center space-y-4 text-center py-64">
          <Image src="/logo.svg" alt="qr code" width={300} height={300} />
          <h1 className="text-6xl tracking-tighter font-semibold">Actionist</h1>
          <p className="text-2xl text-zinc-500">
            Stop organizing your todo apps, simply start doing.
          </p>
        </div>
        <div className="flex flex-col items-center py-64 bg-gray-100">
          <div className="flex items-center">
            <Image
              src="/iphone-screenshot.png"
              alt="iphone screenshot"
              width={400}
              height={400}
            />
            <ul className="pl-24 list-disc space-y-4">
              <li className="text-2xl text-zinc-500">
                Designed for the easily distracted
              </li>
              <li className="text-2xl text-zinc-500">
                Tap to change task into &quot;DOING&quot;
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center py-52">
          <Image
            src="/activation.png"
            alt="activation energy chart"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col items-center py-24 bg-gray-50">
          <p className="text-center pb-4 text-2xl max-w-lg uppercase font-semibold tracking-widest">
            There is an inverse relationship between things on your mind and
            those things getting done.
          </p>
          <p className="text-zinc-500">- David Allen</p>
        </div>
        <footer className="py-12 flex flex-col justify-center items-center space-y-8">
          <Image alt="qr code" src="/qr-code.svg" width={150} height={150} />
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Actionist. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
