/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Component } from "react";
import logoWhite from "../src/svg/logoWhite.svg";
import logoBlack from "../src/svg/logoBlack.svg";

export class ButtonOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      variant: this.props.variant,
      color: this.props.color,
      statusDisable: this.props.disable,
      onClick: this.props.onClick,
      textTransform: this.props.textTransform,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.color !== this.props.color ||
      prevProps.disable !== this.props.disable ||
      prevProps.onClick !== this.props.onClick ||
      prevProps.variant !== this.props.variant ||
      prevProps.textTransform !== this.props.textTransform
    ) {
      this.setState({
        color: this.props.color ? this.props.color : "primary",
        statusDisable: this.props.disable ? this.props.disable : false,
        onClick: this.state.statusDisable ? () => {} : this.props?.onClick,
        variant: this.state.statusDisable ? "disable" : this.props?.variant,
        textTransform: this.props.textTransform
          ? this.props.textTransform
          : "normal",
      });
    }
  }

  cekColor(variant) {
    const { color, statusDisable } = this.state;
    const newColor = statusDisable ? "disable" : color;
    const styleButton = [
      "py-6",
      "px-10",
      "rounded-md",
      "justify-center",
      "items-center",
      "flex",
      "cursor-pointer",
    ];

    const myColorBG =
      newColor === "primary"
        ? `bg-primary`
        : newColor === "secondary"
        ? `bg-secondary`
        : newColor === "disable"
        ? `bg-disable`
        : "bg-primary";
    const myColorBD =
      newColor === "primary"
        ? `border-primary`
        : newColor === "secondary"
        ? `border-secondary`
        : newColor === "disable"
        ? `border-disable`
        : "border-primary";

    const btnContained = [...styleButton, "text-white", myColorBG];
    const btnOutline = [
      ...styleButton,
      "border-2",
      newColor === "disable" ? "text-disable" : "text-primary",
      myColorBD,
    ];
    const myVariantStyle = this.state.variant
      ? this.state.variant === "contained"
        ? btnContained
        : btnOutline
      : btnContained;
    return myVariantStyle.join(" ");
  }

  cekText(textTransform) {
    const newTextTransform = textTransform
      ? textTransform === "uppercase"
        ? "uppercase"
        : "capitalize"
        ? "capitalize"
        : "lowercase"
      : "normal";
    return newTextTransform;
  }

  render() {
    const { variant, textTransform, onClick } = this.state;
    const label = this.props?.label;
    const icon = this.props?.icon;
    const styleVariant = this.cekColor();
    const styleTextTransform = this.cekText(textTransform);
    //-------------->
    return variant === "contained" ? (
      <div className={`${styleVariant}`} onClick={() => onClick()}>
        <span className={`${styleTextTransform} text-2xl font-semibold `}>
          {label}
        </span>
      </div>
    ) : variant === "outline" ? (
      <div className={`${styleVariant}`} onClick={() => onClick()}>
        <span className={`${styleTextTransform} text-2xl font-semibold `}>
          {label}
        </span>
      </div>
    ) : variant === "disable" ? (
      <div
        className={`${styleVariant} py-6 px-10 justify-center items-center flex cursor-not-allowed`}
        onClick={() => onClick()}
      >
        <span
          className={`${styleTextTransform} opacity-60 text-2xl font-semibold `}
        >
          {label}
        </span>
      </div>
    ) : (
      <div className={`${styleVariant}`} onClick={() => onClick()}>
        <span className={`${styleTextTransform} text-2xl font-semibold `}>
          {label}
        </span>
      </div>
    );
  }
}

export const Button = ({ onPress, mode, disable, label, icon }) => {
  const modeText = mode === "outline" ? "text-primary" : "text-white";
  const bgColor = [disable ? "bg-disable" : "bg-primary"];
  const borderColor = [disable ? "border-disable" : "border-primary"];
  const textColor = [disable ? "text-border" : modeText];
  const cursorPointer = [disable ? "cursor-not-allowed" : "cursor-pointer"];
  const shadow = [disable ? "" : "hover:shadow-2xl"];
  const styleButton = `xl:py-3 xl:px-6 py-3 px-3 justify-center items-center border-2 ${borderColor} flex ${cursorPointer} ${bgColor} ${textColor} ${shadow}`;
  const styleButtonOutline = `xl:py-3 xl:px-6 py-3 px-3 justify-center items-center border-2 flex ${cursorPointer} ${borderColor} ${textColor} ${shadow}`;
  const nilaiStyle = mode === "outline" ? styleButtonOutline : styleButton;
  return (
    <div
      className={`${nilaiStyle} xs:mb-4 duration-500`}
      onClick={() => (!disable && onPress ? onPress() : {})}
    >
      {/* {icon === "back" && (
        <div className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </div>
      )} */}
      <span className={`xl:text-[1rem] text-[11px] text-center items-center font-bold`}>{label}</span>
    </div>
  );
};

