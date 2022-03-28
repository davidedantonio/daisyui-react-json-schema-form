import React from "react";

import { AddButtonProps } from "@rjsf/core";
import { BsPlus } from "react-icons/bs";

const AddButton: React.FC<AddButtonProps> = props => (
  <div className="flex justify-end">
    <button {...props} className="btn btn-primary btn-circle">
      <BsPlus />
    </button>
  </div>
);

export default AddButton;
