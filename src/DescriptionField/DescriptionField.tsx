import React from "react";
import { FieldProps } from "@rjsf/core";

export interface DescriptionFieldProps extends Partial<FieldProps> {
  description?: string;
}

const DescriptionField = ({ description }: Partial<FieldProps>) => {
  if (description) {
    return <div className="text-sm pb-4 pt-2.5">
      {description}
    </div>;
  }

  return null;
};

export default DescriptionField;
