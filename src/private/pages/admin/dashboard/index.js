import React from "react";
import { auth } from "../../../../components/firebase/FirebaseProvider";
import { useNavigate } from "react-router-dom";
import logo from "../../../../src/svg/logoWhite.svg";
import Beranda from "./fitur/Beranda";
import ListKebersihan from "./fitur/ListKebersihan";
import Nilai from "./fitur/Nilai";
import Settings from "./fitur/Settings";
import Modal from "../components/Modal";
import ListData from "./fitur/ListData";

const listMenu = [
  {
    no: 1,
    nama: "Beranda",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    no: 2,
    nama: "List Kebersihan",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    no: 3,
    nama: "Nilai User",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },

  {
    no: 4,
    nama: "Data",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    svgLT: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    ),
    svgLB: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M5 15l7-7 7 7"
        />
      </svg>
    ),
  },
  {
    no: 5,
    nama: "List Admin",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    no: 6,
    nama: "List User",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    no: 7,
    nama: "Settings",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    no: 8,
    nama: "Keluar",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 stroke-2"
        color="white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
  },
];

export default function index() {
  const navigation = useNavigate();
  const [validasiMenu, setValidasiMenu] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const [showMenu, setShowMenu] = React.useState(true);
  const [modal, setModal] = React.useState({
    status: false,
    mode: "",
  });
  const [menuActive, setMenuActive] = React.useState({
    no: 1,
  });

  const handleNavPosision = () => {
    setOpen(!open);
  };
  return (
    <div className="flex max-w-screen-2xl">
      <div className="fixed">
        <div
          className={`${open ? "w-[20rem]" : "w-[7rem]"
            } min-h-screen h-screen bg-gradient-to-t from-trans1 to-trans3 relative duration-300  overflow-y-scroll hide-scroll-bar min-block`}
        >
          <div className="flex justify-between items-center  mb-[10rem] pt-12 px-8">
            <div
              className={`${open ? "absolute p-4" : "block pl-2"
                } right-0 bg-none rounded-tl-xl rounded-bl-xl cursor-pointer duration-300`}
              onClick={handleNavPosision}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  color="white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  color="white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
            <div>
              <img
                src={logo}
                className={`App-logo ${open ? "h-26 w-26" : "h-20 w-20 hidden"
                  }`}
                alt="logo"
              />
            </div>
          </div>
          <div className="gap-x-4 pb-14">
            {listMenu.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`${showMenu
                    ? data.no === 5 || data.no === 6
                      ? "hidden"
                      : ""
                    : ""
                    }`}
                >
                  {data.no === 5 || data.no === 6 ? (
                    open ? (
                      <div
                        className={`${data.no === 8
                          ? "lg:fixed  bottom-0 hover:bg-opacity-0"
                          : "hover:bg-opacity-5"
                          } flex items-center pl-14 cursor-pointer hover:bg-white`}
                        onClick={() => {
                          setMenuActive({
                            data: data,
                            asalMenu: data.no,
                            no: 4,
                            alongMenu: data.no,
                          });
                        }}
                      >
                        <ul className="flex flex-col pl-2 border-l border-white py-6">
                          <li className="pl-10">
                            <a
                              className={`text-white ${menuActive?.asalMenu === data.no
                                ? "opacity-100"
                                : "opacity-50"
                                } text-[18px]`}
                            >
                              {data.nama}
                            </a>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div
                        className={`${data.no === 8
                          ? "lg:fixed  bottom-0 hover:bg-opacity-0"
                          : "hover:bg-opacity-5"
                          } flex items-center py-4 cursor-pointer hover:bg-white`}
                        onClick={() => {
                          setMenuActive({
                            data: data,
                            asalMenu: data.no,
                            no: 4,
                          });
                        }}
                      >
                        <div
                          className={`${data.no === menuActive?.no ? "" : "opacity-0"
                            } h-12 bg-white w-1.5 rounded-md mr-8`}
                        />
                        {data.svg}
                        <div
                          className={`${open ? "block" : "hidden"
                            } duration-200 ml-8`}
                        >
                          <h1 className="text-white text-[18px]">
                            {data.nama}
                          </h1>
                        </div>
                      </div>
                    )
                  ) : (
                    <div
                      className={`hover:bg-opacity-5 first-letter:flex items-center py-4 cursor-pointer hover:bg-white`}
                      onClick={() => {
                        setMenuActive({ data: data, no: data.no });
                        if (data.no === 4) {
                          setMenuActive({
                            data: data,
                            no: menuActive.no,
                            asalMenu: menuActive.alongMenu
                              ? menuActive.alongMenu
                              : menuActive.asalMenu
                                ? menuActive.asalMenu
                                : menuActive.no,
                          });
                          setShowMenu(!showMenu);
                        } else {
                          setShowMenu(true);
                        }
                        if (data.no === 8) {
                          auth.signOut();
                          navigation("/", { replace: true });
                        }
                      }}
                    >
                      <div className="flex-row flex justify-between items-center w-full">
                        <div className="flex flex-row items-center">
                          <div
                            className={`${data.no === menuActive?.no ? "" : "opacity-0"
                              } h-12 bg-white w-1.5 rounded-md mr-8`}
                          />
                          {data.svg}
                          <div
                            className={`${open ? "block" : "hidden"
                              } duration-200 ml-8`}
                          >
                            <h1 className="text-white text-[18px]">
                              {data.nama}
                            </h1>
                          </div>
                        </div>
                        {open && (
                          <>
                            <div className="mr-4">
                              {showMenu ? data.svgLT : data.svgLB}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`pt-12 min-h-screen ${!open ? "ml-[10rem] w-[82vw]" : "ml-[22rem] w-[72vw]"
          } duration-200`}
      >
        {menuActive?.no === 1 ? (
          <Beranda open={open} />
        ) : menuActive?.no === 2 ? (
          <ListKebersihan />
        ) : menuActive?.no === 3 ? (
          <Nilai />
        ) : // membuat validasi childMenu karena menu ke 4 adalah parent
          menuActive?.no === 4 ? (
            menuActive?.alongMenu === 1 ? (
              <Beranda open={open} />
            ) : menuActive?.alongMenu === 2 ? (
              <ListKebersihan />
            ) : menuActive?.alongMenu === 3 ? (
              <Nilai />
            ) : menuActive?.asalMenu === 5 ? (
              <ListData mode="admin" />
            ) : menuActive?.asalMenu === 6 ? (
              <ListData mode="user" />
            ) : (
              <Settings modal={modal} setModal={setModal} />
            )
          ) : menuActive?.asalMenu === 5 ? (
            <ListData mode="admin" />
          ) : menuActive?.asalMenu === 6 ? (
            <ListData mode="user" />
          ) : (
            <Settings modal={modal} setModal={setModal} />
          )}
      </div>
      {/* modal */}
      {modal?.status ? <Modal modal={modal} setModal={setModal} /> : null}
    </div>
  );
}
