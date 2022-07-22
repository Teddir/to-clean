import React from "react";
import { useData } from "../../../../../components/firebase/DataProvider";
import { useFirebase } from "../../../../../components/firebase/FirebaseProvider";

export const myData = [
  {
    id:1,
    nama:'IT Departement',
    nilai:200,
    color: 'bg-c1'
  },
  {
    id:2,
    nama:'Salles Departement',
    nilai:90,
    color: 'bg-c2'
  },
  {
    id:3,
    nama:'Markom Departement',
    nilai:190,
    color: 'bg-c3'
  },
  {
    id:4,
    nama:'WareHouse Departement',
    nilai:180,
    color: 'bg-c4'
  },
  {
    id:5,
    nama:'Finance Departement',
    nilai:220,
    color: 'bg-c2'
  },
  {
    id:6,
    nama:'R&D Departement',
    nilai:250,
    color: 'bg-c1',
  },
  {
    id:6,
    nama:'Tailor Departement',
    nilai:250,
    color: 'bg-c3'
  },
]

const myHukuman = [
  {
    id:1,
    isi:'Makan nasi padang 2 bungkus tanpas minum air.'
  },
  {
    id:2,
    isi:'Bersihin musholla kantor dan juga WC.'
  },
  
  {
    id:3,
    isi:'Bersihin musholla kantor dan juga WC.'
  },
]

export default function Beranda(data) {
  const open = data?.open
  const { users } = useData()
  // console.log('beranda', users);
  return (
    <div className={`flex justify-between flex-row duration-300 pb-12 hide-scroll-bar`}>
      {/* start body */}
      <div className={`${!open ? 'w-[80rem]' : 'w-[58rem]'} duration-300`}>
        <div className={`flex mr-12 duration-200`}>
          <input className="px-12 py-6 w-full text-[16px] text-trans3 border-[1px] border-trans3 rounded-md border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder="Search departement..." type={"text"}/>
        </div>
        {/* say hello */}
        <div className="pt-12">
          <h1 className="text-[32px] font-bold">Hello 🙌</h1>
          <span className="text-[18px] text-neutral-500">Selamat Datang Kembali!</span>
        </div>
        {/* card departement */}
        <div className="grid-cols-2 grid pt-12">
          {myData.map((data, index) => {
            return (
              <div key={index} >
                <div className={`${data.color} mr-12 rounded-md cursor-pointer my-4 `}>
                  <div className="pt-8 pb-6 px-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-semibold capitalize">{data.nama}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 stroke-2 ${data.nilai >= 100 ? '' : 'rotate-180'}`} color={data.nilai >= 100 ? '#0FE224' : '#E20F0F'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8 7l4-4m0 0l4 4m-4-4v18" />
                      </svg>
                    </div>
                    <h1 className="text-[14px] text-neutral-500 mb-2">Total nilai</h1>
                    <h1 className="text-[28px] text-neutral-900 font-bold tracking-tighter">*{data.nilai}</h1>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* leaderboard */}
      <div className={`${!open ? 'w-[28rem]' : 'w-[25rem]'} duration-300  bg-black rounded-md animate-none pb-12`}>
        <div className="pt-8 px-12">
          <span className="text-white text-[24px] font-bold">Leaderboard</span>
          {myData.map((data, index) => {
            return (
              <div key={index}>
                <div className="mt-12">
                  <div className="flex items-center">
                    <div>
                      <span className={`text-[14px] font-bold h-2 w-2 ${index + 1 === 1 ? "bg-yellow-300" : index + 1 === 2 ? 'bg-blue-400' : index + 1 === 3 ? 'bg-teal-400' : 'bg-backgroundWeb'} py-4 px-6 rounded-full`}>{index+1}</span>
                    </div>
                    <span className="text-[14px] font-bold ml-4 text-white">{data.nama}</span>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="mt-12">
            <div>
              <span className="text-white text-[24px] font-bold">Hukuman</span>
            </div>
              {myHukuman.map((data, index) => {
                return (
                  <div key={index}>
                    <div className="flex mt-4">
                      <h1 className="text-white mr-4">-</h1>
                      <span className="text-white text-xl">
                        {data.isi}
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}