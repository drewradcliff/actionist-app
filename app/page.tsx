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
