/* eslint-disable react/prop-types */
import React from "react";
import { myData } from "./Beranda";
import { myDataUser } from "./Users";

export default function Settings(props) {
  const data = myDataUser
  const dataDepartement = myData
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
        {/* settings menu add admin */}
        <div className="grid grid-cols-2">
          <div className="w-[96%]">
            <div className="flex items-center cursor-pointer" onClick={() => props?.setModal({status: !props?.modal?.status, mode:'addAdmin'})}>
              <h1 className="font-bold text-[20px] mr-4">Account Admin</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-2" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-neutral-500 text-[14px]">Admin bisa menambah dan menghapus users 
              dan memberikan nilai terhadap user</span>
          </div>
          <div>
          <table className="table-auto w-full rounded">
            <thead>
              <tr className="text-left bg-c2">
                <th className="pl-8 py-6 text-[14px] font-bold">User</th>
                <th className="pl-8 py-6 text-[14px] font-bold">Ditambahkan</th>
                <th className="px-8 py-6 text-[14px] font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0,3).map((data, index) => {
                return (
                  <tr key={index} className={`border-b-2 border-trans1 border-opacity-10 items-center justify-center`}>
                    <td className="pl-6 text-[18px] font-semibold">
                      <div className="flex items-center">
                        <div className="h-14 w-14 bg-c1 rounded-full mr-8 justify-center flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h1 className="text-[16px] font-bold capitalize">{data.nama}</h1>
                          <span className="text-[12px] text-neutral-500">{data.departement} Departement</span>
                        </div>
                      </div>
                    </td>
                    <td className={`pl-8 pt-8 pb-6 text-[14px] font-semibold text-neutral-800`}>Feb 22 - Teddi</td>
                    <td className={`pl-8 pt-8 pb-6 text-[14px]`}>
                      <div className="flex">
                        <div className="p-4 cursor-pointer mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </div>
                        <div className="p-4 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </div>
        {/* settings menu add user */}
        <div className="grid grid-cols-2 my-12">
          <div className="w-[96%]">
            <div className="flex items-center cursor-pointer" onClick={() => props?.setModal({status: !props?.modal?.status, mode:'addUser'})}>
              <h1 className="font-bold text-[20px] mr-4">Account Users</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-2" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-neutral-500 text-[14px]">Admin bisa menambah dan menghapus users 
              dan memberikan nilai terhadap user</span>
          </div>
          <div>
          <table className="table-auto w-full rounded">
            <thead>
              <tr className="text-left bg-c2">
                <th className="pl-8 py-6 text-[14px] font-bold">User</th>
                <th className="pl-8 py-6 text-[14px] font-bold">Ditambahkan</th>
                <th className="px-8 py-6 text-[14px] font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0,4).map((data, index) => {
                return (
                  <tr key={index} className={`border-b-2 border-trans1 border-opacity-10 items-center justify-center`}>
                    <td className="pl-6 text-[18px] font-semibold">
                      <div className="flex items-center">
                        <div className="h-14 w-14 bg-c1 rounded-full mr-8 justify-center flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h1 className="text-[16px] font-bold capitalize">{data.nama}</h1>
                          <span className="text-[12px] text-neutral-500">{data.departement} Departement</span>
                        </div>
                      </div>
                    </td>
                    <td className={`pl-8 pt-8 pb-6 text-[14px] font-semibold text-neutral-800`}>Feb 22 - Teddi</td>
                    <td className={`pl-8 pt-8 pb-6 text-[14px]`}>
                      <div className="flex">
                        <div className="p-4 cursor-pointer mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </div>
                        <div className="p-4 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </div>
        {/* settings menu add user */}
        <div className="grid grid-cols-2 my-12">
          <div className="w-[96%]">
          <div className="flex items-center cursor-pointer" onClick={() => props?.setModal({status: !props?.modal?.status, mode:'addDepartement'})}>
              <h1 className="font-bold text-[20px] mr-4">Departement</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-2" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-neutral-500 text-[14px]">Admin bisa menambah dan menghapus users 
              dan memberikan nilai terhadap user</span>
          </div>
          <div>
          <table className="table-auto w-full rounded">
            <thead>
              <tr className="text-left bg-c2">
                <th className="pl-8 py-6 text-[14px] font-bold">Name</th>
                <th className="pl-8 py-6 text-[14px] font-bold">Ditambahkan</th>
                <th className="px-8 py-6 text-[14px] font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataDepartement.map((data, index) => {
                return (
                  <tr key={index} className={`border-b-2 border-trans1 border-opacity-10 items-center justify-center`}>
                    <td className="pl-6 text-[18px] font-semibold">
                      <div className="flex items-center">
                        <div>
                          <h1 className="text-[16px] font-bold capitalize">{data.nama}</h1>
                        </div>
                      </div>
                    </td>
                    <td className={`pl-8 pt-8 pb-6 text-[14px] font-semibold text-neutral-800`}>Feb 22 - Teddi</td>
                    <td className={`pl-8 pt-8 pb-6 text-[14px]`}>
                      <div className="flex">
                        <div className="p-4 cursor-pointer mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </div>
                        <div className="p-4 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </div>
        {/* settings menu add hukuman */}
        <div className="grid grid-cols-2">
          <div className="w-[96%]">
            <div className="flex items-center cursor-pointer" onClick={() => props?.setModal({status: !props?.modal?.status, mode:'addHukuman'})}>
              <h1 className="font-bold text-[20px] mr-4">Hukuman</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-2" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-neutral-500 text-[14px]">Hukuman akan diberikan oleh departement kebersihan kepada departement yang
              memiliki nilai paling rendah.</span>
          </div>
          <div>
          <table className="table-auto w-full rounded">
            <thead>
              <tr className="text-left bg-c2">
                <th className="pl-8 py-6 text-[14px] font-bold">Hukuman</th>
                <th className="px-8 py-6 text-[14px] font-bold grid-cols-2 grid">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(0,1).map((data, index) => {
                return (
                  <tr key={index} className={`border-b-2 border-trans1 border-opacity-10 items-center justify-center`}>
                    <td className="py-4 text-[18px] font-semibold">
                      <div className="pl-6 w-[90%]">
                          <div className="flex mt-4">
                            <h1 className="text-neutral-700 mr-4">*</h1>
                            <span className="text-[12px] text-neutral-500">Hukuman diberikan kepada departement yang
                              memiliki nilai paling rendah.</span>
                          </div>
                      </div>
                    </td>
                    <td className={`py-4 pb-6 text-[14px]`}>
                      <div className="flex">
                        <div  className="px-2 cursor-pointer mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </div>
                        <div className="px-2 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" color="#242424" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>  
  )
}