export const SideBarProcess = ({ numberProcess, title }) => {
  const process = [
    { id: 1, name: "Proses 1" },
    { id: 2, name: "Proses 2" },
    { id: 1, name: "Selesai" },
  ];

  return (
    <div className="w-[80%] lg:w-[90%] mt-24">
      <div className="h-[50%] cursor-default">
        <div className="pb-8">
          {numberProcess === 0 ? (
            <>
              <div className={"mb-4"}>
                <div className={`h-[50%]`}>
                  <span
                    className={`text-white md:text-[44px] font-serif font-bold`}
                  >
                    {title}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              {process?.map((datas, index) => {
                const myStyle = [
                  numberProcess >= index + 1
                    ? "text-primary font-bold textResponsive"
                    : "text-white font-bold textResponsive",
                ];
                const spanStyle = [
                  numberProcess >= index + 1
                    ? "p-4 bg-backgroundWeb w-[90%] flex justify-center items-center drop-shadow-lg"
                    : "border-2 border-white opacity-10 p-4 bg-transparent w-[90%] flex justify-center items-center rounded-md",
                ];
                return (
                  <div key={index} className={"mb-4"}>
                    <div className={myStyle}>
                      <span className={spanStyle}>{datas?.name}</span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <div className="h-[50%] flex bottom-0 pb-12 fixed items-end">
        <span className="text-slate-600 font-bold items-center text-md">
          Tokorame Team @2022
        </span>
      </div>
    </div>
  );
};

export const MiniSideBarProcess = ({ status, stage }) => {
  return (
    <div className="block md:hidden">
      <div className="flex">
        {status === "admin" ? (
          <>
            <div className="w-[6rem] h-[12px] bg-trans1 opacity-60" />
          </>
        ) : (
          <>
            {[1, 2, 3].map((a, b) => {
              return (
                <div key={b}>
                  <div
                    className={`w-[6rem] h-[12px] ${
                      stage === a
                        ? "bg-trans1 opacity-60"
                        : "border-[1px] border-border opacity-40"
                    }`}
                  />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export const useSnackBar = () => {
  return (
    <div className="absolute top-0 items-center justify-center">
      <div
        className="bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full"
        role="alert"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="exclamation-triangle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          ></path>
        </svg>
        A simple warning alert - check it out!
      </div>
    </div>
  );
};

export const Header = ({ labels, actions, logoColor }) => {
  const [label, otherLabel] = typeof labels === "string" ? [labels] : labels;
  const [action, otherAction] =
    typeof actions === "function" ? [actions] : actions;
  return (
    <>
      <div className="w-full ">
        <div className="flex justify-between items-center">
          <img
            src={logoColor === "black" ? logoBlack : logoWhite}
            className="App-logo h-16 w-16 xl:h-20 xl:w-20"
            alt="logo"
          />
          {labels ? (
            <>
              <div className="flex">
                {otherLabel && (
                  <div className="mr-3">
                    <Button
                      label={otherLabel}
                      mode="outline"
                      onPress={otherAction}
                    />
                  </div>
                )}
                <div>
                  <Button label={label} onPress={action} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="h-[1rem] w-[4rem] xl:w-[6rem] bg-gradient-to-r from-white to-white-icon" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export function DropDownOld() {
  const [show, setShow] = React.useState(false)
  return (
    <div className="relative inline-block text-left mr-3">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={() => setShow(!show)}
            >
              Menu
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                />
              </svg>
            </button>
          </div>
          <div
            className={`absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${!show ? "hidden" : 'block'}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
              >
                Start Clean
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
  )
}

export function DropDown({isShow, list}) {
  return (
    <div className="relative inline-block text-left mr-3">
          <div
            className={`absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 ${!isShow ? "hidden" : 'block'}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              {list?.map((a, b) => {
                return (
                  <div key={b}>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                    >
                      {a?.title}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
  )
}

export function Modal() {
  return (
    <div className="absolute w-screen min-h-screen h-screen bg-slate-900 bg-opacity-60 overflow-y-scroll hide-scroll-bar">
      <h1>ini modal</h1>
    </div>
  )
}

export function getTimePersonal(today, format) {
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  
  today = format === 'local' ? mm + "/" + dd + "/" + yyyy : dd + "/" + mm + "/" + yyyy;
  return today
}
