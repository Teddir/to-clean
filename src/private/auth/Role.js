import React from "react";
import logoWhite from "../../src/svg/logoWhite.svg";
import logoBlack from "../../src/svg/logoBlack.svg";
import AvatarAdmin from "../../src/image/Admin.png";
import AvatarUser from "../../src/image/User.png";
import { useNavigate } from "react-router-dom";
import { Button, Button1, SideBarProcess } from "../../components/theme";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const isDataRole = [
  {
    id: 0,
    title: "Admin",
    desc: "Khusus Admin/HRD",
    avatar: AvatarAdmin,
  },
  {
    id: 1,
    title: "User",
    desc: "Khusus Karyawan/Pegawai",
    avatar: AvatarUser,
  },
]

function Start() {
  const navigation = useNavigate();

  const handleSubmit = (role) => {
    if (role === "User") {
      navigation("/tora/user-login", { replace: true });
    } else {
      navigation("/tora/admin-login", { replace: true });
    }
  };

  return (
    <div className="max-w-screen-2xl min-h-screen flex bg-backgroundWeb">
      {/* start body1 */}
      <div className="max-h-full w-[30%] bg-gradient-to-b from-trans2 to-trans3 hidden md:block">
        <div className="w-full mx-12 ">
          {/* logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigation('/')}>
            <ArrowLongLeftIcon className="w-12 h-12 mr-2 " color="white" />
            <img src={logoWhite} className="App-logo h-24 w-24" alt="logo" />
          </div>
          {/* desc */}
          <SideBarProcess
            numberProcess={0}
            title="Hey Clean your place, with ikhlas!!!"
          />
        </div>
      </div>
      {/* end body1 */}
      {/* start body2 */}
      <div className="max-h-full md:w-[66%] ">
        <div className="md:ml-24 ml-6 mr-6 mt-4">
          {/* start nav */}
          <div className="flex justify-between items-center md:mt-12">
            <div className="flex items-center cursor-pointer md:hidden " onClick={() => navigation('/')}>
              <ArrowLongLeftIcon className="w-12 h-12 mr-2" />
              <img src={logoBlack} className="App-logo h-16 w-16" alt="logo" />
            </div>
            <div className="items-center md:block hidden">
              <h1 className="textDesc font-mono text-right">
                “Ingat kebersihan membuahkan kesehatan.”
              </h1>
            </div>
          </div>
          {/* start nav */}
          <div className="md:mt-32 mt-12 md:w-[80%]">
            <h3 className="font-bold md:text-[28px] text-[34px] md:leading-none leading-9">
              Pilih role kamu terlebih dahulu!
            </h3>
            <div className="mt-2 mb-12">
              <span className="md:text-[18px] text-[24px]">
                masuk sesuai dengan status pekerjaan saat ini.
              </span>
            </div>
            {/* card */}
            {isDataRole.map((a, b) => {
              return (
                <div
                  key={b}
                  className="group cursor-default"
                  onClick={() => handleSubmit(a.title)}
                >
                  <div className="mt-8 w-full border-2 rounded-lg border-border border-opacity-20 hover:bg-backgroundUploadImage hover:opacity-100 hover:shadow-md">
                    <div className="p-4 flex items-center">
                      <div className="h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem] rounded-sm bg-cover" style={{
                        backgroundImage:`url(${a?.avatar})`
                      }} />
                      <div className="ml-8">
                        <h1 className=" md:text-[20px] text-[24px] font-bold group-hover:text-white">
                          {a.title}
                        </h1>
                        <span
                          className="md:text-[16px] text-[20px] opacity-40 group-hover:text-white"
                          id="role-text"
                        >
                          {a.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* start button */}
      {/* end body2 */}
    </div>
  );
}

export default Start;
