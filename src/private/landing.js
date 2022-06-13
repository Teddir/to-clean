import React from "react";
import { useFirebase } from "../components/firebase/FirebaseProvider";
import Index from "../components/loading/Index";
import logo from "../src/image/logo.svg"
import Longged from "./user/logged";
import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigation = useNavigate()
  const { user } = useFirebase();
  return (
    <>
      {/* <Index/> */}
      <div className="min-h-screen py-6 px-12 xs:py-4 xs:px-8 xss:px-6 h-screen bg-gradient-to-b from-trans2 to-trans3 md:flex-grow-0">
        <div className="w-full px-12 pt-4 xss:px-4 h-[5vh] ">
          <div className="flex justify-between items-center">
            <img src={logo} className="App-logo h-14 w-14 xl:h-24 xl:w-24" alt="logo" />
            <div className="h-[1rem] w-[4rem] xl:w-[6rem] bg-gradient-to-r from-white to-white-icon" />
          </div>
        </div>
        <div className="relative justify-center items-center h-[90vh] ">
          <div className="flex justify-center items-center h-full">
            <div className="block w-1/2 xs:w-[80%] xss:w-[100%]">
              <div>
                {/* <h1 className="text-white xl:text-[60px] lg:text-[50px] md:text-[52px] text-[42px] sm:text-[34x] xs:text-[32px] text-center font-extrabold">Hey Clean your Place <br/> with ikhlas!!</h1> */}
                <blockquote className="text-white xl:text-[60px] lg:text-[50px] md:text-[52px] text-[42px] sm:text-[34x] xs:text-[32px] xss:text-[26px] text-center font-extrabold">
                  Hey&nbsp;
                  <span className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-purple-500 relative inline-block">
                    <span className="relative text-white">Clean</span>
                  </span>
                  &nbsp;your Place with ikhlas!!
                </blockquote>
                <h4 className="text-white-icon text-center mt-6 lg:leading-8 xl:text-[18px] lg:text-[20px] md:text-[18px] text-[14px] sm:text-[20x] ">
                Protonn was a great product idea which raised $9mln in 2021. Directed to professionals in free professions <br className="hidden"/> to help grow  business and attract clients through engaging video content <br className="hidden"/> and simplify business operations. 
                </h4>
              </div>
              <div className="flex justify-center items-center w-full mt-12 cursor-pointer" onClick={() => navigation(`${user ? '/user/start' :'/tora-role'}`, {replace:true})}>
                <span className="hover:bg-purple-500 px-12 py-4 rounded-md font-bold xs:px-8 xs:py-2 xs:text-[12px] text-purple-500 hover:text-slate-900 border-purple-500 border-2">
                  Gass Bersih-Bersih
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {user ? (
        <>
        <Longged/>
        </>
      ):null}
    </>
  )
}