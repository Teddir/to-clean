import React from "react";
import { useFirebase } from "../components/firebase/FirebaseProvider";
import logo from "../src/image/logo.svg"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/theme";

export default function Landing() {
  const navigation = useNavigate()
  const {user} = useFirebase()
  const handleStart = () => {
    // console.log(user);
    navigation(`${user ? '/tora' :'/tora/role'}`, {replace:true})
  }

  return (
    <>
      <div className="min-h-screen max-w-screen-2xl pb-12 bg-gradient-to-b md:flex-grow-0" style={{
        backgroundImage: `url(https://img.freepik.com/free-vector/professional-cleaner-tidying-up-apartment-flat_1284-59996.jpg?w=740)`,
        backgroundRepeat: "no-repeat",
        color: '#ffffff',
        backgroundPosition:"center",
        backgroundPositionY:"16rem",
        // backgroundSize:"30%"
      }}>
        <div className="px-12">
          {/* start header */}
          <div className="w-full pt-4 pb-8 xss:px-4 ">
            <div className="flex justify-between items-center">
              <img src={logo} className="App-logo h-12 w-12 xl:h-20 xl:w-20" alt="logo" />
              <div className="h-[1rem] w-[4rem] xl:w-[6rem] bg-gradient-to-r from-white to-white-icon" />
            </div>
          </div>
          {/* end header */}
          {/* body */}
          <div className="h-full text-center mb-12">
            <span className="text-[2.5rem] font-Pop font-semibold tracking-tighter text-[#222]">Bersih - bersih kantor ditemani dengan Tora.</span><br/>  
            <span className="text-[2.5rem] font-Pop font-semibold tracking-tighter text-[#222]">`&quot;`Bersih Kilau & Cepat.`&quot;` </span>
          </div>
          <div className="flex items-center, justify-center">
            <Button label={"Mulai Sekarang"} mode="outline"/>
          </div>
        </div>
      </div>
    </>
  )
}