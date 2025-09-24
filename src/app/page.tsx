import Image from "next/image";
import MainPage from "./home/page";
import "./globals.css";
export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="">
          <MainPage />
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
