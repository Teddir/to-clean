import React from "react";
import { useFirebase } from "../components/firebase/FirebaseProvider";
import logo from "../src/svg/logo.svg";
import cleanImage from "../src/svg/cleanImage.png";
import tokorame from "../src/svg/miniTokorame.svg";
import mySure from "../src/svg/miniMySure.svg";
import nibras from "../src/svg/miniNibras.svg";
import deJavs from "../src/svg/miniDejavs.svg";
import afework from "../src/svg/miniAfework.svg";
import habaik from "../src/svg/miniHabaik.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/theme";

export default function Landing() {
  const navigation = useNavigate();
  const { user } = useFirebase();
  const handleStart = () => {
    // console.log(user);
    navigation(`${user ? "/tora" : "/tora/role"}`, { replace: true });
  };

  return (
    <>
      <div className="min-h-screen max-w-screen-2xl bg-white  xl:bg-contain">
        <div className="xl:px-12 px-4 ">
          {/* start header */}
          <div className="w-full xss:px-4 ">
            <div className="flex justify-between items-center">
              <img
                src={logo}
                className="App-logo h-16 w-16 xl:h-20 xl:w-20"
                alt="logo"
              />
              <div className="h-[1rem] w-[4rem] xl:w-[6rem] bg-gradient-to-r from-white to-white-icon" />
            </div>
          </div>
          {/* end header */}
          {/* body */}
          <div className="bg-c5 mt-6 w-full rounded-lg xl:p-12 p-6 xl:flex flex-row justify-between duration-150 items-center shadow-lg">
            <div className="xl:w-[100vh]">
              <div className="h-full">
                <div className="xl:w-[80%]">
                  <div className="mb-5">
                    <span className="xl:text-[3rem] capitalize text-[2rem] font-Pop font-bold tracking-tighter text-[#222]">
                      Bersih - bersih kantor ditemani{" "}
                      <br className="hidden xl:block" /> dengan Tora `&quot;`Bersih
                      Kilau & Cepat.`&quot;`{" "}
                    </span>
                  </div>
                  <h6>
                    I would love to share with you guys my recent work Digital
                    Agency Website Design. Hope you guys enjoy and press if you
                    like it. Got any feedback or comment? Feel free to leave in
                    the comments below.
                  </h6>
                </div>
                <div className="flex items-start xl:mt-8 my-8">
                  <Button label={"Mulai Sekarang"} onPress={handleStart}/>
                </div>
              </div>
            </div>
            <div className="rounded-lg shadow-inherit">
              <div
                className="xl:w-[50vh] xl:h-[40vh] h-[50vh] bg-contain bg-bottom"
                style={{
                  backgroundImage: `url(${cleanImage})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
          <div className="my-12">
          <div className="text-center" >
            <span className="uppercase font-SSP font-semibold tracking-wide">Trusted by over Companies</span>
          </div>
          <div className=" justify-items-center opacity-80 grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-5 smm:grid-cols-4 xs:grid-cols-3 xss:grid-cols-2">
            <div className="xl:h-[20vh] xl:w-[20vh] h-[10vh] w-[10vh] mt-8 hover:shadow-lg rounded-full"
              style={{
                backgroundImage: `url(${tokorame})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY:"center",
                backgroundPosition:"center",
              }}
              />
              <div className="xl:h-[20vh] xl:w-[20vh] h-[10vh] w-[10vh] mt-8 hover:shadow-lg rounded-full"
              style={{
                backgroundImage: `url(${nibras})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY:"center",
                backgroundPosition:"center"
              }}
              />
              <div className="xl:h-[20vh] xl:w-[20vh] h-[10vh] w-[10vh] mt-8 hover:shadow-lg rounded-full"
              style={{
                backgroundImage: `url(${mySure})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY:"center",
                backgroundPosition:"center"
              }}
              />
              <div className="xl:h-[20vh] xl:w-[20vh] h-[10vh] w-[10vh] mt-8 hover:shadow-lg rounded-full"
              style={{
                backgroundImage: `url(${deJavs})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY:"center",
                backgroundPosition:"center"
              }}
              />
              <div className="xl:h-[20vh] xl:w-[20vh] h-[10vh] w-[10vh] mt-8 hover:shadow-lg rounded-full"
              style={{
                backgroundImage: `url(${afework})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY:"center",
                backgroundPosition:"center"
              }}
              />
              <div className="xl:h-[20vh] xl:w-[20vh] h-[10vh] w-[10vh] mt-8 hover:shadow-lg rounded-full"
              style={{
                backgroundImage: `url(${habaik})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionY:"center",
                backgroundPosition:"center"
              }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
