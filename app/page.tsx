import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <div className="h-full">
      <div className="absolute w-full">
        <Header />
      </div>
      <main className="h-full flex justify-center items-center">
        <div className="px-4">
          <div className="flex flex-col items-center space-y-4 text-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://apps.apple.com/us/app/actionist-a-doing-app/id6477123297"
            >
              <Image
                src="/qr-code.svg"
                alt="qr code"
                width={300}
                height={300}
              />
            </a>
            <p className="text-gray-500 text-xl">A doing app</p>
          </div>
        </div>
      </main>
    </div>
  );
}
