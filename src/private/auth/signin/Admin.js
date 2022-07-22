import React from "react";
import {
  auth,
  firefunctions,
} from "../../../components/firebase/FirebaseProvider";
import logo from "../../../src/image/logo.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/theme";

function AdminAuth() {
  const navigation = useNavigate();
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
      newErrors.email = "*Nama Wajib Diisi";
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

    if (Object.values(errortype).some((message) => message !== "")) {
      setDatas({ ...datas, errortype });
    } else {
      setDatas({ ...datas, errortype });
      console.log(datas);
      try {
        if (datas.data.email === "teddirahman@gmail.com") {
          await auth.signInWithEmailAndPassword(
            datas.data.email,
            datas.data.password
          );
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
      } catch (error) {
        console.log(error);
        datas.errortype.password = error.message;
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
      <div className="max-h-full lg:w-[66%]">
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
          <div className="w-[90%] mt-[3rem] lg:mt-18">
            <div className="block md:hidden">
              <div className="flex">
                <div className="w-[6rem] h-[12px] bg-trans1 opacity-60" />
                <div className="w-[6rem] h-[12px] border-[1px] border-border opacity-40" />
                <div className="w-[6rem] h-[12px] border-[1px] border-border opacity-40" />
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <span className="textJudul">
                Lengkapi data dengan benar okey.
              </span>
            </div>
            <div className="mt-2 lg:w-[70%]">
              <span className="textDesc">
                data yang dimasukkan harus sesuai dengan data yang telah
                didaftarkan sebelumnya.
              </span>
            </div>
            {/* textInput */}
            <div className="mt-12">
              <form>
                <div className="xl:flex">
                  <div className="mb-8">
                    <span className="text-[16px] lg:text-[18px] font-[500] font-sans">
                      Email / phone
                    </span>
                    <br />
                    <input
                      className="lg:w-[24rem] md:w-[24rem] w-[20rem] text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border rounded-md pl-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
                      placeholder="Teddi Rahman"
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
                      className="lg:w-[24rem] md:w-[24rem] w-[20rem] text-[16px] text-trans3 h-16 mt-2 bg-backgroundWeb border-2 border-border rounded-md px-4 border-opacity-30 focus:ring-trans1 focus:ring-1 focus:outline-none focus:border-trans1 focus:border-opacity-50"
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
        <div className="bottom-0 xl:mt-12 py-6 xss:block">
          <div className="xs:block flex justify-between relative lg:ml-32 ml-12 mr-12 mt-8 lg:mt-4 pb-12">
            <Button
              label={"Kembali"}
              icon="back"
              mode={"outline"}
              onPress={() => navigation("/tora/role")}
            />
            <Button label={"Lanjutkan"} onPress={() => handleSubmit()} />
          </div>
        </div>
        {/* end button */}
      </div>
      {/* end body2 */}
    </div>
  );
}

export default AdminAuth;
