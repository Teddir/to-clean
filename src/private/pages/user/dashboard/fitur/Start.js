import React, { useEffect, useState } from "react";
import logo from "../../../../../src/svg/logoBlack.svg";
import { useNavigate } from "react-router-dom";
import { Button, SideBarProcess } from "../../../../../components/theme";
import {
  FieldValue,
  storage,
} from "../../../../../components/firebase/FirebaseProvider";
import {
  cleansCollection,
  useData,
} from "../../../../../components/firebase/DataProvider";
import resizeImage from "../../../../../utils/resizeImage";
import { BrowserView, MobileView } from "react-device-detect";

function UiWeb({}) {
  const navigation = useNavigate();
  return (
    <div className="min-w-max min-h-screen flex bg-backgroundWeb justify-center items-center">
      <div className="bg-white border-2 rounded-md shadow-inner p-[24px]">
        <img
          src="https://img.freepik.com/free-vector/throw-down-concept-illustration_114360-4160.jpg?w=740&t=st=1663342924~exp=1663343524~hmac=a7c80fb05391a07c7a52ab60af99edc89512016b5872c69f9a27b5b386f401ad"
          alt="image"
          className="w-[25rem]"
        />
        <div className="text-center my-6">
          <h1>
            Maaf proses pekerjaan tidak bisa melalui laptop/monitor <br />{" "}
            silahkan akses via seluler
          </h1>
        </div>
        <div>
          <Button
            label={"Ok! saya mengerti"}
            onPress={() => navigation("/tora")}
          />
        </div>
      </div>
    </div>
  );
}

