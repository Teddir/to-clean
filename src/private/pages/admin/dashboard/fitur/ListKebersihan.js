import React from "react";
import { useData } from "../../../../../components/firebase/DataProvider";

const myList = [
  {
    id:1,
    nama:'Teddi Rahman',
    departement:'IT',
    color: 'bg-c1'
  },
  {
    id:2,
    nama:'NurIhsan',
    departement:'IT',
    color: 'bg-c2'
  },
  {
    id:3,
    nama:'Rijlan',
    departement:'IT',
    color: 'bg-c3'
  },
  {
    id:4,
    nama:'Faris',
    departement:'IT',
    color: 'bg-c4'
  },
  {
    id:5,
    nama:'Rijal',
    color: 'bg-c2',
    departement:'Markom'
  },
  {
    id:6,
    nama:'Putri',
    color: 'bg-c3',
    departement:'Markom'
  },
]

export default function ListKebersihan() {
  const [list, setList] = React.useState({});
  const {cleans} = useData();
  
  return (
    <div className={`flex justify-between flex-row duration-300 pb-12 hide-scroll-bar `}>
      {/* start body */}
      <div className={`w-full duration-300 `}>
        <div className="flex justify-between mb-12">
          <div className={`flex mr-12 duration-200 w-[80%]`}>
            <input className="px-12 py-6 w-full text-[16px] text-trans3 border-[1px] border-trans3 rounded-md border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50 duration-200" placeholder="Search departement..." type={"text"}/>
          </div>
          <div className={`flex duration-200 w-[20%]`}>
            <input className="px-12 py-6 w-full text-[16px] text-trans3 border-[1px] border-trans3 rounded-md border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50 duration-200" type={"date"}/>
          </div>
        </div>
        {myList.map((data, index) => {
          const handleList = (data, day) => {
            setList({...data, day});
            if(data) {
              if(data?.nama === list?.nama && list?.day === day) {
                setList({});
              } else {
                setList({...data, day});
              }
            }
          }
          const myDay = list?.day
          return (
            <div key={index}>
              <div className={`my-8 ${data?.color} rounded-lg`}>
                <div className={`flex justify-between items-center mx-12 py-6 ${data?.nama === list?.nama ? 'border-b-[1px]' : 'border-b-0'} border-trans1 border-opacity-10 pb-8`}>
                  <div>
                    <span className="text-[20px] font-extrabold ">{data?.nama}</span>
                    <span className="text-[14px] font-semibold ">&nbsp; {data?.departement}</span>
                    <h1 className="text-neutral-400">click hari untuk {data?.nama === list?.nama ? 'menutup' : 'melihat'} detail</h1>
                  </div>
                  <div className="cursor-pointer">
                    <span className="bg-trans1 text-white py-6 px-4 mr-4 font-semibold text-[14px] rounded-md" onClick={() => handleList(data, 'senin')}>Senin</span>
                    <span className="bg-white py-6 px-4 mr-4 font-semibold text-[14px] rounded-md" onClick={() => handleList(data, 'selasa')}>Selasa</span>
                    <span className="bg-white py-6 px-4 mr-4 font-semibold text-[14px] rounded-md" onClick={() => handleList(data, 'rabu')}>Rabu</span>
                    <span className="bg-white py-6 px-4 mr-4 font-semibold text-[14px] rounded-md" onClick={() => handleList(data, 'kamis')}>Kamis</span>
                    <span className="bg-white py-6 px-4 mr-4 font-semibold text-[14px] rounded-md" onClick={() => handleList(data, 'jumat')}>Jumat</span>
                    <span className="bg-white py-6 px-4 mr-4 font-semibold text-[14px] rounded-md" onClick={() => handleList(data, 'sabtu')}>Sabtu</span>
                  </div>
                </div>
                <div className={`mx-12 py-6 ${data?.nama === list?.nama ? '' : 'hidden'}`}>
                  <div>
                    <span className="text-[24px] font-bold">Foto Kebersihan&nbsp;</span>
                    <span className="text-[24px] font-bold bg-yellow-300 rounded-md">&nbsp;{myDay}&nbsp;</span>
                  </div>
                  <div className="flex flex-col m-auto p-auto">
                      <div className="flex snap-x overflow-x-scroll py-10 hide-scroll-bar">
                        <div className="flex snap-start flex-nowrap ">
                          {[1,2,3,4,5,6].map((data, index) => {
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
                                <h4 className="text-[19px] mt-6">Image</h4>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-bold mb-4">catatan</h1>
                    <div className="xl:flex justify-between md:block">
                      <div className="xl:w-[60%]">
                        <span className="text-[14px]">
                          You unlocked new Achievements with private contributions! Show them off by including private contributions in your Profile in settings.
                          You unlocked new Achievements with private contributions! Show them off by including private contributions in your Profile in settings.
                        </span>
                      </div>
                      <div className="xl:w-[40%] flex xl:justify-end items-end">
                        <div className="border-2 border-trans1 h-[4rem] px-12 rounded-md justify-center items-center flex cursor-pointer mr-2">
                          <span className="text-trans1 text-center font-bold text-[14px]">Kotor</span>
                        </div>
                        <div className="border-2 border-trans1 h-[4rem] px-12 rounded-md justify-center items-center flex cursor-pointer mr-2">
                          <span className="text-trans1 text-center font-bold text-[14px]">Lumayan</span>
                        </div>
                        <div className="bg-trans1 h-[4rem] px-12 rounded-md justify-center items-center flex cursor-pointer">
                          <span className="text-white text-center font-bold text-[14px]">Rapi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}