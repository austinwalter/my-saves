import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button(props: Props) {
  const { className = "", disabled = false } = props

  const disabledStyle: string = " disabled:bg-neutral-500 disabled:opacity-50 disabled:hover:bg-neutral-500 disabled:cursor-not-allowed"
  return (
    <button
      className={"rounded-full " + className + (disabled ? disabledStyle : "")}
      type="button"
      onClick={props.onClick}
      disabled={disabled}
    >
      {props.children}
    </button>
  )
}
