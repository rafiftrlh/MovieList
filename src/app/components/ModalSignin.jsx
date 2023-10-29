"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { AiOutlineClose } from "react-icons/ai";

export default function DefaultModal() {
  const [openModal, setOpenModal] = useState();

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Sign In
      </button>
      <div
        className={`${
          openModal ? "block" : "hidden"
        } fixed right-[50%] bottom-[50%] flex justify-center translate-x-1/2 translate-y-1/2 z-10 w-screen h-screen p-4 bg-black/75 items-center`}
      >
        <div className="rounded-2xl p-5 bg-white w-3/4 lg:w-1/2 h-fit">
          <div className="outline rounded-xl p-5">
            <header className="grid grid-cols-2 justify-end relative">
              <button
                onClick={() => setOpenModal(false)}
                className="scale-[2] absolute -top-5 -right-5 bg-white rounded-full p-[2px] group"
              >
                <AiOutlineClose className="group-hover:bg-gray-200 rounded-full scale-75 outline outline-2 p-1" />
              </button>
            </header>
            <form className="grid grid-cols-2 gap-5 gap-y-10">
              <input
                type="text"
                placeholder="Firstname"
                className="text-sm bg-transparent w-full rounded-none border-transparent border-b-2 border-b-gray-500 border"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="text-sm bg-transparent w-full rounded-none border-transparent border-b-2 border-b-gray-500 border"
              />
              <input
                type="email"
                placeholder="Email"
                className="col-span-2 text-sm bg-transparent w-full rounded-none border-transparent border-b-2 border-b-gray-500 border"
              />
              <input
                type="password"
                placeholder="Password"
                className="col-span-2 text-sm bg-transparent w-full rounded-none border-transparent border-b-2 border-b-gray-500 border"
              />
              <button
                onClick={() => setOpenModal(false)}
                type="button"
                className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
              >
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
