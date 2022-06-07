import React from "react";
import logo from "../../src/image/logo.svg"

function StepOne() {
  const [datas, setDatas] = React.useState({
    data : {
      name: "",
      departement: "",
      password: "",
    },
    errortype: {},
  })

  const handleChange = (prop) => (event) => {
    setDatas({
      ...datas,
      data: {
        ...datas.data,
        [prop]: event.target.value
      }
    })
  }
  
  const validate = () => {
    const name = document.getElementById("name")
    const password = document.getElementById("password")
    const departement = document.getElementById("departement")

    let newErrors = {}
    // event.preventDefault();
    if (!datas.data.name) {
      newErrors.name = '*Nama Wajib Diisi'
      name.classList.add("form-error");
    } else {
      name.classList.remove("form-error");
      name.classList.add("form-active");
    }
    if (!datas.data.password) {
      newErrors.password = '*Password Wajib Diisi'
      password.classList.add("form-error");
    } else {
      password.classList.remove("form-error");
      password.classList.add("form-active");
    }
    if (!datas.data.departement) {
      newErrors.departement = '*Departement Wajib Diisi'
      departement.classList.add("form-error");
    } else {
      departement.classList.remove("form-error");
      departement.classList.add("form-active");
    }

    return newErrors
  }
  const handleSubmit = () => {
    const errortype = validate();

    if (Object.values(errortype).some((message) => message !== "")) {
      setDatas({...datas, errortype});
    } else {
      setDatas({...datas, errortype});
      window.open("/steptwo", "_self")  
    }
  }

  // console.log(datas)
  return (
    <div className="max-w-full min-h-screen flex bg-backgroundWeb">
      {/* start body1 */}
      <div className="max-h-full w-[34%] bg-gradient-to-b from-trans2 to-trans3 hidden md:block">
        <div className="w-full mx-12 mt-4 pb-12">
          {/* logo */}
            <div className="flex justify-between items-center">
              <img src={logo} className="App-logo h-24 w-24" alt="logo" />
            </div>
          {/* desc */}
          <div className="w-[80%] lg:w-[90%] mt-24">
            <div className="h-[50%] cursor-default">
              <div className="pb-8">
                <div className="p-4 bg-backgroundWeb w-[90%] flex justify-center items-center rounded-md drop-shadow-lg">
                  <span className="text-primary font-bold textResponsive">Proses 1</span>
                </div>
              </div>
              <div className="pb-8">
                <div className="border-2 border-white opacity-10 p-4 bg-transparent w-[90%] flex justify-center items-center rounded-md">
                  <span className="text-white font-bold textResponsive">Proses 2</span>
                </div>
              </div>
              <div className="pb-8">
                <div className="border-2 border-white opacity-10 p-4 bg-transparent w-[90%] flex justify-center items-center rounded-md">
                  <span className="text-white font-bold textResponsive">Finish</span>
                </div>
              </div>
            </div>
            <div className="h-[50%] flex bottom-0 pb-12 fixed items-end">
              <span className="text-slate-600 font-bold items-center text-md">Tokorame Team @2022</span>
            </div>
          </div>
        </div>
      </div>
      {/* end body1 */}
      {/* start body2 */}
      <div className="max-h-full lg:w-[66%]">
        <div className="lg:ml-32 ml-12 mr-12 mt-8 lg:mt-4 pb-12">
          {/* start nav */}
          <div className="flex justify-between items-center">
            <div className="bg-trans1 p-2 rounded-xl md:opacity-0 lg:opacity-0">
              <img src={logo} className="App-logo h-16 w-16 lg:h-24 lg:w-24" alt="logo" />
            </div>
            <div className="items-center">
              <h1 className="textDesc font-mono text-right">“Ingat  kebersihan membuahkan kesehatan.”</h1>
            </div>
          </div>
          {/* end nav */}
          {/* start body */}
          <div className="w-[90%] mt-24 lg:mt-18">
            <div className="block md:hidden">
              <div className="flex">
                <div className="w-[6rem] h-[12px] bg-trans1 opacity-60" />
                <div className="w-[6rem] h-[12px] border-[1px] border-border opacity-40" />
                <div className="w-[6rem] h-[12px] border-[1px] border-border opacity-40" />
              </div>
            </div>
            <div className="pt-8 md:pt-0">
              <span className="textJudul">Lengkapi data dengan benar okey.</span>
            </div>
            <div className="mt-2 lg:w-[70%]">
              <span className="textDesc">
              data yang dimasukkan harus sesuai dengan data
              yang telah didaftarkan sebelumnya.
              </span>
            </div>
            {/* textInput */}
            <div className="mt-12">
              <form>
                <div className="xl:flex">
                  <div className="mb-8">
                    <span className="text-[16px] lg:text-[18px] font-[500] font-sans">Name</span><br/>
                    <input className="lg:w-[24rem] md:w-[24rem] w-[20rem] text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder="Teddi Rahman" type={"text"} required onChange={handleChange('name')} id="name"/>
                    <div className="mt-2 text-red-400 font-semibold">
                      <span>{datas?.errortype?.name}</span>
                    </div>
                  </div>
                  <div className="mb-8 xl:mb-8 xl:ml-24">
                    <span className="text-[16px] xl:text-[18px] font-[500] font-sans">Departement</span><br/>
                    <select className="lg:w-[24rem] md:w-[24rem] w-[20rem] appearance-none text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border rounded-md px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder="Marketing" required onChange={handleChange('departement')} id="departement">
                      <option className="font-bold" value={""}>Pilih Departement</option>
                      {[{no:0, name:"IT"},{no:1, name:"R&D"},{no:3, name:"Markom"},{no:4, name:"Selles"},{no:5, name:"WereHouse"},].map((data, index) => {
                        return (
                          <option key={index} value={data.name}>{data.name}</option>
                        )
                      })}
                    </select>
                    <div className="mt-2 text-red-400 font-semibold">
                      <span>{datas?.errortype?.departement}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <span className="text-[16px] lg:text-[18px] font-[500] font-sans">Password</span><br/>
                  <input className="lg:w-[24rem] md:w-[24rem] w-[20rem] text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border rounded-md px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50" placeholder="*********" type={"password"} required onChange={handleChange('password')} id="password"/>
                  <div className="mt-2 text-red-400 font-semibold">
                    <span>{datas?.errortype?.password}</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* end body */}
        {/* start button */}
        <div className="bottom-0 xl:mt-24 py-6 xl:fixed xl:w-[66%]">
          <div className="xs:block flex justify-between relative lg:ml-32 ml-12 mr-12 mt-8 lg:mt-4 pb-12">
            <div className="xs:mb-4 py-5 px-10 rounded-md justify-center items-center flex cursor-pointer border-2 border-trans1 border-opacity-10" onClick={() => {window.open("/start", "_self")}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M7 16l-4-4m0 0l4-4m-4 4h18"   />
              </svg>
              <a href="/start" className="text-center font-bold text-[16px] textButton">&nbsp;Kembali</a>
            </div>
            <div className="bg-trans1 py-5 px-12 rounded-md justify-center items-center flex cursor-pointer" onClick={() => handleSubmit()}>
            <span className="text-white text-center font-bold text-[16px] textButton">Lanjutkan</span>
            </div>
          </div>
        </div>
        {/* end button */}
      </div>
      {/* end body2 */}
    </div>
  )
}

export default StepOne