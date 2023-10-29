import Image from "next/image";
import logo from "@/assets/logo.svg";
import ListMovie from "./sections/ListMovie";
import DefaultModal from "./components/ModalSignin";

export default function Home() {
  return (
    <>
      <header className="py-3 px-6 shadow-md shadow-gray-200">
        <nav className="flex container mx-auto justify-between items-center">
          <Image src={logo} alt="logo" width="35" height="35" />
          <div>
            <input type="text" placeholder="Searching" />
          </div>
          <div>
            <DefaultModal />
          </div>
        </nav>
      </header>
      <main className="mt-10 container mx-auto relative flex items-center flex-col">
        <ListMovie />
      </main>
    </>
  );
}
