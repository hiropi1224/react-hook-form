import { Button } from "~/components/ui";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <Button>Click me</Button>
      </div>
    </div>
  );
}
