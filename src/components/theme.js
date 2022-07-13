/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Component } from "react";

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
        className={`${styleVariant} py-6 px-10 rounded-md justify-center items-center flex cursor-not-allowed`}
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
  const borderColor = [disable ? "border-disable" : "border-border"];
  const textColor = [disable ? "text-border" : modeText];
  const cursorPointer = [disable ? "cursor-not-allowed" : "cursor-pointer"];
  const styleButton = `py-6 px-10 rounded-md justify-center items-center flex ${cursorPointer} ${bgColor} ${textColor}`;
  const styleButtonOutline = `py-6 px-10 rounded-md justify-center items-center border-2 flex ${cursorPointer} ${borderColor} ${textColor}`;
  const nilaiStyle = mode === "outline" ? styleButtonOutline : styleButton;
  return (
    <div
      className={`${nilaiStyle} xs:mb-4 xs:mr-4`}
      onClick={() => (!disable && onPress ? onPress() : {})}
    >
      {icon === "back" && (
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
      )}
      <span className={`text-2xl font-semibold `}>{label}</span>
    </div>
  );
};

export const SideBarProcess = ({ numberProcess }) => {
  const process = [
    { id: 1, name: "Proses 1" },
    { id: 2, name: "Proses 2" },
    { id: 1, name: "Selesai" },
  ];

  return (
    <div className="w-[80%] lg:w-[90%] mt-24">
      <div className="h-[50%] cursor-default">
        <div className="pb-8">
          {process?.map((datas, index) => {
            const myStyle = [
              numberProcess >= index + 1
                ? "text-primary font-bold textResponsive"
                : "text-white font-bold textResponsive",
            ];
            const spanStyle = [
              numberProcess >= index + 1
                ? "p-4 bg-backgroundWeb w-[90%] flex justify-center items-center rounded-md drop-shadow-lg"
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
