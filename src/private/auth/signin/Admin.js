import React from "react";
import {
  auth,
  firefunctions,
} from "../../../components/firebase/FirebaseProvider";
import logoWhite from "../../../src/svg/logoWhite.svg";
import logoBlack from "../../../src/svg/logoBlack.svg";
import { useNavigate } from "react-router-dom";
import { Button, MiniSideBarProcess } from "../../../components/theme";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

function AdminAuth() {
  const navigation = useNavigate();
  const [loadingSubmit, setLoadingSubmit] = React.useState(false);
  const [datas, setDatas] = React.useState({
    data: {
      email: "",
      password: "",
    },
    errortype: {},
  });

  const handleChange = (prop) => (event) => {
    setDatas({
      ...datas,
      errortype: {
        ...datas.errortype,
        [prop]: "",
      },
      data: {
        ...datas.data,
        [prop]: event.target.value,
      },
    });
  };

  const validate = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let newErrors = {};
    // event.preventDefault();
    if (!datas.data.email) {
      newErrors.email = "*Email Wajib Diisi";
      email.classList.add("form-error");
    } else {
      email.classList.remove("form-error");
      email.classList.add("form-active");
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
    const errortype = validate();
    setLoadingSubmit(true);

    if (Object.values(errortype).some((message) => message !== "")) {
      setDatas({ ...datas, errortype });
      setLoadingSubmit(false);
    } else {
      setDatas({ ...datas, errortype });
      // console.log(datas);
      try {
        if (datas.data.email === "teddirahman@gmail.com") {
          await auth.signInWithEmailAndPassword(
            datas.data.email,
            datas.data.password
          );
          setLoadingSubmit(false);
          return navigation("/tora", { replace: true });
        }
        const userAuth = firefunctions.httpsCallable("user-login"); // API create a custom token
        const response = await userAuth(datas.data);
        // console.log('respone first :', response);
        const myData = response.data;
        if (myData?.status === "OK") {
          try {
            const secondResponse = auth.signInWithCustomToken(myData?.token);
            // console.log('respone second :', secondResponse);
            navigation("/tora", { replace: true });
          } catch (error) {
            console.log(error);
            datas.errortype.password = error.message;
          }
        }
        setLoadingSubmit(false);
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
      <div className="max-h-full w-[30%] bg-gradient-to-b from-trans2 to-trans3 hidden md:block">
        <div className="w-full mx-12">
          {/* logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigation("/tora/role")}
          >
            <ArrowLongLeftIcon className="w-12 h-12 mr-2 " color="white" />
            <img src={logoWhite} className="App-logo h-24 w-24" alt="logo" />
          </div>
          {/* desc */}
          <div className="w-[80%] lg:w-[90%] mt-24">
            <div className="h-[50%] cursor-default">
              <div className="pb-8">
                <div className="p-4 bg-backgroundWeb w-[90%] flex justify-center items-center rounded-md drop-shadow-lg">
                  <span className="text-primary font-bold textResponsive">
                    Login
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[50%] flex bottom-0 pb-12 fixed items-end">
              <span className="text-slate-600 font-bold items-center text-md">
                Tokorame Team @2022
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end body1 */}
      {/* start body2 */}
      <div className="max-h-full md:w-[66%] ">
        <div className="md:ml-24 ml-6 mr-6 mt-4">
          {/* start nav */}
          <div className="flex justify-between items-center md:mt-12">
            <div className="flex items-center cursor-pointer md:hidden " onClick={() => navigation('/tora/role')}>
              <ArrowLongLeftIcon className="w-12 h-12 mr-2" />
              <img src={logoBlack} className="App-logo h-16 w-16" alt="logo" />
            </div>
            <div className="items-center md:block hidden">
              <h1 className="textDesc font-mono text-right">
                “Ingat kebersihan membuahkan kesehatan.”
              </h1>
            </div>
          </div>
          {/* end nav */}
          {/* start body */}
          <div className="md:mt-32 mt-12 md:w-[80%]">
            <MiniSideBarProcess status={"admin"} />
            <div className="pt-4 md:pt-0">
              <span className="font-bold md:text-[28px] text-[34px] md:leading-none leading-9">
                Hallo Admin Tokorame semoga <br /> sehat selalu 😊.
              </span>
            </div>
            <div className="xl:mt-6 mt-4">
              <span className="md:text-[18px] text-[24px]">
                data yang dimasukkan harus sesuai dengan data yang telah
                terdaftar!!
              </span>
            </div>
            {/* textInput */}
            <div className="mt-12">
              <form>
                <div className="xl:flex">
                  <div className="mb-8">
                    <span className="text-[16px] lg:text-[18px] font-[500] font-sans">
                      Email
                    </span>
                    <br />
                    <input
                      className="xl:w-[24rem] w-full text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border  pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                      placeholder="wadidawKece@gmail.com"
                      type={"email"}
                      required
                      onChange={handleChange("email")}
                      id="email"
                    />
                    <div className="mt-2 text-red-400 font-semibold">
                      <span>{datas?.errortype?.email}</span>
                    </div>
                  </div>
                  <div className="mb-8 xl:mb-8 xl:ml-24">
                    <span className="text-[16px] lg:text-[18px] font-[500] font-sans">
                      Password
                    </span>
                    <br />
                    <input
                      className="xl:w-[24rem] w-full text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border  px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
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
        <div className="bottom-0 xl:mt-12 py-6 md:ml-24 ml-6">
          <div className="lg:flex md:flex sm:flex justify-between relative">
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

export default AdminAuth;
