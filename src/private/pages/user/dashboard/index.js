import React from "react";
import { useData } from "../../../../components/firebase/DataProvider";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../components/firebase/FirebaseProvider";
import { DropDown, Header, Modal } from "../../../../components/theme";

const defaultImage =
  "https://img.freepik.com/free-vector/pack-surface-cleaning-products_23-2148534089.jpg?t=st=1658765646~exp=1658766246~hmac=781b8024a1639c455335965922a5182c92a9295d1139b0b6c98a23ef92b06409&w=740";

const defaultImgProfile =
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
function Index() {
  const { cleans } = useData();
  const navigation = useNavigate();
  const [showPopUpFilter, setShowPopUpFilter] = React.useState(false);
  const [showModal, setShowModal] = React.useState({
    status:false
  });
  const [hoverCard, setHoverCard] = React.useState(defaultImage);
  const [textFilter, setTextFilter] = React.useState("");
  const [clickFilter, setClickFilter] = React.useState({
    status: "all",
    styling: ["text-blue-500"],
  });

  React.useEffect(() => {
    cleans?.map((_, b) => {
      return setHoverCard((dataOld) => ({ ...dataOld, [b]: defaultImage }));
    });
  }, []);

  const isFilter = cleans?.filter((a) =>
    clickFilter.status === "all" || clickFilter.status === "saved"
      ? a?.data?.[0]?.title?.toLowerCase()?.includes(textFilter?.toLowerCase())
      : a.status === clickFilter.status
  );

  return (
    <div className={`min-h-screen min-w-[120px] max-w-screen-2xl bg-white xl:bg-contain overflow-y-scroll`}>
      <div className={`xl:px-32 lg:px-32 md:px-32 sm:px-32 smm:px-20 px-6 py-4 ${showModal?.status ? 'disable-scroll' : ''}`}>
        <Header
          labels={["Start Clean", "Logout"]}
          actions={[
            () => navigation("/tora/user/start"),
            () => {
              auth.signOut();
              navigation("/", { replace: true });
            },
          ]}
        />
        <div
          style={{
            marginTop: 24,
            marginBottom: 24,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="mb-4">
            <span className="textJudul font-Pop" style={{ lineHeight: 1.4 }}>
              Pahlawan kebersihan pastinya <br className="xl:hidden" /> strong,
              kuat dong!
            </span>
          </div>
          <div>
            <span
              className="textDesc text-[1.4rem]"
              style={{ lineHeight: 1.3 }}
            >
              Kerjakan dengan rasa cinta yang mendalam <br /> dan juga hati yang
              ikhlas okee 😊.
            </span>
          </div>
        </div>

        <div className="mt-6 items-center justify-center flex">
          <div className="flex cursor-pointer">
            <div className="bg-white-icon py-4 px-5 rounded-lg flex justify-between w-[30rem]">
              <input
                className="bg-white-icon focus:text-gray-700 focus:outline-none ml-10 w-[30rem]"
                placeholder="Cari nama ruangan"
                onChange={(text) => setTextFilter(text.target.value)}
              />
            </div>
            <div className="absolute py-4 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-5">
          <div className="flex justify-between items-center xl:py-4">
            <div className="xss:hidden">
              <span
                className={`xl:text-[16px] lg:text-[16px] text-[14px] font-semibold mr-4 cursor-pointer ${
                  clickFilter.status === "pending" ? clickFilter.styling : ""
                }`}
                onClick={() =>
                  setClickFilter({
                    status: "pending",
                    styling: ["text-blue-500"],
                  })
                }
              >
                Diproses
              </span>
              <span
                className={`xl:text-[16px] lg:text-[16px] text-[14px] font-semibold mr-4 cursor-pointer ${
                  clickFilter.status === "approved" ? clickFilter.styling : ""
                }`}
                onClick={() =>
                  setClickFilter({
                    status: "approved",
                    styling: ["text-blue-500"],
                  })
                }
              >
                Disetujui
              </span>
              <span className="xl:text-[16px] lg:text-[16px] text-[14px] font-semibold mr-4">
                |
              </span>
              <span
                className={`xl:text-[16px] lg:text-[16px] text-[14px] font-semibold mr-4 cursor-pointer ${
                  clickFilter.status === "all" ? clickFilter.styling : ""
                }`}
                onClick={() =>
                  setClickFilter({
                    status: "all",
                    styling: ["text-blue-500"],
                  })
                }
              >
                Semua
              </span>
              <span className="xl:text-[16px] lg:text-[16px] text-[14px] font-semibold mr-4 cursor-pointer text-red-500">
                Ditolak
              </span>
            </div>
            <div className="xss:block hidden">
              <span
                className={`xl:text-[16px] lg:text-[16px] text-[14px] font-semibold mr-4 cursor-pointer ${
                  clickFilter.status === "pending" ? clickFilter.styling : ""
                }`}
                onClick={() =>
                  setClickFilter({
                    status: "pending",
                    styling: ["text-blue-500"],
                  })
                }
              >
                120 bukti ditemukan
              </span>
            </div>
            <div className="flex">
              <div
                className="cursor-pointer"
                onClick={() => setShowPopUpFilter(!showPopUpFilter)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div style={{ position: "absolute" }}>
                <DropDown
                  isShow={showPopUpFilter}
                  list={[
                    { title: "Terbaru" },
                    { title: "Nilai Tertinggi" },
                    { title: "Nilai Terendah" },
                  ]}
                />
              </div>
              <svg
                onClick={() =>
                  setClickFilter({
                    status: clickFilter?.status === "saved" ? "all" : "saved",
                    styling: ["text-blue-500"],
                  })
                }
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer border-gray-400"
                fill={clickFilter?.status === "saved" ? "black" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 smm:grid-cols-2 xss:grid-cols-1 grid-cols-2">
            {isFilter?.map((datas, index) => {
              const extData = datas?.data[0];
              const myImage = hoverCard?.[index];
              return (
                <div key={index} onClick={() => setShowModal({status:true, data:extData})}>
                  {/* <h1>{datas?.id}</h1> */}
                  <div>
                    <div className="py-6 px-4 mb-4 bg-white shadow-md rounded-lg xl:h-[23rem] lg:h-[23rem] md:h-[24rem] smm:h-[24rem] xss:h-[26rem] h-[21rem] xl:w-[18rem] ">
                      <div
                        id={index}
                        onMouseEnter={(e) => {
                          if (Number(e.target?.id) === index) {
                            setHoverCard((dataOld) => ({
                              ...dataOld,
                              [index]: extData?.thumbnail,
                            }));
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (Number(e.target?.id) === index) {
                            setHoverCard((dataOld) => ({
                              ...dataOld,
                              [index]: defaultImage,
                            }));
                          }
                        }}
                        className={`bg-white rounded-md xl:h-[15rem] lg:h-[15rem] md:h-[16rem] smm:h-[15rem] xss:h-[17rem] h-[12.5rem] bg-cover duration-200`}
                        style={{
                          backgroundImage: `url(${myImage})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundPositionY: "center",
                        }}
                      />
                      <div className="text-center">
                        <div className="py-4">
                          <span className="font-Pop font-semibold capitalize text-lg">
                            {extData?.title}
                          </span>
                        </div>
                        <div>
                          <span onClick={() => setShowModal({status:true, data:extData})} className="text-slate-300 hover:text-pink-400 cursor-pointer">
                            Detail
                          </span>
                          <span className="text-slate-300"> | </span>
                          <span className="text-slate-300 hover:text-green-400 cursor-pointer">
                            Download Image
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* modal */}
      <div className={`${showModal?.status ? 'block' : 'hidden'} fixed top-0 min-h-screen h-screen w-screen bg-slate-900 bg-opacity-60 overflow-y-scroll `}>
        <div onClick={() => setShowModal({
          status:false,
          data:{}
        })} className="absolute top-12 right-12 xs:right-6 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 xss:bg-slate-500 rounded-full"
            color="white"
            strokeWidth={2}
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="px-[16rem] sm:px-[12rem] smm:px-[10rem] xs:px-[3rem] xss:px-[2rem] py-4  justify-center items-center">
          <div className="bg-white">
            <div className="flex flex-row justify-center items-center">
              <div className="xl:w-[50%] flex justify-center smm:hidden xs:hidden xss:hidden">
                <img
                  src={showModal?.data?.thumbnail}
                  alt="hello img"
                  className="h-[100%] bg-cover"
                />
              </div>
              <div className="border-l-[1px] xl:w-[50%] w-[100%] border-slate-200">
                <div className="px-6 flex-row flex items-center justify-between my-4">
                  <div className="flex-row flex items-center">
                    <div
                      className="w-12 h-12 rounded-full mr-6 bg-cover"
                      style={{
                        backgroundImage: `url(${defaultImgProfile})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundPositionY: "center",
                      }}
                    />
                    <div className="xss:w-[60%] xss:truncate">
                      <span className="text-[16px] font-semibold">HRD Tokorame (John Do) </span>
                    </div>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-8 h-8 xss:hidden"
                      strokeWidth={2}
                    >
                      <path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                  </div>
                </div>
                <div className="border-b-[1px] h-1 w-full border-slate-200" />
                <div className="overflow-hidden h-[70vh] overflow-y-scroll">
                  <div className="w-full items-center justify-center hidden smm:flex xs:flex xss:flex">
                  <img
                    src={showModal?.data?.thumbnail}
                    alt="hello img"
                    className="h-[100%] bg-cover"
                  />
                  </div>
                  <div className="px-6 my-4 flex-row flex mt-6">
                    <div className="w-18">
                      <div
                        className="w-12 h-12 rounded-full mr-6"
                        style={{
                          backgroundImage: `url(${defaultImgProfile})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <div className="mt-2">
                      <span className="text-[14px] font-semibold">
                      HRD Tokorame (John Do) {""}
                      </span>
                      <span className="text-[14px]">
                        Sejarah mencatat, tidak sedikit ulama dari kalangan
                        wanita. Ini sebuah pesan, Allah bisa membukakan pintu
                        kepada para wanita <br /><br /> untuk bermain di level yang
                        lebih tinggi; memberikan manfaat besar kepada umat.{" "}
                        <br />
                        <br /> Tiada sulit bagi Allah untuk memberikan kita
                        kesempatan menjadi bermanfaat bagi keluarga kita, rumah
                        tangga kita, dan seterusnya.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] h-1 w-full border-slate-200" />
                <div className="px-6 my-4">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row items-center">
                      {[1, 2, 3, 4, 5].map((a, b) => {
                        return (
                          <div key={b}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill={b < 4 ? "yellow" : 'none'}
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-8 h-8"
                              color={b < 4 ? "yellow" : 'none'}
                            >
                              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 cursor-pointer border-gray-400"
                        fill={"none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="my-4">
                    <div>
                      <span className="text-[13px] font-bold">Good Job</span><br/>
                    </div>
                    <div className="my-[1px]">
                      <span className="text-[10px] uppercase text-slate-400">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