function Start() {
  const navigation = useNavigate();
  const { users } = useData();
  const [listCardImage, setListCardImage] = useState([]);
  const [loadSubmit, setLoadSubmit] = useState(false);

  const handleAddListCard = () => {
    const newCard = [
      {
        id: listCardImage?.length,
        nama: "",
      },
    ];
    setListCardImage((data) => data.concat(newCard));
    // console.log(listCardImage);
  };

  const handleDeleteListCard = (cardId) => {
    setListCardImage((data) => {
      return data.filter((a) => a.id !== cardId);
    });
  };

  const handleChange = (prop) => (event) => {
    setListCardImage((datas) => {
      const kamu = datas.map((a, i) => {
        if (a?.id === prop?.id) {
          a.nama = event.target.value;
        }
        return a;
      });
      return kamu;
    });
  };

  const handleCapture = (prop) => (event) => {
    const files = event.target.files;
    if (files) {
      if (files.length !== 0) {
        const file = files[0];
        if (file.size >= 2000000) {
          return alert(`file anda ${file.size} terlalu besar > 2MB`);
        }
        const newUrl = URL.createObjectURL(file);
        setListCardImage((datas) => {
          const kamu = datas.map((a, i) => {
            if (a?.id === prop?.id) {
              a.url = newUrl;
              a.typeImage = file.name.substring(file.name.lastIndexOf("."));
              a.file = file;
            }
            return a;
          });
          return kamu;
        });
      }
    }
  };

  const handleSubmit = async () => {
    setLoadSubmit(true);
    if (listCardImage.length <= 0) {
      alert("silahkan lengkapi data terlebih dahulu");
      setLoadSubmit(false);
      return;
    }
    try {
      const imageUserStorage = storage.ref("users");
      const newData = [];
      Promise.all(
        listCardImage.map(async (a) => {
          if (!a.url) {
            return true;
          } else {
            const downloadImage = imageUserStorage
              .child(`/clean/${users?.id}/${a?.nama}${a?.typeImage}`)
              .put(a.file)
              .then(async (data) => {
                var progress = (data.bytesTransferred / data.totalBytes) * 100;
                // console.log(progress);
                if (progress === 100) {
                  // console.log('File available at', data.ref.getMetadata);
                  const getUrl = await data.ref
                    .getDownloadURL()
                    .then((datas) => {
                      const getThumbnailResize = imageUserStorage.child(
                        `/clean/${users?.id}/${a?.nama}_500x500${a?.typeImage}`
                      );
                      const isThumbnail = resizeImage(10, getThumbnailResize)
                        .then((url) => {
                          newData.push({
                            title: a.nama,
                            thumbnail: url,
                          });
                        })
                        .catch((e) =>
                          console.log("error download resize image", e.message)
                        );
                      return isThumbnail;
                    })
                    .catch((e) =>
                      console.log("error get Url image", e.message)
                    );
                  return getUrl;
                } else {
                  return true;
                }
              })
              .catch((e) => console.log("error download image", e.message));
            return downloadImage;
          }
        })
      ).then(async (dat) => {
        if (dat.find((a) => a === true)) {
          alert("Mohon maaf terdapat data yang tidak lengkap");
          setLoadSubmit(false);
          return;
        } else {
          const datas = {
            data: newData,
            status: "pending",
            created_at: FieldValue.serverTimestamp(),
            username: users?.username,
            department: users?.department,
            role: users?.role,
            id: users?.id,
          };
          const response = await cleansCollection.add(datas);
          navigation(`/tora`);
          setLoadSubmit(false);
        }
      });
    } catch (error) {
      setLoadSubmit(false);
      console.log(error.message);
    }
  };

  return (
    <>
      <BrowserView>
        <UiWeb />
      </BrowserView>
      <MobileView>
        <div className="max-h-full min-h-screen max-w-full flex bg-backgroundWeb">
          {/* start body1 */}
          <div className="max-h-full w-[34%] bg-gradient-to-b from-trans2 to-trans3 hidden md:block">
            <div className="w-full mx-12 pb-12">
              {/* logo */}
              <div className="flex justify-between items-center">
                <img src={logo} className="App-logo h-24 w-24" alt="logo" />
              </div>
              {/* desc */}
              <SideBarProcess numberProcess={2} />
            </div>
          </div>
          {/* end body1 */}
          {/* start body2 */}
          <div className="max-h-full">
            <div className="xl:ml-32 mx-8 pb-12">
              {/* start nav */}
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-xl md:opacity-0 lg:opacity-0">
                  <img
                    src={logo}
                    className="App-logo h-16 w-16 xl:h-24 xl:w-24"
                    alt="logo"
                  />
                </div>
                <div className="items-center w-[60%]">
                  <h1 className="textDesc font-mono text-right">
                    “Ingat kebersihan membuahkan kesehatan.”
                  </h1>
                </div>
              </div>
              {/* end nav */}
              {/* start body */}
              <div className="xl:w-[90%] mt-16 xl:mt-18 block">
                <div className="block md:hidden">
                  <div className="flex">
                    <div className="w-[6rem] h-[12px] bg-trans1 border-[1px] border-border opacity-60" />
                    <div className="w-[6rem] h-[12px] bg-trans1 border-[1px] border-border opacity-60" />
                    <div className="w-[6rem] h-[12px] border-[1px] border-border opacity-40" />
                  </div>
                </div>
                <div className="pt-8 md:pt-0">
                  <span className="textJudul">Lengkapi data dengan benar.</span>
                </div>
                <div className="mt-2 lg:w-[70%]">
                  <span className="textDesc">
                    upload image / lokasi kamu ketika bekerja sesuai dengan
                    posisi letak yang telah kamu bersihkan.
                  </span>
                </div>
                {/* upload image */}
                <div className="justify-between sm:block md:flex lg:flex mt-6">
                  <div className="w-full xl:grid grid-cols-2">
                    {listCardImage?.map((data, index) => {
                      const hiddenIcon = [data?.url ? "opacity-0" : "flex"];
                      // console.log(hiddenIcon);
                      const fetchedUrl = data?.url;
                      return (
                        <div
                          key={index}
                          className="xl:pr-12 items-center md:block lg:block "
                        >
                          <div className="block justify-center pt-6">
                            <div className="flex-row flex w-full">
                              <div className="mr-4 w-[30%]">
                                <div
                                  style={{
                                    backgroundImage: `url(${fetchedUrl})`,
                                    backgroundPosition: "center",
                                    backgroundAttachment: "inherit",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "repeat",
                                  }}
                                  className={`${
                                    !fetchedUrl
                                      ? "border-border"
                                      : "border-c0 shadow-md"
                                  } flex flex-col h-[6rem] w-[6rem] mb-4 border-2 border-opacity-30 rounded-md items-center justify-center z-10`}
                                >
                                  {/* <img alt="haha" src={fetchedUrl} /> */}
                                  <div className={`${hiddenIcon} z-0`}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-24 stroke-1 items-center justify-center"
                                      fill="none"
                                      color="#3b3b3b85"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[70%]">
                                <div className="h-1/2 flex justify-between">
                                  <div>
                                    <h1 className="mb-1 text-[14px]">
                                      Nama Ruangan
                                    </h1>
                                    <input
                                      className="text-[16px] lg:text-[18px] font-[500] font-sans placeholder:opacity-50 bg-transparent focus:outline-none w-[100%]"
                                      placeholder="input nama ruangan"
                                      onChange={handleChange(data)}
                                      value={data?.nama}
                                    />
                                  </div>
                                  <div className="w-[20%] cursor-pointer">
                                    <div
                                      className="flex py-2 items-center justify-center"
                                      onClick={() =>
                                        handleDeleteListCard(data?.id)
                                      }
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-12 stroke-1 items-center justify-center"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="h-1/2 justify-end items-end"
                                  onClick={() => {
                                    if (!data?.nama) {
                                      alert(
                                        "Mohon untuk mengisi nama ruangan!"
                                      );
                                      return null;
                                    }
                                  }}
                                >
                                  <input
                                    accept="image/jpeg,image/png,image/jpg"
                                    id="icon-button-file"
                                    capture="environment"
                                    disabled={!data?.nama}
                                    onChange={handleCapture(data)}
                                    type="file"
                                    className="block text-sm text-slate-500 
                                  file:mr-4 file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-violet-50 file:text-violet-700
                                  hover:file:bg-violet-100 w-[100%]
                                "
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="items-center">
                      <div
                        className="block justify-center pt-6 cursor-pointer"
                        onClick={() => handleAddListCard()}
                      >
                        <div className="flex flex-row">
                          <div className="mr-4 w-[30%]">
                            <div
                              className="flex h-[6rem] w-[6rem] mb-4 bg-transparent border-border opacity-80 border-2 border-opacity-30 rounded-md items-center justify-center bg-cover"
                              id="display-image"
                            >
                              <div className="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-12 w-24 stroke-1 items-center justify-center"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="cursor-pointer w-[70%]">
                            <label className="text-[14px] font-[500] font-sans opacity-50">
                              Tambah Ruangan
                            </label>
                            <h6 className="text-[12px] mt-1 text-gray-500">
                              click untuk menambah ruangan
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end body */}
            </div>
            {/* start button */}
            <div className="bottom-0 ">
              <div className="xs:block flex justify-between relative lg:ml-32 mx-8 mt-8 lg:mt-4 pb-12">
                <Button
                  label={"Kembali"}
                  icon="back"
                  mode={"outline"}
                  onPress={() => navigation("/tora")}
                />
                <Button
                  label={loadSubmit ? "Loading..." : "Upload"}
                  onPress={handleSubmit}
                  disable={loadSubmit ? true : false}
                />
              </div>
            </div>
            {/* end button */}
          </div>
          {/* end body2 */}
        </div>
      </MobileView>
    </>
  );
}

export default Start;
