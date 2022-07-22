/* eslint-disable react/prop-types */
import React from "react";
import { firefunctions } from "../../../../components/firebase/FirebaseProvider";

export default function Modal(props) {
  const modal = props.modal;
  const setModal = props.setModal;
  const versiModal = modal.versi;
  const dataUpdate = modal.data; // available when admin want update data
  const getDataModal = versiModal === 'update' ? dataUpdate.username : modal.mode;
  const nameModal = Object.values(getDataModal ?? {}).join('').split(' ', 1)
  // get ref drom firabase
  const [forms, setForms] = React.useState([]);
  const [errors, setaErrors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  // create handleChange to get input
  const handleChange = (field) => (e) => {
    // console.log('apa itu mood kalau bukan emosi', field, e.target.value);
    setForms((form) => ({...form, [field]: e.target.value}))
  }

  React.useEffect(() => {
    init()
  }, []);

  const init = React.useCallback(async () => {
    setForms(dataUpdate);
  });

  // create handle submit
  // console.log(forms);
  const handleSubmit = async () => {
    const nameAPI = versiModal === 'update' ? 'user-update' : 'user-create'
    try {
      setLoading(true)
      const settingAccount = firefunctions.httpsCallable(
        nameAPI
      );
      const data = {
        ...forms,
        user_id: versiModal === 'update' ? dataUpdate?.id : '',
        role : versiModal === 'add' ? modal.mode === 'Admin' ? 'admin' : 'user' : forms?.role?.toLowerCase()
      }
      // console.log(data);
      const reponse = await settingAccount(
        data
        )
        setModal({ status: !modal.status })
        // console.log(reponse.data);
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
    }
  };

  return (
    <div className="fixed w-screen min-h-screen h-screen bg-slate-900 bg-opacity-60 overflow-y-scroll hide-scroll-bar">
      <div className="flex items-center justify-center min-h-screen ">
        <div>
          <div className="bg-white p-12 rounded-t-md">
            <div className="flex justify-between items-center">
              <h1 className="text-[24px] font-bold capitalize">{versiModal} {nameModal} Method</h1>
              <div
                className="bg-neutral-200 rounded-full p-2 cursor-pointer"
                onClick={() => setModal({ status: !modal.status })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="mt-12">
              <form>
                {nameModal === "Department" || nameModal === "Hukuman" ? (
                  <div>
                    <div className="mb-4 flex justify-center items-center">
                      <span className="text-xl font-semibold text-neutral-500 w-[10rem]">
                        {nameModal === "Department"
                          ? "Department"
                          : "Deskripsi"}
                      </span>
                      {nameModal === "Department" ? (
                        <input
                          className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                          placeholder={"IT Support Kantor"}
                          type={"text"}
                          required
                        />
                      ) : (
                        <textarea
                          className="w-[32rem] pt-4 pl-4 mt-4 rounded-md bg-white border-2 border-trans1 border-opacity-70 text-[16px] pb-3"
                          placeholder="Cuci piring kantor"
                          required
                        />
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      {/* {nameModal === "Admin" ? ( */}
                        <div className="mb-4 flex justify-center items-center">
                          <span className="text-xl font-semibold text-neutral-500 w-[10rem]">
                            Email
                          </span>
                          <input
                            className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                            placeholder={"teddir@gmail.com"}
                            type={"email"}
                            required
                            onChange={handleChange('email')}
                            value={forms?.email}
                            id="text"
                          />
                        </div>
                      {/* ) :  */}
                      <div className="mb-4 flex justify-center items-center">
                      <span className="text-xl font-semibold text-neutral-500 w-[10rem]">
                        Phone
                      </span>
                      <input
                        className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                        placeholder={"+628990400887"}
                        type={"number"}
                        onChange={handleChange('phone')}
                        value={forms?.phone}
                        required
                      />
                    </div>
                    {/* } */}

                      <div className="mb-4 flex justify-center items-center">
                        <span className="text-xl font-semibold text-neutral-500 w-[10rem]">
                          Username{" "}
                        </span>
                        <input
                          className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                          placeholder="Teddi Rahman"
                          type={"text"}
                          onChange={handleChange('username')}
                          value={forms?.username}
                          required
                        />
                      </div>

                      <div
                        className={`mb-4 flex  justify-center items-center`}
                      >
                        <span className="text-xl font-semibold text-neutral-500 w-[10rem]">
                          Department{" "}
                        </span>
                        <select
                          className="w-[32rem] appearance-none text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                          placeholder="Marketing"
                          onChange={handleChange('department')}
                          required
                        >
                          <option className="font-bold" value={""}>
                            Pilih Department
                          </option>
                          {[
                            { no: 0, name: "IT" },
                            { no: 1, name: "R&D" },
                            { no: 3, name: "Markom" },
                            { no: 4, name: "Selles" },
                            { no: 5, name: "WereHouse" },
                          ].map((data, index) => {
                            return (
                              <option key={index} value={data.name} >
                                {data.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="mb-4 flex justify-center items-center">
                        <span className="text-xl font-semibold text-neutral-500 w-[10rem]">
                          {versiModal === 'update' ? 'New Password' : 'Password'}{" "}
                        </span>
                        <input
                          className="w-[32rem] text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                          placeholder="*******"
                          type={'password'}
                          onChange={handleChange('password')}
                          autoComplete="on"
                          required
                        />
                      </div>
                    </div>
                    {versiModal === 'update' ? (
                      <div
                      className={`mb-4 flex  justify-center items-center`}
                    >
                      <span className="text-xl font-semibold text-neutral-500 w-[10rem]">
                        Role{" "}
                      </span>
                      <select
                        className="w-[32rem] appearance-none text-[16px] text-trans3 h-16 mt-2 bg-white border-2 border-border rounded-md px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                        placeholder="Marketing"
                        onChange={handleChange('role')}
                        value={forms?.role}
                        required
                      >
                        <option className="font-bold" value={""}>
                          Pilih Role
                        </option>
                        {[
                          { no: 0, name: "Admin" },
                          { no: 1, name: "User" },
                        ].map((data, index) => {
                          return (
                            <option key={index} value={data.name} >
                              {data.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    ): null}
                  </>
                )}
              </form>
            </div>
          </div>
          <div className="bg-neutral-200 py-6 px-12 rounded-b-md flex justify-end">
            <span
              onClick={() => setModal({ status: !modal.status })}
              className="cursor-pointer text-neutral-700 text-center font-semibold text-[16px] py-4 px-8 rounded-md mr-2"
            >
              Batalkan
            </span>
            <button
            disabled={loading}
            onClick={() => handleSubmit()}
            className="cursor-pointer text-white text-center font-semibold text-[16px] bg-trans1 py-4 px-12 rounded-md disabled:bg-slate-400">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
