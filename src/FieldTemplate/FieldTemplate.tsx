import React from "react";

import { FieldTemplateProps } from "@rjsf/core";

const FieldTemplate = ({
  id,
  children,
  displayLabel,
  rawErrors = [],
  rawHelp,
  rawDescription,
}: FieldTemplateProps) => {
  return (
    <div className="form-control w-full">
      {children}
      {displayLabel && rawDescription ? (
        <label className={'label'}>
          <span className={`label-text ${rawErrors.length > 0 ? "text-error" : "text-base-400"}`}>
            {rawDescription}
          </span>
        </label>
      ) : null}
      {rawErrors.length > 0 && (
        <div className={'text-error text-sm'}>
          <ul>
            {rawErrors.map((error: string, index: number) => <li key={index}>{error}</li>)}
          </ul>
        </div>
      )}
      {rawHelp && (
        <label className="label" id={id}>
          <span className={`label-text-alt ${rawErrors.length > 0 ? "text-error" : "text-base-400"}`}>
            {rawHelp}
          </span>
        </label>
      )}
    </div>
  );
};

export default FieldTemplate;
