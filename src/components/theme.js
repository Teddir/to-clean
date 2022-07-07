/* eslint-disable react/prop-types */
import React from "react";
import { Component } from "react";

export class Button extends Component {
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
        textTransform: this.props.textTransform ? this.props.textTransform : 'normal',
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
      newColor === 'disable' ? "text-disable" : "text-primary",
      myColorBD,
    ];
    const myVariantStyle =
      this.state.variant ? this.state.variant === "contained" ? btnContained : btnOutline : btnContained;
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
    const {variant, textTransform, onClick} = this.state
    const label = this.props?.label;
    const icon = this.props?.icon;
    const styleVariant = this.cekColor();
    const styleTextTransform = this.cekText(textTransform);
    //-------------->
    return variant === "contained" ? (
      <div className={`${styleVariant}`} onClick={() => onClick()}>
        <span
          className={`${styleTextTransform} text-2xl font-semibold `}
        >
          {label}
        </span>
      </div>
    ) : variant === "outline" ? (
      <div className={`${styleVariant}`} onClick={() => onClick()}>
        <span
          className={`${styleTextTransform} text-2xl font-semibold `}
        >
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
        <span
          className={`${styleTextTransform} text-2xl font-semibold `}
        >
          {label}
        </span>
      </div>
    );
  }
}
export default Button;
