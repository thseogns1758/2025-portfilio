import Link from "next/link";
import "./globals.css";
export default function Main() {
  return (
    <div className="">
      <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 pb-16 sm:pb-28">
        {/* Hero Section */}
        <section className="main text-center">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold break-keep leading-snug">
            Frontend 개발자 손대훈입니다.
          </h1>
        </section>

        <div className="main-nav text-base sm:text-lg font-semibold">
          <Link href="/about">About</Link>
          <span>·</span>
          <Link href="/project">Project</Link>
          <span>·</span>
          <Link href="/contact">Contact</Link>
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
