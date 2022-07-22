import React from "react";
import logo from "../../src/image/logo.svg"
import { useNavigate } from "react-router-dom";
import {Button, Button1} from "../../components/theme";

function Start() {
  const navigation = useNavigate()
  const [myRole, setMyRole] = React.useState('');

  const handleClick = (role) => {
    const chooseRoleUser = document.getElementById(`role-user`);
    const chooseRoleAdmin = document.getElementById(`role-admin`);
    if (role === 'user') {
      setMyRole(role)
      chooseRoleUser.classList.toggle('role-active')
      chooseRoleAdmin.classList.remove('role-active')
    }
    if (role === 'admin') {
      setMyRole(role)
      chooseRoleAdmin.classList.toggle('role-active')
      chooseRoleUser.classList.remove('role-active')
    }
  }

  const handleSubmit = () => {
    if (myRole !== '') {
      if (myRole === 'user') {
        navigation('/tora/user-login', {replace: true})
      } else {
        navigation('/tora/admin-login', {replace: true});
      }
    } else {
      alert('pilih role anda terlebih dahulu')
    }
  }
  
  return (
    <div className="max-w-screen-2xl min-h-screen flex bg-backgroundWeb">
      {/* start body1 */}
      <div className="max-h-full w-[34%] bg-gradient-to-b from-trans2 to-trans3 hidden md:block">
        <div className="w-full mx-12 mt-4 pb-12">
          {/* logo */}
            <div className="flex justify-between items-center">
              <img src={logo} className="App-logo h-24 w-24" alt="logo" />
            </div>
          {/* desc */}
          <div className="w-[80%] xl:w-[90%] mt-24">
            <div className="h-[50%]">
              <h1 className="text-white text-[36px] xl:text-[46px] font-serif font-bold">Hey Clean your place, with <br/> ikhlas!!!</h1>
            </div>
            <div className="h-[50%] flex bottom-0 pb-12 items-end fixed">
              <span className="text-slate-600 font-bold items-center text-md">Tokorame Team @2022</span>
            </div>
          </div>
        </div>
      </div>
      {/* end body1 */}
      {/* start body2 */}
      <div className="max-h-full">
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
          {/* start nav */}
          <div className="xl:w-[86%] mt-24 xl:mt-18">
            <div>
              <span className="textJudul">Masuk untuk melengkapi data kebersihan.</span>
            </div>
            <div className="mt-2 xl:w-[70%]">
              <span className="textDesc">
              masuk sesuai dengan status pekerjaan saat ini
              jangan ngadi-ngadi ygy.
              </span>
            </div>
            {/* card */}
            <div className="group cursor-default" onClick={() => handleClick("admin")}>
              <div className="mt-16 w-full rounded-xl border-2 border-border border-opacity-20 hover:border-borderSecondary hover:opacity-100 hover:shadow-md" id="role-admin">
                <div className="p-4 flex items-center">
                  <div className="bg-pink-200 h-[6rem] w-[6rem] xl:h-[9rem] xl:w-[9rem] rounded-md bg-[url('./src/image/Admin.png')] bg-cover"/>
                  <div className="ml-8">
                    <h1 className="text-3xl xl:text-4xl font-bold mb-[12px] ">Admin</h1>
                    <span className="text-1xl xl:text-2xl opacity-40 group-hover:text-purple-700" id="role-text">Khusus seksi kebersihan</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <Link to={"/stepone"}> */}
              <div className="group cursor-default" onClick={() => handleClick("user")}>
                <div className="mt-12 w-full rounded-xl border-2 border-border border-opacity-20 hover:border-borderSecondary hover:opacity-100 hover:shadow-md" id="role-user">
                  <div className="p-4 flex items-center">
                    <div className="bg-pink-200 h-[6rem] w-[6rem] xl:h-[9rem] xl:w-[9rem] rounded-md bg-[url('./src/image/User.png')] bg-cover"/>
                    <div className="ml-8">
                      <h1 className="text-3xl xl:text-4xl font-bold mb-[12px] ">User</h1>
                      <span className="text-1xl xl:text-2xl opacity-40 group-hover:text-purple-700">Khusus siapa ya? ya kamu. </span>
                    </div>
                  </div>
                </div>
              </div>
            {/* </Link> */}
          </div>
          {/* button */}
          <div className="w-full bottom-0 xl:mt-[8rem] pb-6 mt-[6rem] md:mt-[4rem]">
            <div className="xs:block flex justify-between relative">
              <Button label={"Kembali"} icon="back" mode={"outline"} onPress={() => navigation('/')}/>
              <Button label={"Lanjutkan"} onPress={() => handleSubmit()}/>
            </div>
          </div>
          {/* end button */}
        </div>
      </div>
      {/* start button */}
      {/* end body2 */}
    </div>
  )
}

export default Start
