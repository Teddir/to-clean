import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  firefunctions,
} from "../../../components/firebase/FirebaseProvider";
import {
  Button,
  MiniSideBarProcess,
  SideBarProcess,
} from "../../../components/theme";
import logo from "../../../src/svg/logoWhite.svg";

function UserAuth() {
  const navigation = useNavigate();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [datas, setDatas] = useState({
    data: {
      phone: "",
      departement: "",
      password: "",
    },
    errortype: {},
  });

  const handleChange = (prop) => (event) => {
    setDatas({
      ...datas,
      data: {
        ...datas.data,
        [prop]: event.target.value,
      },
    });
  };

  const validate = () => {
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    let newErrors = {};
    // event.preventDefault();
    if (!datas.data.phone) {
      newErrors.phone = "*Phone Wajib Diisi";
      phone.classList.add("form-error");
    } else {
      phone.classList.remove("form-error");
      phone.classList.add("form-active");
    }
    if (!datas.data.password) {
      newErrors.password = "*Password Wajib Diisi";
      password.classList.add("form-error");
    } else {
      password.classList.remove("form-error");
      password.classList.add("form-active");
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    setLoadingSubmit(true);
    const errortype = validate();
    if (Object.values(errortype).some((message) => message !== "")) {
      setDatas({ ...datas, errortype });
      setLoadingSubmit(false);
    } else {
      try {
        const userAuth = firefunctions.httpsCallable("user-login"); // API create a custom token
        const response = await userAuth(datas.data);
        // console.log('respone first :', response);
        const myData = response.data;
        if (myData?.status === "OK") {
          try {
            auth.signInWithCustomToken(myData?.token);
            navigation("/tora", { replace: true });
            setLoadingSubmit(false);
          } catch (error) {
            setLoadingSubmit(false);
            console.log(error);
            datas.errortype.password = error.message;
          }
        }
      } catch (error) {
        console.log(error);
        datas.errortype.password = error.message;
        setLoadingSubmit(false);
      }
    }
  };

  // console.log(datas)
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
          <SideBarProcess numberProcess={1} />
        </div>
      </div>
      {/* end body1 */}
      {/* start body2 */}
      <div className="max-h-full">
        <div className="lg:ml-32 ml-12 mr-12 mt-8 lg:mt-4 pb-12">
          {/* start nav */}
          <div className="flex justify-between items-center">
            <div className="bg-trans1 p-2 rounded-xl md:opacity-0 lg:opacity-0">
              <img
                src={logo}
                className="App-logo h-16 w-16 lg:h-24 lg:w-24"
                alt="logo"
              />
            </div>
            <div className="items-center">
              <h1 className="textDesc font-mono text-right">
                “Ingat kebersihan membuahkan kesehatan.”
              </h1>
            </div>
          </div>
          {/* end nav */}
          {/* start body */}
          <div className="mt-24 xl:mt-18">
            <MiniSideBarProcess status={"user"} stage={1} />
            <div className="pt-8 md:pt-0">
              <span className="textJudul">
                Hy kamu yaa kamu! <br /> sehat selalu yaaa 😊.
              </span>
            </div>
            <div className="xl:mt-6 mt-4">
              <span className="textDesc">
                Mohon masukkan data yang sesuai dengan data diri kamu!!
              </span>
            </div>
            {/* textInput */}
            <div className="mt-12">
              <form>
                <div className="xl:flex">
                  <div className="mb-8">
                    <span className="text-[16px] lg:text-[18px] font-[500] font-sans">
                      Phone
                    </span>
                    <br />
                    <input
                      className="xs:w-full lg:w-[24rem] md:w-[24rem] w-[20rem] text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                      placeholder="+628990400112"
                      type={"text"}
                      required
                      onChange={handleChange("phone")}
                      id="phone"
                    />
                    <div className="mt-2 text-red-400 font-semibold">
                      <span>{datas?.errortype?.phone}</span>
                    </div>
                  </div>
                  <div className="mb-8 xl:mb-8 xl:ml-24">
                    <span className="text-[16px] lg:text-[18px] font-[500] font-sans">
                      Password
                    </span>
                    <br />
                    <input
                      className="xs:w-full lg:w-[24rem] md:w-[24rem] w-[20rem] text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border rounded-md px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                      placeholder="*********"
                      type={"password"}
                      required
                      onChange={handleChange("password")}
                      id="password"
                    />
                    <div className="mt-2 text-red-400 font-semibold">
                      <span>{datas?.errortype?.password}</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* end body */}
        {/* start button */}
        <div className="bottom-0 py-6 xss:block">
          <div className="xs:block flex justify-between relative lg:ml-32 ml-12 mr-12 mt-8 lg:mt-4 pb-12">
            <Button
              label={"Kembali"}
              icon="back"
              mode={"outline"}
              onPress={() => navigation("/tora/role")}
            />
            <Button
              label={loadingSubmit ? "Loading.." : "Lanjutkan"}
              onPress={() => handleSubmit()}
              disable={loadingSubmit}
            />
          </div>
        </div>
        {/* end button */}
      </div>
      {/* end body2 */}
    </div>
  );
}

export default UserAuth;
