import React from "react";

export const myDataUser = [
  {
    id:1,
    nama:'Teddi Rahman',
    departement:'IT',
    data: {
      senin:100,
      selasa:80,
      rabu:80,
      kamis:80,
      jumat:75,
      sabtu:100,
    }
  },
  {
    id:2,
    nama:'NurIhsan',
    departement:'IT',
    data: {
      senin:100,
      selasa:80,
      rabu:0,
      kamis:80,
      jumat:85,
      sabtu:100,
    }
  },
  {
    id:3,
    nama:'Rijlan',
    departement:'IT',
    data: {
      senin:100,
      selasa:80,
      rabu:80,
      kamis:80,
      jumat:95,
      sabtu:100,
    }
  },
  {
    id:4,
    nama:'Faris',
    departement:'IT',
    data: {
      senin:100,
      selasa:100,
      rabu:100,
      kamis:100,
      jumat:100,
      sabtu:100,
    }
  },
  {
    id:5,
    nama:'Rijal',
    departement:'Markom',
    data: {
      senin:100,
      selasa:80,
      rabu:80,
      kamis:0,
      jumat:75,
      sabtu:0,
    }
  },
  {
    id:6,
    nama:'Putri',
    departement:'Markom',
    data: {
      senin:90,
      selasa:100,
      rabu:100,
      kamis:100,
      jumat:100,
      sabtu:100,
    }
  },
]
export default function Users() {
  return (
    <div className={`flex justify-between flex-row duration-300 pb-12 hide-scroll-bar `}>
      {/* start body */}
      <div className={`w-full duration-300 `}>
        <div className="flex justify-between mb-12">
          <div className={`flex mr-12 duration-200 w-[80%]`}>
            <input className="px-12 py-6 w-full text-[16px] text-trans3 border-[1px] border-trans3 rounded-md border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50 duration-200" placeholder="Search user..." type={"text"}/>
          </div>
          <div className={`flex duration-200 w-[20%] bg-trans1 rounded-md justify-center items-center cursor-pointer`}>
            <span className="text-white text-center font-bold text-[16px]">+ User</span>
          </div>
        </div>
        <div className="w-full">
        <table className="table-auto w-full rounded">
          <thead className="p-12">
            <tr className="text-left bg-c2">
              <th className="pl-8 py-8 text-[18px] font-bold">User</th>
              <th className="pl-8 py-8 text-[18px] font-bold">Senin</th>
              <th className="pl-8 py-8 text-[18px] font-bold">Selasa</th>
              <th className="pl-8 py-8 text-[18px] font-bold">Rabu</th>
              <th className="pl-8 py-8 text-[18px] font-bold">Kamis</th>
              <th className="pl-8 py-8 text-[18px] font-bold">Jumat</th>
              <th className="pl-8 py-8 text-[18px] font-bold">Sabtu</th>
              <th className="px-8 py-8 text-[18px] font-bold">Total Nilai</th>
            </tr>
          </thead>
          <tbody>
            {myDataUser.map((data, index) => {
              const totalNilai = data.data.senin + data.data.selasa + data.data.rabu + data.data.kamis + data.data.jumat + data.data.sabtu
              return (
                <tr key={index} className={`border-b-2 border-trans1 border-opacity-10 items-center justify-center`}>
                  <td className="pl-8 pt-8 pb-6 text-[18px] font-semibold">
                    <div className="flex items-center">
                      <div className="h-20 w-20 bg-c1 rounded-full mr-8 justify-center flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h1>{data?.nama}</h1>
                        <span className="text-lg text-neutral-500">{data?.departement} Departement</span>
                      </div>
                    </div>
                  </td>
                  <td className={`${data.data?.senin === 0 ? 'text-red-600' : ''} pl-8 pt-8 text-[18px] font-semibold`}>{data.data.senin}</td>
                  <td className={`${data.data?.selasa === 0 ? 'text-red-600' : ''} pl-8 pt-8 text-[18px] font-semibold`}>{data.data.selasa}</td>
                  <td className={`${data.data?.rabu === 0 ? 'text-red-600' : ''} pl-8 pt-8 text-[18px] font-semibold`}>{data.data.rabu}</td>
                  <td className={`${data.data?.kamis === 0 ? 'text-red-600' : ''} pl-8 pt-8 text-[18px] font-semibold`}>{data.data.kamis}</td>
                  <td className={`${data.data?.jumat === 0 ? 'text-red-600' : ''} pl-8 pt-8 text-[18px] font-semibold`}>{data.data.jumat}</td>
                  <td className={`${data.data?.sabtu === 0 ? 'text-red-600' : ''} pl-8 pt-8 text-[18px] font-semibold`}>{data.data.sabtu}</td>
                  <td className={`pl-8 pt-8 text-[18px] font-bold text-purple-600`}>{totalNilai}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}