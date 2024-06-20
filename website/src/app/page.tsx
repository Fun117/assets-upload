import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full h-dvh p-24 bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
        <Link href="https://github.com/fun117">
          <Avatar className="w-[200px] h-[200px]">
            <AvatarImage
              src="/image/fun117/icon-rd.png"
              alt="Fun117 Logo"
              width={200}
              height={200}
            />
            <AvatarFallback>FN</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-5xl font-bold text-neutral-800 dark:text-neutral-200">
            Fun117 CDN
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Fun117&apos;s public asset upload site
          </p>
        </div>
      </div>
    </main>
  );
}
