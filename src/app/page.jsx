import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import ListMovie from "./section/ListMovie";

export default function Home() {
  return (
    <>
      <header className="py-3 px-6 shadow-md shadow-gray-600">
        <nav className="flex container mx-auto justify-between items-center">
          <Image src={logo} alt="logo" width="35" height="35" />
          <div>
            <input type="text" placeholder="Searching" />
          </div>
          <div>
            <Link href="/signin" className="text-sm">Sign In</Link>
          </div>
        </nav>
      </header>
      <main>
        <ListMovie/>
      </main>
    </>
  );
}
