/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useData, usersCollection } from "../../../../../components/firebase/DataProvider";

export default function ListData(props) {
  const { allAdmin, allUser } = useData()
  return (
    <div>
      <div className={`flex justify-between flex-row duration-300 pb-12 hide-scroll-bar `}>
        {/* start body */}
        <div className={`w-full duration-300 `}>
          <div className="flex justify-between mb-12">
            <div className={`flex mr-12 duration-200 w-[80%]`}>
              <input className="px-12 py-6 w-full text-[16px] text-trans3 border-[1px] border-trans3 rounded-md border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50 duration-200" placeholder={`Search username ${props?.mode}...`} type={"text"}/>
            </div>
            <div className={`flex duration-200 w-[20%] bg-trans1 rounded-md justify-center items-center cursor-pointer`}>
              <span className="text-white text-center font-bold text-[16px] capitalize">+ {props?.mode}</span>
            </div>
          </div>
        </div>

      </div>  
        <table className="table-auto w-full rounded">
            <thead className="p-12">
              <tr className="text-left bg-c2">
                <th className="pl-8 py-8 text-[18px] font-bold">Nomor</th>
                <th className="pl-8 py-8 text-[18px] font-bold">Nama</th>
                <th className="pl-8 py-8 text-[18px] font-bold">Register</th>
              </tr>
            </thead>
            <tbody>
              {(props?.mode === "user" ? allUser : allAdmin)?.map((a, b) => {
                const createdTime = new Date(a?.created_at?.seconds*1000)
                const loginTime = new Date(a?.updated_at?.seconds*1000)
                return <tr key={b} className={`border-b-2 border-trans1 border-opacity-10 items-center justify-center`}>
                  <td className="pl-8 pt-8 pb-6 text-[18px] font-semibold">{b + 1}</td>
                  <td className="pl-8 pt-8 pb-6 text-[18px] font-semibold capitalize">{a.username}</td>
                  <td className="pl-8 pt-8 pb-6 text-[18px] font-semibold capitalize">{`${createdTime?.getDate()}-${createdTime?.getMonth()}-${createdTime?.getFullYear()}`}</td>
                </tr>
              })}
            </tbody>
          </table>
    </div>
  )
}