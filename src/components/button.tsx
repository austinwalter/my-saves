import React from 'react';

type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button(props: Props) {
  const { type="button", className = "", disabled = false } = props

  const disabledStyle: string = " disabled:bg-neutral-500 disabled:opacity-50 disabled:hover:bg-neutral-500 disabled:cursor-not-allowed"
  return (
    <button
      className={"rounded-full " + className + (disabled ? disabledStyle : "")}
      type={type}
      onClick={props.onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  )
}
