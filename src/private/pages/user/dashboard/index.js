import React from "react";
import { useData } from "../../../../components/firebase/DataProvider";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../components/firebase/FirebaseProvider";
import { Button } from "../../../../components/theme";

function Index() {
  const { users, cleans } = useData();
  const navigation = useNavigate();
  return (
    <div className="max-w-screen-2xl min-h-screen bg-backgroundWeb bg-opacity-30">
      <div className="w-full px-12 pt-12 pb-12 xs:px-4 xss:px-2">
        <div className="flex xs:block justify-between items-center">
          <div className="flex items-center mb-4">
            <span className="textJudul font-bold font-mono">
              Hallo {users?.username}&nbsp;&nbsp;
            </span>
            <span className="text-[20px] font-bold bg-pink-300 p-2 rounded-tr-xl rounded-bl-xl">
              80
            </span>
          </div>
          <div className="flex xs:block items-center">
            <div className="mr-4 xs:mr-0">
              <Button
                label={"Keluar"}
                mode="outline"
                onPress={() => {
                  auth.signOut();
                  navigation("/");
                }}
              />
            </div>
            <div className="mr-0">
              <Button
                label={"Mulai bersih-bersih"}
                onPress={() => navigation("/tora/user/start")}
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 pt-4">
          <span className="lg:text-[20px] md:text-[18px] text-[16px]">
            Kamu bisa melihat status data yang telah kamu upload sebelumnya dan
            juga melihat seluruh gambar ruangan yang telah kamu bersihkan.
          </span>
        </div>
        <div className="bg-c0 w-full mt-20 py-4 pl-6">
          <span className="font-bold lg:text-[20px] md:text-[18px] text-[24px]">
            Gambar Anda
          </span>
        </div>
        <div className="w-full pt-12 pb-12 xs:px-0 xss:px-0 cursor-pointer">
          {/* pending */}
          <>
            <div className="flex justify-between items-center xss:block">
              <span className="font-semibold lg:text-[20px] md:text-[18px] text-[22px]  ">
                Pending
              </span>
              <div className="xs:my-4 py-2 px-4 justify-center items-center flex cursor-default border-2 border-trans1 border-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <select className="ml-2 appearance-none text-[16px] bg-transparent focus:ring-opacity-0 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50">
                  <option className="font-bold" value={""}>
                    Hari Ini ygy
                  </option>
                  {[
                    { no: 0, name: "Senin" },
                    { no: 1, name: "Selesa" },
                    { no: 3, name: "Rabu" },
                    { no: 4, name: "Kamis" },
                    { no: 5, name: "Jum'at" },
                    { no: 5, name: "Sabtu" },
                  ].map((data, index) => {
                    return (
                      <option key={index} value={data.name}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex flex-col m-auto p-auto">
              <div className="flex snap-x overflow-x-scroll py-10 hide-scroll-bar">
                <div className="flex snap-start flex-nowrap">
                  {cleans
                    ?.filter((a) => a.status === "pending")
                    .map((datas, index) => {
                      return datas?.data?.map((a, b) => {
                        return (
                          <div key={b} className="inline-block px-3">
                            <div
                              style={{
                                backgroundImage: `url(${a?.thumbnail})`,
                                backgroundPosition: "center",
                                backgroundAttachment: "inherit",
                                backgroundSize: "cover",
                                backgroundRepeat: "repeat",
                              }}
                              className="w-[22rem] h-[20rem] smm:w-[15rem] smm:h-[15rem] xs:w-[18rem] xs:h-[18rem] xss:w-[17rem] xss:h-[18rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-opacity-30 hover:shadow-xl transition-shadow duration-300 ease-in-out items-center justify-center flex"
                            >
                              {!a?.thumbnail && (
                                <>
                                  <div className="flex">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-24 stroke-1 items-center justify-center"
                                      fill="none"
                                      color="#252525"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                </>
                              )}
                            </div>
                            <h4 className="text-[16px] mt-6 font-bold uppercase">
                              {a.title}
                            </h4>
                          </div>
                        );
                      });
                    })}
                </div>
              </div>
            </div>
          </>
          {/* approved */}
          <>
            <div className="flex justify-between items-center xss:block mt-12">
              <span className="font-semibold lg:text-[20px] md:text-[18px] text-[22px]  ">
                Approved
              </span>
              <div className="xs:my-4 py-2 px-4 justify-center items-center flex cursor-default border-2 border-trans1 border-opacity-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 stroke-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
                <select className="ml-2 appearance-none text-[18px] bg-transparent focus:ring-opacity-0 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50">
                  <option className="font-bold" value={""}>
                    Hari Ini ygy
                  </option>
                  {[
                    { no: 0, name: "Senin" },
                    { no: 1, name: "Selesa" },
                    { no: 3, name: "Rabu" },
                    { no: 4, name: "Kamis" },
                    { no: 5, name: "Jum'at" },
                    { no: 5, name: "Sabtu" },
                  ].map((data, index) => {
                    return (
                      <option key={index} value={data.name}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex flex-col m-auto p-auto">
              <div className="flex snap-x overflow-x-scroll py-10 hide-scroll-bar">
                <div className="flex snap-start flex-nowrap ">
                  {cleans
                    ?.filter((a) => a.status === "approved")
                    .map((datas, index) => {
                      return datas?.data?.map((a, b) => {
                        return (
                          <div key={b} className="inline-block px-3">
                            <div
                              style={{
                                backgroundImage: `url(${a?.thumbnail})`,
                                backgroundPosition: "center",
                                backgroundAttachment: "inherit",
                                backgroundSize: "cover",
                                backgroundRepeat: "repeat",
                              }}
                              className="w-[22rem] h-[20rem] smm:w-[15rem] smm:h-[15rem] xs:w-[18rem] xs:h-[18rem] xss:w-[17rem] xss:h-[18rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-opacity-30 hover:shadow-xl transition-shadow duration-300 ease-in-out items-center justify-center flex"
                            >
                              {!a?.thumbnail && (
                                <>
                                  <div className="flex">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-24 stroke-1 items-center justify-center"
                                      fill="none"
                                      color="#252525"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                </>
                              )}
                            </div>
                            <h4 className="text-[16px] mt-6 font-bold uppercase">
                              {a.title}
                            </h4>
                          </div>
                        );
                      });
                    })}
                </div>
              </div>
            </div>
          </>
        </div>
        {/* semua gambar */}
        <div className="bg-c0 w-full mt-4 py-4 pl-6">
          <span className="font-bold lg:text-[20px] md:text-[18px] text-[24px]">
            Semua Gambar
          </span>
        </div>
        <div className="w-full pt-12 pb-12 xs:px-0 xss:px-0">
          <>
            <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-5 smm:grid-cols-4 xs:grid-cols-3 xss:grid-cols-2">
              {cleans?.map((datas, index) => {
                return datas.data?.map((a, i) => {
                  return (
                    <div
                      key={i}
                      className="xl:mb-12 mb-4 items-center md:block lg:block"
                    >
                      <div className={"block justify-center w-auto"}>
                        <div
                          style={{
                            backgroundImage: `url(${a?.thumbnail})`,
                            backgroundPosition: "center",
                            backgroundAttachment: "inherit",
                            backgroundSize: "cover",
                            backgroundRepeat: "repeat",
                          }}
                          className="flex h-[12rem] w-[12rem] xl:h-[16rem] xl:w-[16rem] smm:w-[10rem] smm:h-[10rem] xs:w-[9rem] xs:h-[9rem] xss:w-[8rem] xss:h-[8rem] bg-opacity-30 items-center justify-center bg-cover"
                        >
                          {!a?.thumbnail && (
                            <>
                              <div className="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-12 w-24 stroke-1 items-center justify-center"
                                  fill="none"
                                  color="#252525"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </>
                          )}
                        </div>
                        <label className="lg:text-[18px] md:text-[16px] text-[14px] font-sans text-slate-600">
                          {a.title}
                        </label>
                      </div>
                    </div>
                  );
                });
              })}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Index;
