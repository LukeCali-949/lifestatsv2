"use client";

import { useState } from "react";

import Image from "next/image";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";
import { auth } from "./firebase";
import ChartForm from "./components/Input/ChartForm";
import { LineChartCustomTooltip } from "./components/Charts/Chart1";

export default function Home() {
  const [authUser, setAuthUser] = useState(null);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="">
      {!authUser ? (
        <>
          <SignIn /> <SignUp />
        </>
      ) : (
        <div
          onClick={() => setShowModal(true)}
          className="group hover:bg-opacity-90 w-[350px] h-[350px] ml-5 mt-5 bg-white rounded-md shadow-2xl flex items-center justify-center cursor-pointer"
        >
          <span className="hidden group-hover:block">Add Chart</span>
        </div>
      )}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 relative">
            <ChartForm />
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 bg-black text-pink-400">
        <AuthDetails authUser={authUser} setAuthUser={setAuthUser} />
      </div>
    </div>
  );
}
