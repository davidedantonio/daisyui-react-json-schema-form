import React from "react";
import { IoIosRemove } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const mappings: any = {
  remove: <IoIosRemove />,
  plus: <GrAdd />,
  "arrow-up": <AiOutlineArrowUp />,
  "arrow-down": <AiOutlineArrowDown />,
};

type IconButtonProps = {
  icon: string;
  className?: string;
  tabIndex?: number;
  style?: any;
  disabled?: any;
  onClick?: any;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, className, ...otherProps } = props;
  return (
    <a {...otherProps}>
      {mappings[icon]}
    </a>
  );
};

export default IconButton;
