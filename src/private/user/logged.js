import React from "react"

function Longged() {
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
    {
      no:4,
      nama: "Lantai 1",
      url: ""
    },{
      no:5,
      nama: "Atas Meja",
      url: ""
    },
    {
      no:6,
      nama: "Bawah Meja",
      url: ""
    },
    {
      no:7,
      nama: "Depan Meja",
      url: ""
    },
    {
      no:8,
      nama: "Lantai 1",
      url: ""
    },
    {
      no:9,
      nama: "Lantai 1",
      url: ""
    },
  ])

  return (
    <div className="min-h-screen bg-backgroundWeb bg-opacity-30">
        <div className="w-full px-12 pt-20 pb-12 xs:px-4 xss:px-2">
          <div className="flex justify-between xs:block xss:block">
            <div className="flex items-center">
              <span className="textJudul font-bold font-mono">Hallo Teddi Rahman&nbsp;&nbsp;</span>
              <span className="text-[20px] font-bold bg-pink-300 p-2 rounded-tr-xl rounded-bl-xl">80</span>
            </div>
            <div className="mt-4 lg:mt-0 py-5 px-10 md:py-3 md:px-6 rounded-md justify-center items-center flex cursor-default border-2 border-trans1 border-opacity-10">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 16l-4-4m0 0l4-4m-4 4h18"   />
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" />
              </svg>
              <a href="/steptwo" className="text-center font-bold text-[20px] textButton">&nbsp;Keluar</a>
            </div>
          </div>
          <div className="lg:w-1/2 pt-4">
            <span className="lg:text-[20px] md:text-[18px] text-[16px]">
            Kamu bisa melihat status data yang telah kamu upload sebelumnya
            dan juga melihat seluruh gambar ruangan yang telah kamu bersihkan.
            </span>
          </div>
          <div className="bg-myColor1 w-full mt-20 py-4 pl-6">
            <span className="font-bold lg:text-[20px] md:text-[18px] text-[24px]">Gambar Anda</span>
          </div>
          <div className="w-full px-12 pt-12 pb-12 xs:px-0 xss:px-0">
            {/* pending */}
            <>
              <div className="flex justify-between items-center xss:block">
                <span className="font-semibold lg:text-[20px] md:text-[18px] text-[22px]  ">Pending</span>
                <div className="xs:my-4 py-2 px-4 rounded-md justify-center items-center flex cursor-default border-2 border-trans1 border-opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                  <select className="ml-2 appearance-none text-[16px] bg-transparent focus:ring-opacity-0 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50">
                    <option className="font-bold" value={""}>Hari Ini ygy</option>
                    {[{no:0, name:"Senin"},{no:1, name:"Selesa"},{no:3, name:"Rabu"},{no:4, name:"Kamis"},{no:5, name:"Jum'at"},{no:5, name:"Sabtu"},].map((data, index) => {
                      return (
                        <option key={index} value={data.name}>{data.name}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col m-auto p-auto">
            <div
              className="flex snap-x overflow-x-scroll py-10 hide-scroll-bar"
            >
              <div
                className="flex snap-start flex-nowrap lg:ml-40 md:ml-20 ml-10 "
              >
                {listCardImage.map((data, index) => {
                  return (
                    <div key={index} className="inline-block px-3">
                      <div
                        className="w-[22rem] h-[20rem] smm:w-[15rem] smm:h-[15rem] xs:w-[18rem] xs:h-[18rem] xss:w-[17rem] xss:h-[18rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-backgroundUploadImage bg-opacity-30 hover:shadow-xl transition-shadow duration-300 ease-in-out items-center justify-center flex"
                      >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-24 stroke-1 items-center justify-center" fill="none" color="#252525" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                      </div>
                      <h4 className="text-[18px] mt-6">{data.nama}</h4>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
            </>
            {/* approved */}
            <>
              <div className="flex justify-between items-center xss:block mt-12">
                <span className="font-semibold lg:text-[20px] md:text-[18px] text-[22px]  ">Approved</span>
                <div className="xs:my-4 py-2 px-4 rounded-md justify-center items-center flex cursor-default border-2 border-trans1 border-opacity-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                  <select className="ml-2 appearance-none text-[18px] bg-transparent focus:ring-opacity-0 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50">
                    <option className="font-bold" value={""}>Hari Ini ygy</option>
                    {[{no:0, name:"Senin"},{no:1, name:"Selesa"},{no:3, name:"Rabu"},{no:4, name:"Kamis"},{no:5, name:"Jum'at"},{no:5, name:"Sabtu"},].map((data, index) => {
                      return (
                        <option key={index} value={data.name}>{data.name}</option>
                      )
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-col m-auto p-auto">
            <div
              className="flex snap-x overflow-x-scroll py-10 hide-scroll-bar"
            >
              <div
                className="flex snap-start flex-nowrap lg:ml-40 md:ml-20 ml-10 "
              >
                {listCardImage.map((data, index) => {
                  return (
                    <div key={index} className="inline-block px-3">
                      <div
                        className="w-[22rem] h-[20rem] smm:w-[15rem] smm:h-[15rem] xs:w-[18rem] xs:h-[18rem] xss:w-[17rem] xss:h-[18rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-backgroundUploadImage bg-opacity-30 hover:shadow-xl transition-shadow duration-300 ease-in-out items-center justify-center flex"
                      >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-24 stroke-1 items-center justify-center" fill="none" color="#252525" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                      </div>
                      <h4 className="text-[19px] mt-6">{data.nama}</h4>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
            </>
          </div>
          {/* semua gambar */}
          <div className="bg-myColor1 w-full mt-4 py-4 pl-6">
            <span className="font-bold lg:text-[20px] md:text-[18px] text-[24px]">Semua Gambar</span>
          </div>
          <div className="w-full px-12 pt-12 pb-12 xs:px-0 xss:px-0">
          <>
            <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-5 smm:grid-cols-4 xs:grid-cols-3 xss:grid-cols-2">
              {
                listCardImage.map((data, index) => {
                  return (
                    <div key={index} className="xl:mb-12 mb-4 xl:ml-4 items-center md:block lg:block">
                      <div className={"block justify-center w-auto"}>
                        <div className="flex h-[12rem] w-[12rem] xl:h-[16rem] xl:w-[16rem] smm:w-[10rem] smm:h-[10rem] xs:w-[9rem] xs:h-[9rem] xss:w-[8rem] xss:h-[8rem] bg-backgroundUploadImage bg-opacity-30 rounded-md items-center justify-center bg-cover" id={`display-image${data.no}`}>
                          <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-24 stroke-1 items-center justify-center" fill="none" color="#252525" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <label className="lg:text-[18px] md:text-[16px] text-[14px] font-sans text-slate-600">{data.nama}</label>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </>
          </div>
        </div>
    </div>
  )
}

export default Longged