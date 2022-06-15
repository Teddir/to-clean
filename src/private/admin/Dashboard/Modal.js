/* eslint-disable react/prop-types */
import React from "react";

export default function Modal(props) {
  const modal = props.modal
  const setModal = props.setModal
  const nameModal = modal?.mode === 'addHukuman' ? 'Hukuman' : modal?.mode === 'addDepartement' ? 'Departement' : modal?.mode === 'addAdmin' ? 'Admin' : 'User'

  return (
    <div className="fixed w-screen min-h-screen h-screen bg-slate-900 bg-opacity-60 overflow-y-scroll hide-scroll-bar">
      <div className="flex items-center justify-center min-h-screen ">
        <div>
          <div className="bg-white p-12 rounded-t-md">
            <div className="flex justify-between items-center">
              <h1 className="text-[24px] font-bold">Add {nameModal} Method</h1>
              <div className="bg-neutral-200 rounded-full p-2 cursor-pointer" onClick={() => setModal({status:!modal.status})}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="mt-12">
                <form>
                  {nameModal === 'Departement' || nameModal === 'Hukuman' ? (
                    <div>
                      <div className="mb-4 flex justify-center items-center">
                      <span className="text-xl font-semibold text-neutral-500 w-[10rem]">{nameModal === 'Departement' ? 'Departement' : 'Deskripsi'}</span>
                        {nameModal === 'Departement' ? (
                          <input className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder={"IT Support Kantor"} type={"text"} required />
                        ) : (
                          <textarea
                            className="w-[32rem] pt-4 pl-4 mt-4 rounded-md bg-white border-2 border-trans1 border-opacity-70 text-[16px] pb-3"
                            placeholder="Cuci piring kantor" required
                          />
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-4 flex justify-center items-center">
                      <span className="text-xl font-semibold text-neutral-500 w-[10rem]">{nameModal === 'Admin' ? 'Email' : 'Phone'}</span>
                        <input className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder={nameModal === 'Admin' ? 'teddir@gmail.com' : "628990400887"} type={"text"} required id="text"/>
                      </div>
                      
                      <div className="mb-4 flex justify-center items-center">
                        <span className="text-xl font-semibold text-neutral-500 w-[10rem]">Username </span>
                        <input className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder="Teddi Rahman" type={"text"} required />
                      </div>

                      <div className={`${nameModal === 'Admin' ? 'hidden' : 'flex'} mb-4  justify-center items-center`}>
                        <span className="text-xl font-semibold text-neutral-500 w-[10rem]">Departement </span>
                        <select className="w-[32rem] appearance-none text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder="Marketing" required>
                          <option className="font-bold" value={""}>Pilih Departement</option>
                          {[{no:0, name:"IT"},{no:1, name:"R&D"},{no:3, name:"Markom"},{no:4, name:"Selles"},{no:5, name:"WereHouse"},].map((data, index) => {
                            return (
                              <option key={index} value={data.name}>{data.name}</option>
                            )
                          })}
                        </select>
                      </div>

                      <div className="mb-4 flex justify-center items-center">
                        <span className="text-xl font-semibold text-neutral-500 w-[10rem]">Password </span>
                        <input className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder="*******" type={"password"} />
                      </div>
                    </div>
                  )}
                </form>
              </div>
          </div>
          <div className="bg-neutral-200 py-6 px-12 rounded-b-md flex justify-end">
            <span className="cursor-pointer text-neutral-700 text-center font-semibold text-[16px] py-4 px-8 rounded-md mr-2">Batalkan</span>
            <span className="cursor-pointer text-white text-center font-semibold text-[16px] bg-trans1 py-4 px-12 rounded-md">Simpan</span>
          </div>
        </div>
      </div>
    </div>
  )
}