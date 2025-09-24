import Link from "next/link";
import "./globals.css";
export default function Main() {
  return (
    <div className="">
      <main className="flex flex-col items-center justify-center h-screen pb-50">
        {/* Hero Section */}
        <section className="main">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold">
            Frontend 개발자 손대훈입니다.
          </h1>
        </section>

        <div className="main-nav">
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
