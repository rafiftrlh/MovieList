"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";

export default function DefaultModal() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Sign In</button>
      <div
        className={`${
          openModal ? "block" : "hidden"
        } bg-gray-500 fixed right-[50%] top-[50%] z-10`}
      >
        <div>
          <header className="grid grid-cols-2 justify-end">
            <div></div>
            <div>
              <button onClick={() => setOpenModal(false)}>
                <span>Close</span>
              </button>
            </div>
          </header>
          <div>
            <label htmlFor="">Fullname</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
