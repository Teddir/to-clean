import React from "react";
import logo from "../../src/image/logo.svg"
import { useNavigate } from "react-router-dom";

function Start() {
  const navigation = useNavigate()
  const [listCardImage, setListCardImage] = React.useState([
    {
      no:1,
      nama: "Atas Meja",
      url: ""
    },
    {
      no:2,
      nama: "Bawah Meja",
      url: ""
    },
    {
      no:3,
      nama: "Depan Meja",
      url: ""
    },
  ])
  
  const handleCapture = (target, data) => {
    if (data.nama === "") {
      return alert('Dimohon untuk mengisi nama ruangan telebih dahulu')
    }
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        listCardImage.map((datas) => {
          if (datas.no === data?.no) {
            datas.url = newUrl
          }
          return
        })
        // setListCardImage([...listCardImage])
        document.querySelector(`#display-image${data?.no}`).style.backgroundImage = `url(${newUrl})`;
      }
    }
  };
  // console.log(listCardImage);

  const handleAddListCard = () => {
    listCardImage.push({
      "nama": "",
      "no": listCardImage.length + 1,
      "url": ""
    });
    setListCardImage([...listCardImage])
    // console.log('asas', listCardImage);
  }
  
  const handleDeleteListCard = (data) => {
    const newListCard = listCardImage.filter((datas, index) => {
      return datas.no !==  data.no
    })
    setListCardImage([...newListCard])
    // console.log('asas', newListCard);
  }

  return (
    <div className="max-h-full min-h-screen max-w-full flex bg-backgroundWeb">
      {/* start body1 */}
      <div className="max-h-full w-[34%] bg-gradient-to-b from-trans2 to-trans3 hidden md:block">
        <div className="w-full mx-12 mt-4 pb-12">
          {/* logo */}
            <div className="flex justify-between items-center">
              <img src={logo} className="App-logo h-24 w-24" alt="logo" />
            </div>
          {/* desc */}
          <div className="w-[80%] xl:w-[90%] mt-24">
            <div className="h-[50%] cursor-default">
              <div className="pb-8">
                <div className="p-4 bg-backgroundWeb w-[90%] flex justify-center items-center rounded-md drop-shadow-lg">
                  <span className="text-primary font-bold textResponsive">Proses 1</span>
                </div>
              </div>
              <div className="pb-8">
                <div className="p-4 bg-backgroundWeb w-[90%] flex justify-center items-center rounded-md drop-shadow-lg">
                  <span className="text-primary font-bold textResponsive">Proses 2</span>
                </div>
              </div>
              <div className="pb-8">
                <div className="border-2 border-white opacity-10 p-4 bg-transparent w-[90%] flex justify-center items-center rounded-md">
                  <span className="text-white font-bold textResponsive">Finish</span>
                </div>
              </div>
            </div>
            <div className="h-[50%] flex bottom-0 pb-12 items-end fixed">
              <span className="text-slate-600 font-bold items-center text-md">Tokorame Team @2022</span>
            </div>
          </div>
        </div>
      </div>
      {/* end body1 */}
      {/* start body2 */}
      <div className="max-h-full xl:w-[66%]">
        <div className="xl:ml-32 ml-12 mr-12 mt-8 xl:mt-4 pb-12">
          {/* start nav */}
          <div className="flex justify-between items-center">
            <div className="bg-trans1 p-2 rounded-xl md:opacity-0 lg:opacity-0">
              <img src={logo} className="App-logo h-16 w-16 xl:h-24 xl:w-24" alt="logo" />
            </div>
            <div className="items-center">
              <h1 className="textDesc font-mono text-right">“Ingat  kebersihan membuahkan kesehatan.”</h1>
            </div>
          </div>
          {/* end nav */}
          {/* start body */}
          <div className="w-[90%] mt-24 xl:mt-18 block">
            <div className="block md:hidden">
              <div className="flex">
              <div className="w-[6rem] h-[12px] bg-trans1 border-[1px] border-border opacity-60" />
                <div className="w-[6rem] h-[12px] bg-trans1 border-[1px] border-border opacity-60" />
                <div className="w-[6rem] h-[12px] border-[1px] border-border opacity-40" />
              </div>
            </div>
            <div className="pt-8 md:pt-0">
              <span className="textJudul">Lengkapi data dengan benar okey.</span>
            </div>
            <div className="mt-2 lg:w-[70%]">
              <span className="textDesc">
              upload image / tempat kamu bekerja sesuai dengan posisi yang telah tertera.
              </span>
            </div>
            {/* upload image */}
            <div className="justify-between sm:block md:flex lg:flex mt-6">
              <div className="w-full grid sm:grid-cols-3 xs:grid-cols-1 xl:grid-cols-4 grid-cols-2">
                {
                  listCardImage.map((data, index) => {
                    return (
                      <div key={index} className="xl:mr-4 xl:mb-4 mt-6 items-center md:block lg:block ">
                        {data.nama ? 
                          <label className="text-[16px] lg:text-[18px] font-[500] font-sans">{data.nama}</label>
                        :
                          <input className="text-[16px] lg:text-[18px] font-[500] font-sans placeholder:opacity-50 bg-transparent focus:outline-none" placeholder="input ruangan"/>
                        }
                        <div className="block justify-center pt-6">
                          <div className="flex h-[14rem] w-[12rem] xs:w-auto xs:h-[20rem] mb-4 bg-backgroundUploadImage bg-opacity-30 rounded-md items-center justify-center bg-cover" id={`display-image${data.no}`}>
                            <div className={data.url ? "hidden" : "flex"}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-24 stroke-1 items-center justify-center" fill="none" color="#252525" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                          {data.no > 3 ? 
                          <div className="flex mb-4 border-2 border-border border-opacity-50 w-[12rem] p-3 rounded-md cursor-pointer" onClick={() => handleDeleteListCard(data)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12 stroke-1 items-center justify-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            <span>Hapus Ruangan</span>
                          </div>
                          :null}
                          <input 
                          accept="image/*"
                          id="icon-button-file"
                          capture="environment"
                          onChange={(e) => handleCapture(e.target, data)}
                          type="file" className="block w-auto text-sm text-slate-500 
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-violet-50 file:text-violet-700
                            hover:file:bg-violet-100
                          "/>
                        </div>
                      </div>
                    )
                  })
                }
                <div className="xl:mr-4 xl:mb-4 mt-6 items-center md:block lg:block " onClick={() => handleAddListCard()}>
                  <label className="text-[16px] lg:text-[18px] font-[500] font-sans opacity-50">Tambah</label>
                  <div className="block justify-center pt-6">
                    <div className="flex h-[14rem] w-[12rem] xs:w-auto xs:h-[20rem] mb-4 bg-transparent border-border opacity-80 border-2 border-opacity-30 rounded-md items-center justify-center bg-cover" id="display-image">
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-24 stroke-1 items-center justify-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
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
        <div className="bottom-0 lg:mt-24 py-6">
          <div className="xs:block flex justify-between relative lg:ml-32 ml-12 mr-12 mt-8 lg:mt-4 pb-12">
          <div className="xs:mb-4 py-5 px-10 rounded-md justify-center items-center flex cursor-pointer border-2 border-trans1 border-opacity-10" onClick={() => navigation("/user/start", {})}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 16l-4-4m0 0l4-4m-4 4h18"   />
              </svg>
              <span className="text-center font-bold text-[16px] textButton">&nbsp;Kembali</span>
            </div>
            <div className="bg-trans1 py-5 px-12 rounded-md justify-center items-center flex cursor-pointer" onClick={() => handleSubmit()}>
              <span className="text-white text-center font-bold text-[16px] textButton" onClick={() => window.open("/finish", "_self")}>Lanjutkan</span>
            </div>
          </div>
        </div>
        {/* end button */}
      </div>
      {/* end body2 */}
    </div>
  )
}

export default Start