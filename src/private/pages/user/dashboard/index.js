import React from "react";
import { useData } from "../../../../components/firebase/DataProvider";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../components/firebase/FirebaseProvider";
import {
  DropDown,
  getTimePersonal,
  Header,
  Modal,
} from "../../../../components/theme";
import {
  ArrowLeftIcon,
  ArrowLongLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import SwipeableViews from "react-swipeable-views";
import { Box, Button, MobileStepper, useTheme } from "@mui/material";

const defaultImage =
  "https://img.freepik.com/free-vector/pack-surface-cleaning-products_23-2148534089.jpg?t=st=1658765646~exp=1658766246~hmac=781b8024a1639c455335965922a5182c92a9295d1139b0b6c98a23ef92b06409&w=740";

const defaultImgProfile =
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
function Index() {
  const { cleans } = useData();
  const theme = useTheme();
  const navigation = useNavigate();
  const [showPopUpFilter, setShowPopUpFilter] = React.useState(false);
  const [showModal, setShowModal] = React.useState({
    status: false,
  });
  const [hoverCard, setHoverCard] = React.useState(defaultImage);
  const [newCleanData, setNewCleanData] = React.useState([]);
  const [textFilter, setTextFilter] = React.useState("");
  const [clickFilter, setClickFilter] = React.useState({
    status: "all",
    styling: ["text-blue-500"],
  });

  React.useEffect(() => {
    let today = new Date();

    const myData = [];
    cleans.map((a) => {
      const myDate = new Date(a.created_at.toMillis());
      if (getTimePersonal(myDate) === getTimePersonal(today)) {
        return myData.push(a);
      } else {
        return;
      }
    });
    myData?.map((_, b) => {
      return setHoverCard((dataOld) => ({ ...dataOld, [b]: defaultImage }));
    });
    setNewCleanData(myData);
  }, [cleans]);

  const isFilter = newCleanData?.filter((a) =>
    clickFilter.status === "all" || clickFilter.status === "saved"
      ? a?.data?.[0]?.title?.toLowerCase()?.includes(textFilter?.toLowerCase())
      : a.status === clickFilter.status
  );

  console.log(showModal);
  return (
    <div
      className={`min-h-screen min-w-[120px] max-w-screen-2xl bg-white xl:bg-contain overflow-y-scroll`}
    >
      <div
        className={`xl:px-32 lg:px-32 md:px-32 sm:px-32 smm:px-20 px-6 py-4 ${
          showModal?.status ? "disable-scroll" : ""
        }`}
      >
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
            <div
              className="bg-white-icon py-4 px-5 rounded-lg flex justify-between w-[30rem]
            sm:gw-[30rem] smm:w-[25rem] xss:w-[22rem] 
            "
            >
              <input
                className="bg-white-icon focus:text-gray-700 focus:outline-none ml-10 w-[30rem]
                sm:gw-[30rem] smm:w-[25rem] xss:w-[22rem]
                "
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
            {newCleanData.length > 0 ? (
              isFilter?.map((datas, index) => {
                let extData = datas?.data[1] ? datas?.data[1] : datas?.data[0];
                let newDatas = datas?.data;
                extData.status = datas.status;
                const myImage = hoverCard?.[index];
                const myTitle =
                  extData?.title?.length > 14
                    ? extData?.title.slice(0, 14) + "..."
                    : extData?.title;
                return (
                  <div
                    key={index}
                    onClick={() =>
                      setShowModal({
                        status: true,
                        data: extData,
                        myThumbnail: newDatas,
                      })
                    }
                  >
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
                            <span className="font-Pop font-semibold capitalize text-lg truncate">
                              {myTitle}
                            </span>
                          </div>
                          <div>
                            <span
                              onClick={() =>
                                setShowModal({
                                  status: true,
                                  data: extData,
                                  myThumbnail: newDatas,
                                })
                              }
                              className="text-slate-300 hover:text-pink-400 cursor-pointer"
                            >
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
              })
            ) : (
              <div>
                <div className="py-6 px-4 mb-4 bg-white shadow-md rounded-lg xl:h-[23rem] lg:h-[23rem] md:h-[24rem] smm:h-[24rem] xss:h-[26rem] h-[21rem] xl:w-[18rem] ">
                  <div
                    className={`bg-white rounded-md xl:h-[20rem] lg:h-[20rem] md:h-[21rem] smm:h-[21rem] xss:h-[22rem] h-[18rem] bg-cover duration-200`}
                    style={{
                      backgroundImage: `url(${defaultImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundPositionY: "center",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className={`${
          showModal?.status ? "block" : "hidden"
        } fixed top-0 min-h-screen h-screen w-screen bg-slate-900 bg-opacity-60 overflow-y-scroll `}
      >
        <div
          onClick={() =>
            setShowModal({
              status: false,
              data: {},
            })
          }
          className="absolute top-12 right-12 xs:right-6 cursor-pointer lg:block sm:block smm:block hidden"
        >
          <XMarkIcon className="w-6 h-6" />
        </div>
        <div className="lg:px-[12rem] sm:px-[12rem] smm:px-[10rem] px-[0rem] py-0 lg:py-4 sm:py-4 smm:py-4  justify-center items-center">
          <div className="bg-white lg:min-h-full sm:min-h-full smm:min-h-full min-h-screen">
            <div className="lg:hidden sm:hidden smm:hidden block">
              <div
                className="p-4 border-b-2 flex items-center cursor-pointer"
                onClick={() =>
                  setShowModal({
                    status: false,
                    data: {},
                  })
                }
              >
                <div className="mr-2">
                  <ArrowLongLeftIcon className="h-8 w-8" />
                </div>
                <span className="text-[18px]">Back</span>
              </div>
            </div>
            <SwipeableViews>
              {showModal?.myThumbnail?.map((a, b) => {
                return (
                  <div key={b}>
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={a.thumbnail}
                      alt={a.title}
                    />
                  </div>
                );
              })}
            </SwipeableViews>

            <MobileStepper
              steps={3}
              position="static"
              style={{ justifyContent: "center" }}
              activeStep={0}
              nextButton={
                <div className="lg:block sm:block smm:block hidden">
                  <Button
                    size="small"
                    onClick={() => handleNext()}
                    // disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <ArrowLeftIcon className="w-6 h-6" />
                    ) : (
                      <ArrowRightIcon className="w-6 h-6" />
                    )}
                  </Button>
                </div>
              }
              backButton={
                <div className="lg:block sm:block smm:block hidden">
                  <Button
                    size="small"
                    onClick={() => handleBack()}
                    // disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <ArrowRightIcon className="w-6 h-6" />
                    ) : (
                      <ArrowLeftIcon className="w-6 h-6" />
                    )}
                    Back
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
