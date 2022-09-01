import React from "react";
import { useData } from "../../../../components/firebase/DataProvider";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../components/firebase/FirebaseProvider";
import { Button, Header } from "../../../../components/theme";
import { useState } from "react";

const defaultImage =
  "https://img.freepik.com/free-vector/pack-surface-cleaning-products_23-2148534089.jpg?t=st=1658765646~exp=1658766246~hmac=781b8024a1639c455335965922a5182c92a9295d1139b0b6c98a23ef92b06409&w=740";

function Index() {
  const { users, cleans } = useData();
  const navigation = useNavigate();
  const [hoverCard, setHoverCard] = useState(defaultImage);
  const [clickFilter, setClickFilter] = useState({
    status: "all",
    styling: ["text-blue-500"],
  });

  return (
    <div className="min-h-screen min-w-[120px] max-w-screen-2xl bg-white  xl:bg-contain">
      <div className="xl:px-32 px-4 py-4">
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
            marginTop:24,
            marginBottom:24,
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center"
          }}
        >
          <div className="mb-4">
            <span className="textJudul font-Pop" style={{lineHeight:1.4}}>
              your job is very hard you must <br className="xl:hidden"/> strong hhe!
            </span>
          </div>
          <div>
            <span className="textDesc text-[1.4rem]" style={{lineHeight:1.3}}>
              Design a great experience for your users on the web <br/> and mobile
              platforms with Masud. Feel free to
            </span>
          </div>
        </div>

        <div
          className="text-center mt-6 flex items-center justify-center cursor-pointer"
          style={{
            textAlign: "-webkit-center",
          }}
        >
          <div className="bg-white-icon py-4 px-5 rounded-lg flex justify-between w-[32rem] items-center">
            <span className="textDesc text-slate-700 font-Pop">Search your work</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="mt-4 mb-5">
          <div className="flex justify-between items-center py-4">
            <div>
              <span
                className={`text-[16px] font-semibold mr-4 cursor-pointer ${clickFilter.status === "pending" ? clickFilter.styling : ""
                  }`}
                onClick={() =>
                  setClickFilter({
                    status: "pending",
                    styling: ["text-blue-500"],
                  })
                }
              >
                Pending
              </span>
              <span
                className={`text-[16px] font-semibold mr-4 cursor-pointer ${clickFilter.status === "approved" ? clickFilter.styling : ""
                  }`}
                onClick={() =>
                  setClickFilter({
                    status: "approved",
                    styling: ["text-blue-500"],
                  })
                }
              >
                Approved
              </span>
              <span className="text-[16px] font-semibold mr-4">|</span>
              <span
                className={`text-[16px] font-semibold mr-4 cursor-pointer ${clickFilter.status === "all" ? clickFilter.styling : ""
                  }`}
                onClick={() =>
                  setClickFilter({
                    status: "all",
                    styling: ["text-blue-500"],
                  })
                }
              >
                All
              </span>
              <span className="text-[16px] font-semibold mr-4 cursor-pointer text-red-500">
                Rejected
              </span>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
          </div>
        </div>

        <div >
          <div className="flex-wrap flex items-center justify-center">
            {cleans
              ?.filter((a) =>
                clickFilter.status === "all"
                  ? a
                  : a.status === clickFilter.status
              )
              .map((datas, index) => {
                const extData = datas?.data[0];
                return (
                  <div key={index} className="mr-5">
                    {/* <h1>{datas?.id}</h1> */}
                    <div>
                      <div className="py-6 px-4 mb-4 bg-white shadow-md rounded-lg xl:w-[18rem] md:w-[13rem] smm:w-[12.5rem] w-[12.7rem] h-[21rem]">
                        <div
                          id={index}
                          onMouseEnter={(e) => {
                            if (Number(e.target?.id) === index) {
                              setHoverCard({ [index]: extData?.thumbnail });
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (Number(e.target?.id) === index) {
                              setHoverCard({ [index]: defaultImage });
                            }
                          }}
                          className={`bg-white rounded-md h-[12rem] bg-cover duration-200`}
                          style={{
                            backgroundImage: `url(${hoverCard[index] ? hoverCard[index] : defaultImage
                              })`,
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
                            <span className="text-slate-300 hover:text-pink-400 cursor-pointer">
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
    </div>
  );
}

export default Index;
