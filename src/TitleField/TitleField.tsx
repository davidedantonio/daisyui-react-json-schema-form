import React from "react";
import { FieldProps } from "@rjsf/core";

export interface TitleFieldProps extends Partial<FieldProps> {
  title: string;
}

const TitleField = ({ title, uiSchema }: Partial<FieldProps>) => (
  <>
    <div className="pb-2.5 border-b-2 border-y-zinc-200 mt-5">
      <h2 className={'text-xl font-bold'}>{(uiSchema && uiSchema["ui:title"]) || title}</h2>
    </div>
  </>
);

export default TitleField;
