import React from "react";
import logo from "../../src/image/logo.svg"

function Finish() {
  
  const [datas, setDatas] = React.useState({
    data : {
      catatan: "",
    },
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
  
  const handleSubmit = () => {
    window.open("/", "_self")  
  }

  // console.log(datas);
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
                <div className="p-4 bg-backgroundWeb w-[90%] flex justify-center items-center rounded-md drop-shadow-lg">
                  <span className="text-primary font-bold textResponsive">Finish</span>
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
      <div className="max-h-full xl:w-[66%]">
        <div className="xl:ml-32 ml-12 mr-12 mt-8 xl:mt-4 pb-12">
          {/* start nav */}
          <div className="flex justify-between items-center">
            <div className="bg-trans1 p-2 rounded-xl md:opacity-0 xl:opacity-0">
              <img src={logo} className="App-logo h-16 w-16 xl:h-24 xl:w-24" alt="logo" />
            </div>
            <div className="items-center">
              <h1 className="textDesc font-mono text-right">“Ingat  kebersihan membuahkan kesehatan.”</h1>
            </div>
          </div>
          {/* end nav */}
          {/* start body */}
          <div className="w-[90%] mt-24 xl:mt-18">
            <div className="block md:hidden">
              <div className="flex">
              <div className="w-[6rem] h-[12px] bg-trans1 border-[1px] border-border opacity-60" />
                <div className="w-[6rem] h-[12px] bg-trans1 border-[1px] border-border opacity-60" />
                <div className="w-[6rem] h-[12px] bg-trans1 border-[1px] border-border opacity-60" />
              </div>
            </div>
            <div className="pt-8 md:pt-0">
              <span className="textJudul">Lengkapi data dengan benar okey.</span>
            </div>
            <div className="mt-2 xl:w-[70%]">
              <span className="textDesc">
              Berikan catatan sesuai dengan keinginan kamu sendiri atau sekilah mirip catatan.
              </span>
            </div>
            {/* textInput */}
            <div className="mt-12">
              <form>
                <span className="text-[14px] xl:text-[16px] font-[500] font-sans">Catatan (opsional)</span><br/>
                <textarea
                  className="w-full pt-4 pl-4 pb-[12rem] mt-4 rounded-md bg-backgroundWeb border-2 border-trans1 border-opacity-70 xl:text-2xl md:text-xl text-lg"
                  placeholder="isi catatan ygy" required onChange={handleChange('catatan')} id="catatan"
                />
              </form>
            </div>
          </div>
          {/* start button */}
          <div className="bottom-0 mt-20 xl:mt-24 py-6">
            <div className="xs:block flex justify-between">
              <div className="xs:mb-4 py-5 px-10 rounded-md justify-center items-center flex cursor-default border-2 border-trans1 border-opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M7 16l-4-4m0 0l4-4m-4 4h18"   />
                </svg>
                <a href="/steptwo" className="text-center font-bold text-[16px] textButton">&nbsp;Kembali</a>
              </div>
              <div className="bg-trans1 py-5 px-12 rounded-md justify-center items-center flex cursor-default" onClick={() => handleSubmit()}>
              <span className="text-white text-center font-bold text-[16px] textButton">Selesai</span>
              </div>
            </div>
          </div>
          {/* end button */}
          {/* end body */}
        </div>
      </div>
      {/* end body2 */}
    </div>
  )
}

export default Finish